export default interface User {
  id: number;
  uuid: string;
  display_name: string;
  first_name: string;
  surname: string;
  au_edu_person_shared_token?: string;
  edu_person_principal_name: string;
  mail: string;
  user_group: UserGroup;
};

export interface UserGroup {
  code: string;
  name: string;
}
