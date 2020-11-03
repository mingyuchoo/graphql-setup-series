const { ApolloServer, gql } = require('apollo-server');

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

// 서버 생성
const server = new ApolloServer({ typeDefs, resolvers });

// 서버 실행
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
