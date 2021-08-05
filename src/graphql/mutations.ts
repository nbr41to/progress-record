/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
      id
      name
      Progresses {
        items {
          id
          name
          contents
          created_at
          users_id
          createdAt
          updatedAt
        }
        nextToken
      }
      user_type
      createdAt
      updatedAt
    }
  }
`;
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
      id
      name
      Progresses {
        items {
          id
          name
          contents
          created_at
          users_id
          createdAt
          updatedAt
        }
        nextToken
      }
      user_type
      createdAt
      updatedAt
    }
  }
`;
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
      id
      name
      Progresses {
        items {
          id
          name
          contents
          created_at
          users_id
          createdAt
          updatedAt
        }
        nextToken
      }
      user_type
      createdAt
      updatedAt
    }
  }
`;
export const createConference = /* GraphQL */ `
  mutation CreateConference(
    $input: CreateConferenceInput!
    $condition: ModelConferenceConditionInput
  ) {
    createConference(input: $input, condition: $condition) {
      id
      title
      created_at
      save_at
      Agenda {
        id
        chat {
          ID
          user_id
          content
          type
        }
        learned {
          ID
          user_id
          content
          type
        }
        will_learn {
          ID
          user_id
          content
          type
        }
        Conference {
          id
          title
          created_at
          save_at
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateConference = /* GraphQL */ `
  mutation UpdateConference(
    $input: UpdateConferenceInput!
    $condition: ModelConferenceConditionInput
  ) {
    updateConference(input: $input, condition: $condition) {
      id
      title
      created_at
      save_at
      Agenda {
        id
        chat {
          ID
          user_id
          content
          type
        }
        learned {
          ID
          user_id
          content
          type
        }
        will_learn {
          ID
          user_id
          content
          type
        }
        Conference {
          id
          title
          created_at
          save_at
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteConference = /* GraphQL */ `
  mutation DeleteConference(
    $input: DeleteConferenceInput!
    $condition: ModelConferenceConditionInput
  ) {
    deleteConference(input: $input, condition: $condition) {
      id
      title
      created_at
      save_at
      Agenda {
        id
        chat {
          ID
          user_id
          content
          type
        }
        learned {
          ID
          user_id
          content
          type
        }
        will_learn {
          ID
          user_id
          content
          type
        }
        Conference {
          id
          title
          created_at
          save_at
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createProgress = /* GraphQL */ `
  mutation CreateProgress(
    $input: CreateProgressInput!
    $condition: ModelProgressConditionInput
  ) {
    createProgress(input: $input, condition: $condition) {
      id
      name
      contents
      created_at
      users_id
      Records {
        items {
          id
          content
          memo
          progress_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateProgress = /* GraphQL */ `
  mutation UpdateProgress(
    $input: UpdateProgressInput!
    $condition: ModelProgressConditionInput
  ) {
    updateProgress(input: $input, condition: $condition) {
      id
      name
      contents
      created_at
      users_id
      Records {
        items {
          id
          content
          memo
          progress_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteProgress = /* GraphQL */ `
  mutation DeleteProgress(
    $input: DeleteProgressInput!
    $condition: ModelProgressConditionInput
  ) {
    deleteProgress(input: $input, condition: $condition) {
      id
      name
      contents
      created_at
      users_id
      Records {
        items {
          id
          content
          memo
          progress_id
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createAgenda = /* GraphQL */ `
  mutation CreateAgenda(
    $input: CreateAgendaInput!
    $condition: ModelAgendaConditionInput
  ) {
    createAgenda(input: $input, condition: $condition) {
      id
      chat {
        ID
        user_id
        content
        type
      }
      learned {
        ID
        user_id
        content
        type
      }
      will_learn {
        ID
        user_id
        content
        type
      }
      Conference {
        id
        title
        created_at
        save_at
        Agenda {
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateAgenda = /* GraphQL */ `
  mutation UpdateAgenda(
    $input: UpdateAgendaInput!
    $condition: ModelAgendaConditionInput
  ) {
    updateAgenda(input: $input, condition: $condition) {
      id
      chat {
        ID
        user_id
        content
        type
      }
      learned {
        ID
        user_id
        content
        type
      }
      will_learn {
        ID
        user_id
        content
        type
      }
      Conference {
        id
        title
        created_at
        save_at
        Agenda {
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteAgenda = /* GraphQL */ `
  mutation DeleteAgenda(
    $input: DeleteAgendaInput!
    $condition: ModelAgendaConditionInput
  ) {
    deleteAgenda(input: $input, condition: $condition) {
      id
      chat {
        ID
        user_id
        content
        type
      }
      learned {
        ID
        user_id
        content
        type
      }
      will_learn {
        ID
        user_id
        content
        type
      }
      Conference {
        id
        title
        created_at
        save_at
        Agenda {
          id
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createRecord = /* GraphQL */ `
  mutation CreateRecord(
    $input: CreateRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    createRecord(input: $input, condition: $condition) {
      id
      content
      memo
      progress_id
      createdAt
      updatedAt
    }
  }
`;
export const updateRecord = /* GraphQL */ `
  mutation UpdateRecord(
    $input: UpdateRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    updateRecord(input: $input, condition: $condition) {
      id
      content
      memo
      progress_id
      createdAt
      updatedAt
    }
  }
`;
export const deleteRecord = /* GraphQL */ `
  mutation DeleteRecord(
    $input: DeleteRecordInput!
    $condition: ModelRecordConditionInput
  ) {
    deleteRecord(input: $input, condition: $condition) {
      id
      content
      memo
      progress_id
      createdAt
      updatedAt
    }
  }
`;
