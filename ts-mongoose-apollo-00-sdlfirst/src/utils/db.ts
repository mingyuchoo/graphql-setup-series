import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const DATABASE_URL = 'mongodb://test:test@localhost:27017/test';

const connection = mongoose.connect(process.env.DATABASE_URL || DATABASE_URL, {
  autoIndex: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  poolSize: 50,
  bufferMaxEntries: 0,
  keepAlive: true,
  keepAliveInitialDelay: 120,
  useNewUrlParser: true,
});

mongoose.connection.on('error', (err: string) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(1);
});

mongoose.set('useCreateIndex', true);

connection
  .then((db) => db)
  .catch((err) => {
    console.log(err);
  });

export default connection;
