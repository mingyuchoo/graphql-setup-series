# 41-apollo-express-with-prisma-using-sdl

## Reference

- <https://helloinyong.tistory.com/265>

## How to Run

1. `npx prisma init`
2. **`npx prisma generate`**
3. **`npx prisma migrte save --name '<description>' --experimental`**
4. **`npx prisma migrate up --experimental`**
5. `npx prisma studio --experimental`

## Make prisma/.env file

```
DATABASE_URL="file:./dev.db"
```

## Using GraphQL Codegen for TypeScript

1. `yarn add --dev @graphql-codegen/cli`
2. `yarn add --dev @graphql-codegen/typescript @graphql-codegen/typescript-resolvers @graphql-codegen/typescript-operations`
3. `yarn graphql-codegen init` - generate codegen.yml
4. `yarn codegen`

## Health check

```
http://localhost:4000/.well-known/apollo/server-health
```
