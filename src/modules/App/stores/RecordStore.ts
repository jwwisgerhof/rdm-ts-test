import { action, observable, computed } from "mobx";

import Record from "../../../interfaces/Record";
import RecordStatusType from "../../../interfaces/RecordStatusType";
import {
  getRecords,
  getRecordStatusTypes
} from "../../../repositories/records";

export interface RecordStoreInterface {
  records: any;
  recordsLoading: boolean;
  recordStatusTypes: any;
  sortedRecords: any;
}

class RecordStore implements RecordStoreInterface {
  @observable public records: Record[] = [];
  @observable public recordsLoading: boolean = false;
  @observable public recordStatusTypes: RecordStatusType[] = [];

  constructor() {
    this.getRecords();
    this.getRecordStatusTypes();
  }

  @action
  getRecords() {
    this.recordsLoading = true;
    getRecords().then(r => {
      this.records = r;
      this.recordsLoading = false;
    });
  }

  @action
  async getRecordStatusTypes() {
    if (!this.recordStatusTypes) {
      this.recordStatusTypes = await getRecordStatusTypes();
    }
  }

  @computed
  get sortedRecords() {
    return this.records.sort((a: any, b: any) => {
      const aUpdated = a.updated_at || "1970-01-01";
      const bUpdated = b.updated_at || "1970-01-01";
      return aUpdated <= bUpdated ? 1 : -1;
    });
  }
}

export default new RecordStore();
