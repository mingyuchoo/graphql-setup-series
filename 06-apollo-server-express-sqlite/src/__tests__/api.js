import axios from 'axios';

const API_URI = 'http://localhost:4000/graphql';

export const user = async variables =>
  axios.post(API_URI, {
    query: `
    query ($id: ID!) {
      user(id: $id) {
        id
        username
        email
      }
    }
    `,
    variables,
  });

export const users = async variables =>
  axios.post(API_URI, {
    query: `
    query {
      users {
        id
        username
        email
      }
    }
    `,
    variables,
  });
