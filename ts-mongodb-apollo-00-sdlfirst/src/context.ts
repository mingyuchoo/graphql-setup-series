import dotenv from 'dotenv';
import { Db, MongoClient } from 'mongodb';

dotenv.config();

const DATABASE_URL = 'mongodb://test:test@localhost:27017/test';
let db: Db;

export function createContext(): MongoContext {
  if (!db) {
    try {
      const dbClient = new MongoClient(process.env.DATABASE_URL || DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });

      if (!dbClient.isConnected()) dbClient.connect();
      db = dbClient.db('test'); // database name
    } catch (e) {
      console.log('--->error while connecting via graphql context (db)', e);
    }
  }

  return { db };
}
