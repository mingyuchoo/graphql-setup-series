import { Db } from 'mongodb';

export interface MongoContext {
  db: Db;
}
