/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateUsersInput = {
  id?: string | null,
  name: string,
  user_type?: UserType | null,
};

export enum UserType {
  AUTHOR = "AUTHOR",
  COMMON = "COMMON",
}


export type ModelUsersConditionInput = {
  name?: ModelStringInput | null,
  user_type?: ModelUserTypeInput | null,
  and?: Array< ModelUsersConditionInput | null > | null,
  or?: Array< ModelUsersConditionInput | null > | null,
  not?: ModelUsersConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelUserTypeInput = {
  eq?: UserType | null,
  ne?: UserType | null,
};

export type Users = {
  __typename: "Users",
  id: string,
  name: string,
  Progresses?: ModelProgressConnection | null,
  user_type?: UserType | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelProgressConnection = {
  __typename: "ModelProgressConnection",
  items?:  Array<Progress | null > | null,
  nextToken?: string | null,
};

export type Progress = {
  __typename: "Progress",
  id: string,
  name: string,
  contents?: Array< string > | null,
  created_at?: string | null,
  users_id: string,
  Records?: ModelRecordConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelRecordConnection = {
  __typename: "ModelRecordConnection",
  items?:  Array<Record | null > | null,
  nextToken?: string | null,
};

export type Record = {
  __typename: "Record",
  id: string,
  content: string,
  memo?: string | null,
  progress_id?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateUsersInput = {
  id: string,
  name?: string | null,
  user_type?: UserType | null,
};

export type DeleteUsersInput = {
  id: string,
};

export type CreateConferenceInput = {
  id?: string | null,
  title: string,
  created_at?: number | null,
  save_at?: number | null,
  conferenceAgendaId?: string | null,
};

export type ModelConferenceConditionInput = {
  title?: ModelStringInput | null,
  created_at?: ModelIntInput | null,
  save_at?: ModelIntInput | null,
  and?: Array< ModelConferenceConditionInput | null > | null,
  or?: Array< ModelConferenceConditionInput | null > | null,
  not?: ModelConferenceConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Conference = {
  __typename: "Conference",
  id: string,
  title: string,
  created_at?: number | null,
  save_at?: number | null,
  Agenda?: Agenda | null,
  createdAt: string,
  updatedAt: string,
};

export type Agenda = {
  __typename: "Agenda",
  id: string,
  chat?:  Array<AgendaContent > | null,
  learned?:  Array<AgendaContent > | null,
  will_learn?:  Array<AgendaContent > | null,
  Conference?: Conference | null,
  createdAt: string,
  updatedAt: string,
};

export type AgendaContent = {
  __typename: "AgendaContent",
  ID: string,
  user_id: string,
  content: string,
  type?: AgendaContentType | null,
};

export enum AgendaContentType {
  CHAT = "CHAT",
  LEARNED = "LEARNED",
  WILL_LEARN = "WILL_LEARN",
}


export type UpdateConferenceInput = {
  id: string,
  title?: string | null,
  created_at?: number | null,
  save_at?: number | null,
  conferenceAgendaId?: string | null,
};

export type DeleteConferenceInput = {
  id: string,
};

export type CreateProgressInput = {
  id?: string | null,
  name: string,
  contents?: Array< string > | null,
  created_at?: string | null,
  users_id: string,
};

export type ModelProgressConditionInput = {
  name?: ModelStringInput | null,
  contents?: ModelStringInput | null,
  created_at?: ModelStringInput | null,
  users_id?: ModelIDInput | null,
  and?: Array< ModelProgressConditionInput | null > | null,
  or?: Array< ModelProgressConditionInput | null > | null,
  not?: ModelProgressConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateProgressInput = {
  id: string,
  name?: string | null,
  contents?: Array< string > | null,
  created_at?: string | null,
  users_id?: string | null,
};

export type DeleteProgressInput = {
  id: string,
};

export type CreateAgendaInput = {
  id?: string | null,
  chat?: Array< AgendaContentInput > | null,
  learned?: Array< AgendaContentInput > | null,
  will_learn?: Array< AgendaContentInput > | null,
  agendaConferenceId?: string | null,
};

export type AgendaContentInput = {
  ID: string,
  user_id: string,
  content: string,
  type?: AgendaContentType | null,
};

export type ModelAgendaConditionInput = {
  and?: Array< ModelAgendaConditionInput | null > | null,
  or?: Array< ModelAgendaConditionInput | null > | null,
  not?: ModelAgendaConditionInput | null,
};

export type UpdateAgendaInput = {
  id: string,
  chat?: Array< AgendaContentInput > | null,
  learned?: Array< AgendaContentInput > | null,
  will_learn?: Array< AgendaContentInput > | null,
  agendaConferenceId?: string | null,
};

export type DeleteAgendaInput = {
  id: string,
};

export type CreateRecordInput = {
  id?: string | null,
  content: string,
  memo?: string | null,
  progress_id?: string | null,
};

export type ModelRecordConditionInput = {
  content?: ModelStringInput | null,
  memo?: ModelStringInput | null,
  progress_id?: ModelIDInput | null,
  and?: Array< ModelRecordConditionInput | null > | null,
  or?: Array< ModelRecordConditionInput | null > | null,
  not?: ModelRecordConditionInput | null,
};

export type UpdateRecordInput = {
  id: string,
  content?: string | null,
  memo?: string | null,
  progress_id?: string | null,
};

export type DeleteRecordInput = {
  id: string,
};

export type ModelUsersFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  user_type?: ModelUserTypeInput | null,
  and?: Array< ModelUsersFilterInput | null > | null,
  or?: Array< ModelUsersFilterInput | null > | null,
  not?: ModelUsersFilterInput | null,
};

export type ModelUsersConnection = {
  __typename: "ModelUsersConnection",
  items?:  Array<Users | null > | null,
  nextToken?: string | null,
};

export type ModelConferenceFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  created_at?: ModelIntInput | null,
  save_at?: ModelIntInput | null,
  and?: Array< ModelConferenceFilterInput | null > | null,
  or?: Array< ModelConferenceFilterInput | null > | null,
  not?: ModelConferenceFilterInput | null,
};

export type ModelConferenceConnection = {
  __typename: "ModelConferenceConnection",
  items?:  Array<Conference | null > | null,
  nextToken?: string | null,
};

export type ModelProgressFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  contents?: ModelStringInput | null,
  created_at?: ModelStringInput | null,
  users_id?: ModelIDInput | null,
  and?: Array< ModelProgressFilterInput | null > | null,
  or?: Array< ModelProgressFilterInput | null > | null,
  not?: ModelProgressFilterInput | null,
};

export type ModelAgendaFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelAgendaFilterInput | null > | null,
  or?: Array< ModelAgendaFilterInput | null > | null,
  not?: ModelAgendaFilterInput | null,
};

export type ModelAgendaConnection = {
  __typename: "ModelAgendaConnection",
  items?:  Array<Agenda | null > | null,
  nextToken?: string | null,
};

export type ModelRecordFilterInput = {
  id?: ModelIDInput | null,
  content?: ModelStringInput | null,
  memo?: ModelStringInput | null,
  progress_id?: ModelIDInput | null,
  and?: Array< ModelRecordFilterInput | null > | null,
  or?: Array< ModelRecordFilterInput | null > | null,
  not?: ModelRecordFilterInput | null,
};

export type CreateUsersMutationVariables = {
  input: CreateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type CreateUsersMutation = {
  createUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    Progresses?:  {
      __typename: "ModelProgressConnection",
      items?:  Array< {
        __typename: "Progress",
        id: string,
        name: string,
        contents?: Array< string > | null,
        created_at?: string | null,
        users_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    user_type?: UserType | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateUsersMutationVariables = {
  input: UpdateUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type UpdateUsersMutation = {
  updateUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    Progresses?:  {
      __typename: "ModelProgressConnection",
      items?:  Array< {
        __typename: "Progress",
        id: string,
        name: string,
        contents?: Array< string > | null,
        created_at?: string | null,
        users_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    user_type?: UserType | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteUsersMutationVariables = {
  input: DeleteUsersInput,
  condition?: ModelUsersConditionInput | null,
};

export type DeleteUsersMutation = {
  deleteUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    Progresses?:  {
      __typename: "ModelProgressConnection",
      items?:  Array< {
        __typename: "Progress",
        id: string,
        name: string,
        contents?: Array< string > | null,
        created_at?: string | null,
        users_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    user_type?: UserType | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateConferenceMutationVariables = {
  input: CreateConferenceInput,
  condition?: ModelConferenceConditionInput | null,
};

export type CreateConferenceMutation = {
  createConference?:  {
    __typename: "Conference",
    id: string,
    title: string,
    created_at?: number | null,
    save_at?: number | null,
    Agenda?:  {
      __typename: "Agenda",
      id: string,
      chat?:  Array< {
        __typename: "AgendaContent",
        ID: string,
        user_id: string,
        content: string,
        type?: AgendaContentType | null,
      } > | null,
      learned?:  Array< {
        __typename: "AgendaContent",
        ID: string,
        user_id: string,
        content: string,
        type?: AgendaContentType | null,
      } > | null,
      will_learn?:  Array< {
        __typename: "AgendaContent",
        ID: string,
        user_id: string,
        content: string,
        type?: AgendaContentType | null,
      } > | null,
      Conference?:  {
        __typename: "Conference",
        id: string,
        title: string,
        created_at?: number | null,
        save_at?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateConferenceMutationVariables = {
  input: UpdateConferenceInput,
  condition?: ModelConferenceConditionInput | null,
};

export type UpdateConferenceMutation = {
  updateConference?:  {
    __typename: "Conference",
    id: string,
    title: string,
    created_at?: number | null,
    save_at?: number | null,
    Agenda?:  {
      __typename: "Agenda",
      id: string,
      chat?:  Array< {
        __typename: "AgendaContent",
        ID: string,
        user_id: string,
        content: string,
        type?: AgendaContentType | null,
      } > | null,
      learned?:  Array< {
        __typename: "AgendaContent",
        ID: string,
        user_id: string,
        content: string,
        type?: AgendaContentType | null,
      } > | null,
      will_learn?:  Array< {
        __typename: "AgendaContent",
        ID: string,
        user_id: string,
        content: string,
        type?: AgendaContentType | null,
      } > | null,
      Conference?:  {
        __typename: "Conference",
        id: string,
        title: string,
        created_at?: number | null,
        save_at?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteConferenceMutationVariables = {
  input: DeleteConferenceInput,
  condition?: ModelConferenceConditionInput | null,
};

export type DeleteConferenceMutation = {
  deleteConference?:  {
    __typename: "Conference",
    id: string,
    title: string,
    created_at?: number | null,
    save_at?: number | null,
    Agenda?:  {
      __typename: "Agenda",
      id: string,
      chat?:  Array< {
        __typename: "AgendaContent",
        ID: string,
        user_id: string,
        content: string,
        type?: AgendaContentType | null,
      } > | null,
      learned?:  Array< {
        __typename: "AgendaContent",
        ID: string,
        user_id: string,
        content: string,
        type?: AgendaContentType | null,
      } > | null,
      will_learn?:  Array< {
        __typename: "AgendaContent",
        ID: string,
        user_id: string,
        content: string,
        type?: AgendaContentType | null,
      } > | null,
      Conference?:  {
        __typename: "Conference",
        id: string,
        title: string,
        created_at?: number | null,
        save_at?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProgressMutationVariables = {
  input: CreateProgressInput,
  condition?: ModelProgressConditionInput | null,
};

export type CreateProgressMutation = {
  createProgress?:  {
    __typename: "Progress",
    id: string,
    name: string,
    contents?: Array< string > | null,
    created_at?: string | null,
    users_id: string,
    Records?:  {
      __typename: "ModelRecordConnection",
      items?:  Array< {
        __typename: "Record",
        id: string,
        content: string,
        memo?: string | null,
        progress_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProgressMutationVariables = {
  input: UpdateProgressInput,
  condition?: ModelProgressConditionInput | null,
};

export type UpdateProgressMutation = {
  updateProgress?:  {
    __typename: "Progress",
    id: string,
    name: string,
    contents?: Array< string > | null,
    created_at?: string | null,
    users_id: string,
    Records?:  {
      __typename: "ModelRecordConnection",
      items?:  Array< {
        __typename: "Record",
        id: string,
        content: string,
        memo?: string | null,
        progress_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProgressMutationVariables = {
  input: DeleteProgressInput,
  condition?: ModelProgressConditionInput | null,
};

export type DeleteProgressMutation = {
  deleteProgress?:  {
    __typename: "Progress",
    id: string,
    name: string,
    contents?: Array< string > | null,
    created_at?: string | null,
    users_id: string,
    Records?:  {
      __typename: "ModelRecordConnection",
      items?:  Array< {
        __typename: "Record",
        id: string,
        content: string,
        memo?: string | null,
        progress_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAgendaMutationVariables = {
  input: CreateAgendaInput,
  condition?: ModelAgendaConditionInput | null,
};

export type CreateAgendaMutation = {
  createAgenda?:  {
    __typename: "Agenda",
    id: string,
    chat?:  Array< {
      __typename: "AgendaContent",
      ID: string,
      user_id: string,
      content: string,
      type?: AgendaContentType | null,
    } > | null,
    learned?:  Array< {
      __typename: "AgendaContent",
      ID: string,
      user_id: string,
      content: string,
      type?: AgendaContentType | null,
    } > | null,
    will_learn?:  Array< {
      __typename: "AgendaContent",
      ID: string,
      user_id: string,
      content: string,
      type?: AgendaContentType | null,
    } > | null,
    Conference?:  {
      __typename: "Conference",
      id: string,
      title: string,
      created_at?: number | null,
      save_at?: number | null,
      Agenda?:  {
        __typename: "Agenda",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateAgendaMutationVariables = {
  input: UpdateAgendaInput,
  condition?: ModelAgendaConditionInput | null,
};

export type UpdateAgendaMutation = {
  updateAgenda?:  {
    __typename: "Agenda",
    id: string,
    chat?:  Array< {
      __typename: "AgendaContent",
      ID: string,
      user_id: string,
      content: string,
      type?: AgendaContentType | null,
    } > | null,
    learned?:  Array< {
      __typename: "AgendaContent",
      ID: string,
      user_id: string,
      content: string,
      type?: AgendaContentType | null,
    } > | null,
    will_learn?:  Array< {
      __typename: "AgendaContent",
      ID: string,
      user_id: string,
      content: string,
      type?: AgendaContentType | null,
    } > | null,
    Conference?:  {
      __typename: "Conference",
      id: string,
      title: string,
      created_at?: number | null,
      save_at?: number | null,
      Agenda?:  {
        __typename: "Agenda",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteAgendaMutationVariables = {
  input: DeleteAgendaInput,
  condition?: ModelAgendaConditionInput | null,
};

export type DeleteAgendaMutation = {
  deleteAgenda?:  {
    __typename: "Agenda",
    id: string,
    chat?:  Array< {
      __typename: "AgendaContent",
      ID: string,
      user_id: string,
      content: string,
      type?: AgendaContentType | null,
    } > | null,
    learned?:  Array< {
      __typename: "AgendaContent",
      ID: string,
      user_id: string,
      content: string,
      type?: AgendaContentType | null,
    } > | null,
    will_learn?:  Array< {
      __typename: "AgendaContent",
      ID: string,
      user_id: string,
      content: string,
      type?: AgendaContentType | null,
    } > | null,
    Conference?:  {
      __typename: "Conference",
      id: string,
      title: string,
      created_at?: number | null,
      save_at?: number | null,
      Agenda?:  {
        __typename: "Agenda",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRecordMutationVariables = {
  input: CreateRecordInput,
  condition?: ModelRecordConditionInput | null,
};

export type CreateRecordMutation = {
  createRecord?:  {
    __typename: "Record",
    id: string,
    content: string,
    memo?: string | null,
    progress_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRecordMutationVariables = {
  input: UpdateRecordInput,
  condition?: ModelRecordConditionInput | null,
};

export type UpdateRecordMutation = {
  updateRecord?:  {
    __typename: "Record",
    id: string,
    content: string,
    memo?: string | null,
    progress_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRecordMutationVariables = {
  input: DeleteRecordInput,
  condition?: ModelRecordConditionInput | null,
};

export type DeleteRecordMutation = {
  deleteRecord?:  {
    __typename: "Record",
    id: string,
    content: string,
    memo?: string | null,
    progress_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetUsersQueryVariables = {
  id: string,
};

export type GetUsersQuery = {
  getUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    Progresses?:  {
      __typename: "ModelProgressConnection",
      items?:  Array< {
        __typename: "Progress",
        id: string,
        name: string,
        contents?: Array< string > | null,
        created_at?: string | null,
        users_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    user_type?: UserType | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUsersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUsersConnection",
    items?:  Array< {
      __typename: "Users",
      id: string,
      name: string,
      Progresses?:  {
        __typename: "ModelProgressConnection",
        nextToken?: string | null,
      } | null,
      user_type?: UserType | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetConferenceQueryVariables = {
  id: string,
};

export type GetConferenceQuery = {
  getConference?:  {
    __typename: "Conference",
    id: string,
    title: string,
    created_at?: number | null,
    save_at?: number | null,
    Agenda?:  {
      __typename: "Agenda",
      id: string,
      chat?:  Array< {
        __typename: "AgendaContent",
        ID: string,
        user_id: string,
        content: string,
        type?: AgendaContentType | null,
      } > | null,
      learned?:  Array< {
        __typename: "AgendaContent",
        ID: string,
        user_id: string,
        content: string,
        type?: AgendaContentType | null,
      } > | null,
      will_learn?:  Array< {
        __typename: "AgendaContent",
        ID: string,
        user_id: string,
        content: string,
        type?: AgendaContentType | null,
      } > | null,
      Conference?:  {
        __typename: "Conference",
        id: string,
        title: string,
        created_at?: number | null,
        save_at?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListConferencesQueryVariables = {
  filter?: ModelConferenceFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListConferencesQuery = {
  listConferences?:  {
    __typename: "ModelConferenceConnection",
    items?:  Array< {
      __typename: "Conference",
      id: string,
      title: string,
      created_at?: number | null,
      save_at?: number | null,
      Agenda?:  {
        __typename: "Agenda",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetProgressQueryVariables = {
  id: string,
};

export type GetProgressQuery = {
  getProgress?:  {
    __typename: "Progress",
    id: string,
    name: string,
    contents?: Array< string > | null,
    created_at?: string | null,
    users_id: string,
    Records?:  {
      __typename: "ModelRecordConnection",
      items?:  Array< {
        __typename: "Record",
        id: string,
        content: string,
        memo?: string | null,
        progress_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProgressesQueryVariables = {
  filter?: ModelProgressFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProgressesQuery = {
  listProgresses?:  {
    __typename: "ModelProgressConnection",
    items?:  Array< {
      __typename: "Progress",
      id: string,
      name: string,
      contents?: Array< string > | null,
      created_at?: string | null,
      users_id: string,
      Records?:  {
        __typename: "ModelRecordConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetAgendaQueryVariables = {
  id: string,
};

export type GetAgendaQuery = {
  getAgenda?:  {
    __typename: "Agenda",
    id: string,
    chat?:  Array< {
      __typename: "AgendaContent",
      ID: string,
      user_id: string,
      content: string,
      type?: AgendaContentType | null,
    } > | null,
    learned?:  Array< {
      __typename: "AgendaContent",
      ID: string,
      user_id: string,
      content: string,
      type?: AgendaContentType | null,
    } > | null,
    will_learn?:  Array< {
      __typename: "AgendaContent",
      ID: string,
      user_id: string,
      content: string,
      type?: AgendaContentType | null,
    } > | null,
    Conference?:  {
      __typename: "Conference",
      id: string,
      title: string,
      created_at?: number | null,
      save_at?: number | null,
      Agenda?:  {
        __typename: "Agenda",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListAgendaQueryVariables = {
  filter?: ModelAgendaFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAgendaQuery = {
  listAgenda?:  {
    __typename: "ModelAgendaConnection",
    items?:  Array< {
      __typename: "Agenda",
      id: string,
      chat?:  Array< {
        __typename: "AgendaContent",
        ID: string,
        user_id: string,
        content: string,
        type?: AgendaContentType | null,
      } > | null,
      learned?:  Array< {
        __typename: "AgendaContent",
        ID: string,
        user_id: string,
        content: string,
        type?: AgendaContentType | null,
      } > | null,
      will_learn?:  Array< {
        __typename: "AgendaContent",
        ID: string,
        user_id: string,
        content: string,
        type?: AgendaContentType | null,
      } > | null,
      Conference?:  {
        __typename: "Conference",
        id: string,
        title: string,
        created_at?: number | null,
        save_at?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetRecordQueryVariables = {
  id: string,
};

export type GetRecordQuery = {
  getRecord?:  {
    __typename: "Record",
    id: string,
    content: string,
    memo?: string | null,
    progress_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRecordsQueryVariables = {
  filter?: ModelRecordFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRecordsQuery = {
  listRecords?:  {
    __typename: "ModelRecordConnection",
    items?:  Array< {
      __typename: "Record",
      id: string,
      content: string,
      memo?: string | null,
      progress_id?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateUsersSubscription = {
  onCreateUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    Progresses?:  {
      __typename: "ModelProgressConnection",
      items?:  Array< {
        __typename: "Progress",
        id: string,
        name: string,
        contents?: Array< string > | null,
        created_at?: string | null,
        users_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    user_type?: UserType | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateUsersSubscription = {
  onUpdateUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    Progresses?:  {
      __typename: "ModelProgressConnection",
      items?:  Array< {
        __typename: "Progress",
        id: string,
        name: string,
        contents?: Array< string > | null,
        created_at?: string | null,
        users_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    user_type?: UserType | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteUsersSubscription = {
  onDeleteUsers?:  {
    __typename: "Users",
    id: string,
    name: string,
    Progresses?:  {
      __typename: "ModelProgressConnection",
      items?:  Array< {
        __typename: "Progress",
        id: string,
        name: string,
        contents?: Array< string > | null,
        created_at?: string | null,
        users_id: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    user_type?: UserType | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateConferenceSubscription = {
  onCreateConference?:  {
    __typename: "Conference",
    id: string,
    title: string,
    created_at?: number | null,
    save_at?: number | null,
    Agenda?:  {
      __typename: "Agenda",
      id: string,
      chat?:  Array< {
        __typename: "AgendaContent",
        ID: string,
        user_id: string,
        content: string,
        type?: AgendaContentType | null,
      } > | null,
      learned?:  Array< {
        __typename: "AgendaContent",
        ID: string,
        user_id: string,
        content: string,
        type?: AgendaContentType | null,
      } > | null,
      will_learn?:  Array< {
        __typename: "AgendaContent",
        ID: string,
        user_id: string,
        content: string,
        type?: AgendaContentType | null,
      } > | null,
      Conference?:  {
        __typename: "Conference",
        id: string,
        title: string,
        created_at?: number | null,
        save_at?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateConferenceSubscription = {
  onUpdateConference?:  {
    __typename: "Conference",
    id: string,
    title: string,
    created_at?: number | null,
    save_at?: number | null,
    Agenda?:  {
      __typename: "Agenda",
      id: string,
      chat?:  Array< {
        __typename: "AgendaContent",
        ID: string,
        user_id: string,
        content: string,
        type?: AgendaContentType | null,
      } > | null,
      learned?:  Array< {
        __typename: "AgendaContent",
        ID: string,
        user_id: string,
        content: string,
        type?: AgendaContentType | null,
      } > | null,
      will_learn?:  Array< {
        __typename: "AgendaContent",
        ID: string,
        user_id: string,
        content: string,
        type?: AgendaContentType | null,
      } > | null,
      Conference?:  {
        __typename: "Conference",
        id: string,
        title: string,
        created_at?: number | null,
        save_at?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteConferenceSubscription = {
  onDeleteConference?:  {
    __typename: "Conference",
    id: string,
    title: string,
    created_at?: number | null,
    save_at?: number | null,
    Agenda?:  {
      __typename: "Agenda",
      id: string,
      chat?:  Array< {
        __typename: "AgendaContent",
        ID: string,
        user_id: string,
        content: string,
        type?: AgendaContentType | null,
      } > | null,
      learned?:  Array< {
        __typename: "AgendaContent",
        ID: string,
        user_id: string,
        content: string,
        type?: AgendaContentType | null,
      } > | null,
      will_learn?:  Array< {
        __typename: "AgendaContent",
        ID: string,
        user_id: string,
        content: string,
        type?: AgendaContentType | null,
      } > | null,
      Conference?:  {
        __typename: "Conference",
        id: string,
        title: string,
        created_at?: number | null,
        save_at?: number | null,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProgressSubscription = {
  onCreateProgress?:  {
    __typename: "Progress",
    id: string,
    name: string,
    contents?: Array< string > | null,
    created_at?: string | null,
    users_id: string,
    Records?:  {
      __typename: "ModelRecordConnection",
      items?:  Array< {
        __typename: "Record",
        id: string,
        content: string,
        memo?: string | null,
        progress_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProgressSubscription = {
  onUpdateProgress?:  {
    __typename: "Progress",
    id: string,
    name: string,
    contents?: Array< string > | null,
    created_at?: string | null,
    users_id: string,
    Records?:  {
      __typename: "ModelRecordConnection",
      items?:  Array< {
        __typename: "Record",
        id: string,
        content: string,
        memo?: string | null,
        progress_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProgressSubscription = {
  onDeleteProgress?:  {
    __typename: "Progress",
    id: string,
    name: string,
    contents?: Array< string > | null,
    created_at?: string | null,
    users_id: string,
    Records?:  {
      __typename: "ModelRecordConnection",
      items?:  Array< {
        __typename: "Record",
        id: string,
        content: string,
        memo?: string | null,
        progress_id?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAgendaSubscription = {
  onCreateAgenda?:  {
    __typename: "Agenda",
    id: string,
    chat?:  Array< {
      __typename: "AgendaContent",
      ID: string,
      user_id: string,
      content: string,
      type?: AgendaContentType | null,
    } > | null,
    learned?:  Array< {
      __typename: "AgendaContent",
      ID: string,
      user_id: string,
      content: string,
      type?: AgendaContentType | null,
    } > | null,
    will_learn?:  Array< {
      __typename: "AgendaContent",
      ID: string,
      user_id: string,
      content: string,
      type?: AgendaContentType | null,
    } > | null,
    Conference?:  {
      __typename: "Conference",
      id: string,
      title: string,
      created_at?: number | null,
      save_at?: number | null,
      Agenda?:  {
        __typename: "Agenda",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateAgendaSubscription = {
  onUpdateAgenda?:  {
    __typename: "Agenda",
    id: string,
    chat?:  Array< {
      __typename: "AgendaContent",
      ID: string,
      user_id: string,
      content: string,
      type?: AgendaContentType | null,
    } > | null,
    learned?:  Array< {
      __typename: "AgendaContent",
      ID: string,
      user_id: string,
      content: string,
      type?: AgendaContentType | null,
    } > | null,
    will_learn?:  Array< {
      __typename: "AgendaContent",
      ID: string,
      user_id: string,
      content: string,
      type?: AgendaContentType | null,
    } > | null,
    Conference?:  {
      __typename: "Conference",
      id: string,
      title: string,
      created_at?: number | null,
      save_at?: number | null,
      Agenda?:  {
        __typename: "Agenda",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteAgendaSubscription = {
  onDeleteAgenda?:  {
    __typename: "Agenda",
    id: string,
    chat?:  Array< {
      __typename: "AgendaContent",
      ID: string,
      user_id: string,
      content: string,
      type?: AgendaContentType | null,
    } > | null,
    learned?:  Array< {
      __typename: "AgendaContent",
      ID: string,
      user_id: string,
      content: string,
      type?: AgendaContentType | null,
    } > | null,
    will_learn?:  Array< {
      __typename: "AgendaContent",
      ID: string,
      user_id: string,
      content: string,
      type?: AgendaContentType | null,
    } > | null,
    Conference?:  {
      __typename: "Conference",
      id: string,
      title: string,
      created_at?: number | null,
      save_at?: number | null,
      Agenda?:  {
        __typename: "Agenda",
        id: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRecordSubscription = {
  onCreateRecord?:  {
    __typename: "Record",
    id: string,
    content: string,
    memo?: string | null,
    progress_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRecordSubscription = {
  onUpdateRecord?:  {
    __typename: "Record",
    id: string,
    content: string,
    memo?: string | null,
    progress_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRecordSubscription = {
  onDeleteRecord?:  {
    __typename: "Record",
    id: string,
    content: string,
    memo?: string | null,
    progress_id?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
