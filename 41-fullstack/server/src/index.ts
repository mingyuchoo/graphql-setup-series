import { ApolloServer, gql } from 'apollo-server-express';
import cors from 'cors';
import express from 'express';
import { makeExecutableSchema } from 'graphql-tools';
import http from 'http';

const port = process.env.PORT || 4000;

// 데이터소스
const books = [
  {
    title: '해리포터',
    author: 'J.K.롤링',
  },
  {
    title: '트와일라잇',
    author: '스테프니 메이어',
  },
  {
    title: '왕좌의 게임',
    author: '조지 R.R.',
  },
  {
    title: '개미',
    author: '베르나르 베르베르',
  },
  {
    title: '눈 먼 자들의 도시',
    author: '주제 사라마구',
  },
];

// 그래프QL 스키마
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`;

// 해결자
const resolvers = {
  Query: {
    books: () => books,
  },
};

// 스키마와 해결자 결합
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

// 아폴로서버 객체 생성
const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true,
});

// express와 http 서버 설정
const app = express();
app.use('*', cors());
const httpServer = http.createServer(app);

// 미들웨어 설정
server.applyMiddleware({ app });
server.applyMiddleware({ app, path: '/graphql' });
server.installSubscriptionHandlers(httpServer);

// 서버 실행
httpServer.listen(port, () => {
  console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`);
  console.log(`🚀 Subscriptions ready at ws://localhost:${port}${server.subscriptionsPath}`);
});
