# 42-apollo-express-with-prisma-using-sdl-splitted

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
