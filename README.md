# 42-apollo-express-with-prisma-using-sdl-splitted

## Reference

- <https://helloinyong.tistory.com/265>
- https://medium.com/@nzaghini/properly-test-a-graphql-server-d178241464e7
- https://github.com/mingyuchoo/graphql-server-addc-2018


## How to Run

1. `npx prisma init`
2. **`npx prisma migrte save --name '<description>' --experimental`** - generate hhistory
3. **`npx prisma migrate up --experimental`** - sync with database
4. **`npx prisma generate`** - generate client
5. `npx prisma studio --experimental` -- run database tool

## Make prisma/.env file for Sqlite3

```
DATABASE_URL="file:./dev.db"
```

Change schema.prisma to

```
datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
...
```

## Make prisma/.env for for PostgreSQL

```
DATABASE_URL="postgresql://<user-name>:<user-password>@localhost:5432/<database>?schema=<schema>&connection_limit=<count>"
```

Change schema.prisma to

```
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
...
```

## Make prisma/.env for for MySQL/MariaDB

```
DATABASE_URL="mysql://<user-name>:<user-password>@localhost:3306/<database>"
```

Change schema.prisma to

```
datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}
...
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
