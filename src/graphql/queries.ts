/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        Progresses {
          nextToken
        }
        user_type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConference = /* GraphQL */ `
  query GetConference($id: ID!) {
    getConference(id: $id) {
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
export const listConferences = /* GraphQL */ `
  query ListConferences(
    $filter: ModelConferenceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConferences(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getProgress = /* GraphQL */ `
  query GetProgress($id: ID!) {
    getProgress(id: $id) {
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
export const listProgresses = /* GraphQL */ `
  query ListProgresses(
    $filter: ModelProgressFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProgresses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        contents
        created_at
        users_id
        Records {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAgenda = /* GraphQL */ `
  query GetAgenda($id: ID!) {
    getAgenda(id: $id) {
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
export const listAgenda = /* GraphQL */ `
  query ListAgenda(
    $filter: ModelAgendaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAgenda(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getRecord = /* GraphQL */ `
  query GetRecord($id: ID!) {
    getRecord(id: $id) {
      id
      content
      memo
      progress_id
      createdAt
      updatedAt
    }
  }
`;
export const listRecords = /* GraphQL */ `
  query ListRecords(
    $filter: ModelRecordFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRecords(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
