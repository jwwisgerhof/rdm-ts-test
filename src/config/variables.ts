export const helpEmail: string = "researchdata@uq.edu.au";
export const helpLink: string =
  "https://guides.library.uq.edu.au/for-researchers/uq-research-data-manager";
export const rdmCloudLink: string = "https://cloud.rdm.uq.edu.au/";
export const uqLogoUrl: string =
  "https://static.uq.net.au/v1/logos/corporate/uq-logo-white.svg";

// Api URL
let apiUrl = "http://dev-rdm.uq.edu.au:8060/";
if (process.env.REACT_APP_ENVIRONMENT === "production") {
  apiUrl = "https://rdm.uq.edu.au/api/v1/";
} else if (process.env.REACT_APP_ENVIRONMENT === "staging") {
  apiUrl = "https://rdm.uq.edu.au/api/staging/";
}
export const apiBase = apiUrl;
