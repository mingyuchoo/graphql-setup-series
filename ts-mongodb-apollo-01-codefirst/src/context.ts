import dotenv from 'dotenv';
import { Db, MongoClient } from 'mongodb';

dotenv.config();

let db: Db;

export function createContext() {
  if (!db) {
    try {
      const dbClient = new MongoClient(process.env.DATABASE_URL || '', {
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
