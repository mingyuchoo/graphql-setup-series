import Sequelize from 'sequelize';

import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize({
  database: process.env.TEST_DATABASE || process.env.DATABASE || 'postgres',
  port: process.env.PORT || 5432,
  username: process.env.USERNAME || 'postgres',
  password: process.env.PASSWORD || 'postgres',
  dialect: process.env.DIALECT || 'postgres',
  dialectOptions: {
    connectTimeout: process.env.CONNECT_TIMEOUT || 1000,
  },
});

const models = {
  User: sequelize.import('./user'),
  Message: sequelize.import('./message'),
};

Object.keys(models).forEach((key) => {
  if ('associate' in models[key]) {
    models[key].associate(models);
  }
});

export { sequelize };
export default models;
