import React from 'react';
import { gql, useQuery } from '@apollo/client';

import './App.css';

// 그래프QL 쿼리
const GET_ALL_USERS = gql`
  query {
    books {
      title
      author
    }
  }
`;

// App 콤포넌트
export default function App() {
  // useQuery 훅으로 그래프QL 쿼리 실행
  const { loading, error, data } = useQuery(GET_ALL_USERS);

  if (loading) return <h2>데이터 로딩 중...</h2>; //  로딩 상태
  if (error) return <h2>에러 발생</h2>; // 에러 상태
  if (!data) return <h2>데이터가 없습니다.</h2>; // 데이터가 없는 상태

  return data.books.map((book) => (
    <p>
      {book.title}:{book.author}
    </p>
  ));
}
