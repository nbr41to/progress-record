/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers {
    onCreateUsers {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers {
    onUpdateUsers {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers {
    onDeleteUsers {
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
export const onCreateConference = /* GraphQL */ `
  subscription OnCreateConference {
    onCreateConference {
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
export const onUpdateConference = /* GraphQL */ `
  subscription OnUpdateConference {
    onUpdateConference {
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
export const onDeleteConference = /* GraphQL */ `
  subscription OnDeleteConference {
    onDeleteConference {
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
export const onCreateProgress = /* GraphQL */ `
  subscription OnCreateProgress {
    onCreateProgress {
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
export const onUpdateProgress = /* GraphQL */ `
  subscription OnUpdateProgress {
    onUpdateProgress {
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
export const onDeleteProgress = /* GraphQL */ `
  subscription OnDeleteProgress {
    onDeleteProgress {
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
export const onCreateAgenda = /* GraphQL */ `
  subscription OnCreateAgenda {
    onCreateAgenda {
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
export const onUpdateAgenda = /* GraphQL */ `
  subscription OnUpdateAgenda {
    onUpdateAgenda {
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
export const onDeleteAgenda = /* GraphQL */ `
  subscription OnDeleteAgenda {
    onDeleteAgenda {
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
export const onCreateRecord = /* GraphQL */ `
  subscription OnCreateRecord {
    onCreateRecord {
      id
      content
      memo
      progress_id
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRecord = /* GraphQL */ `
  subscription OnUpdateRecord {
    onUpdateRecord {
      id
      content
      memo
      progress_id
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRecord = /* GraphQL */ `
  subscription OnDeleteRecord {
    onDeleteRecord {
      id
      content
      memo
      progress_id
      createdAt
      updatedAt
    }
  }
`;
