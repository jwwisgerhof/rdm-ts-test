export interface FunderStatusType {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export default interface Funder {
  id: number;
  record_id: number;
  funder_status_type_id: number;
  name: string;
  reference_number: string;
  created_at: Date;
  updated_at: Date;
  funder_status_type: FunderStatusType;
};
