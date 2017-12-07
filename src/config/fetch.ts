import { apiBase } from "./variables";

export function makeRequest<T>(
  method: string,
  url: string,
  data?: any
): Promise<T> {
  return new Promise<T>(
    async (resolve: (val: any) => void, reject: (val: any) => void) => {
      try {
        const response = await fetch(apiBase + url, {
          credentials: "same-origin",
          method,
          body: data
        });

        if (response.status >= 200 && response.status < 300) {
          const responseJson: any = await response.json();
          if (!responseJson.data) {
            throw new Error("Received invalid response from API");
          }
          resolve(responseJson.data);
        } else {
          throw new Error(`Request failed with status: ${response.statusText}`);
        }
      } catch (error) {
        reject(error);
      }
    }
  );
}
