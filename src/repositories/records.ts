import { makeRequest } from "../config/fetch";
import Record from "../interfaces/Record";
import RecordStatusType from "../interfaces/RecordStatusType";

export const getRecords = (): Promise<Record[]> => {
  return makeRequest<Record[]>("GET", "records");
};

export const getRecordStatusTypes = (): Promise<RecordStatusType[]> => {
  return makeRequest<RecordStatusType[]>("GET", "record-status-types");
};
