import ForCode from "./ForCode";
import Funder from "./Funder";
import RecordStatusType from "./RecordStatusType";
import School from "./School";
import IpOwner from "./IpOwner";
import RetentionPeriod from "./RetentionPeriod";
import Collaborator from "./Collaborator";
import Allocation from "./Allocation";

interface GenericMultipleEntry {
  id?: number;
  record_id: number;
  name: string;
}

export default interface Record {
  id: number;
  raid: string;
  short_code: string;
  name: string;
  description: string;
  provisioner_uuid: string;
  record_status_type_id: number;
  is_rhd: boolean;
  school_id: number;
  project_start: Date;
  project_end: Date;
  has_human_subjects: boolean;
  has_animal_subjects: boolean;
  has_funders: boolean;
  has_pre_existing_data: boolean;
  has_pre_existing_data_restrictions: boolean;
  has_contractual_data: boolean;
  has_external_data_storage: boolean;
  has_data_confidential_information: boolean;
  has_data_cultural_information: boolean;
  has_data_ecological_information: boolean;
  has_data_dictionary: boolean;
  human_ethics_reference: string;
  animal_ethics_reference: string;
  contractual_data_meets_requirements: number;
  data_dictionary_details: string;
  pre_existing_data_restrictions: string;
  pre_existing_data_origin_details: string;
  has_pre_existing_data_external_storage: boolean;
  pre_existing_data_retention: string;
  has_pre_existing_data_contingency_plan: boolean;
  pre_existing_data_contingency_plan_details: string;
  policy_aboriginal_conduct: boolean;
  policy_children: boolean;
  policy_section95: boolean;
  policy_animal_care: boolean;
  policy_nature_conservation: boolean;
  policy_biotechnology: boolean;
  policy_biosafety: boolean;
  policy_other: string;
  ip_owner_id: number;
  ip_owner_details: string;
  retention_period_id: number;
  retention_period_details: string;
  uses_repository: boolean;
  uses_repository_excuse: string;
  human_more_details: string;
  human_will_consent: boolean;
  human_can_share: boolean;
  storage_human_identifiable_data: boolean;
  storage_hpc_requirement: boolean;
  created_at: Date;
  updated_at: Date;
  funders: Funder[];
  record_status_type: RecordStatusType;
  data_safe_guards: GenericMultipleEntry[];
  external_storage_places: GenericMultipleEntry[];
  file_formats: GenericMultipleEntry[];
  for_codes: ForCode[];
  human_identifiability: HumanIdentifiability[];
  human_information_sources: HumanInformationSource[];
  human_information_types: HumanInformationType[];
  repositories: GenericMultipleEntry[];
  version_controls: GenericMultipleEntry[];
  school: School;
  ip_owner: IpOwner;
  retention_period: RetentionPeriod;
  collaborators: Collaborator[];
  pre_existing_data_origins: GenericMultipleEntry[];
  pre_existing_data_external_storage_places: GenericMultipleEntry[];
  data_types: GenericMultipleEntry[];
  allocations: Allocation[];
};

export interface HumanIdentifiability {
  id: number;
  name: string;
}

export interface HumanInformationSource {
  id: number;
  name: string;
}

export interface HumanInformationType {
  id: number;
  name: string;
}
