import User from "./User";

export default interface Collaborator {
  id: number;
  record_id: number;
  user_id: number;
  is_owner: boolean;
  is_lead: boolean;
  its_added: boolean;
  provider_added: boolean;
  user: User;
};

export interface PendingCollaborator {
  id: number;
  record_id: number;
  name: string;
  mail: string;
  collaborator_id?: number;
  user_id?: number;
  submitter_id: number;
  email_sent: boolean;
}
