// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const UserType = {
  "AUTHOR": "AUTHOR",
  "COMMON": "COMMON"
};

const AgendaContentType = {
  "CHAT": "CHAT",
  "LEARNED": "LEARNED",
  "WILL_LEARN": "WILL_LEARN"
};

const { Users, Progress, Record, Conference, Agenda, AgendaContent } = initSchema(schema);

export {
  Users,
  Progress,
  Record,
  Conference,
  Agenda,
  UserType,
  AgendaContentType,
  AgendaContent
};