# Apollo Client

## 캐시 설정

```
const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});
```
