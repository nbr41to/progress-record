import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum AgendaContentType {
  CHAT = "CHAT",
  LEARNED = "LEARNED",
  WILL_LEARN = "WILL_LEARN"
}

export declare class AgendaContent {
  readonly ID: string;
  readonly user_id: string;
  readonly content: string;
  readonly type?: AgendaContentType | keyof typeof AgendaContentType;
  constructor(init: ModelInit<AgendaContent>);
}

type UsersMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ProgressMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RecordMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ConferenceMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type AgendaMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Users {
  readonly id: string;
  readonly name: string;
  readonly Progresses?: (Progress | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Users, UsersMetaData>);
  static copyOf(source: Users, mutator: (draft: MutableModel<Users, UsersMetaData>) => MutableModel<Users, UsersMetaData> | void): Users;
}

export declare class Progress {
  readonly id: string;
  readonly name: string;
  readonly contents?: string[];
  readonly created_at?: string;
  readonly users_id: string;
  readonly Records?: (Record | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Progress, ProgressMetaData>);
  static copyOf(source: Progress, mutator: (draft: MutableModel<Progress, ProgressMetaData>) => MutableModel<Progress, ProgressMetaData> | void): Progress;
}

export declare class Record {
  readonly id: string;
  readonly content: string;
  readonly memo?: string;
  readonly progress_id?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Record, RecordMetaData>);
  static copyOf(source: Record, mutator: (draft: MutableModel<Record, RecordMetaData>) => MutableModel<Record, RecordMetaData> | void): Record;
}

export declare class Conference {
  readonly id: string;
  readonly title: string;
  readonly created_at?: number;
  readonly save_at?: number;
  readonly Agenda?: Agenda;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Conference, ConferenceMetaData>);
  static copyOf(source: Conference, mutator: (draft: MutableModel<Conference, ConferenceMetaData>) => MutableModel<Conference, ConferenceMetaData> | void): Conference;
}

export declare class Agenda {
  readonly id: string;
  readonly chat?: AgendaContent[];
  readonly learned?: AgendaContent[];
  readonly will_learn?: AgendaContent[];
  readonly Conference?: Conference;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Agenda, AgendaMetaData>);
  static copyOf(source: Agenda, mutator: (draft: MutableModel<Agenda, AgendaMetaData>) => MutableModel<Agenda, AgendaMetaData> | void): Agenda;
}