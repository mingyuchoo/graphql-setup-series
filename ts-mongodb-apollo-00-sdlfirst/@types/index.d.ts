import { Db } from 'mongodb';

declare global {
  export interface MongoContext {
    db: Db;
  }
}
