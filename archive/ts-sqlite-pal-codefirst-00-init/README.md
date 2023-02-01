## ts-sqlite-pal-codefirst-00-init

We added `sqlite` as db provider in `schema.prisma` you can change it to your custom db provider

after an update your `schema.prisma` run

```bashell
yarn create-migration
yarn migrate-database
```

this commands will save your schema into db

now run

```bashell
pal g
yarn generate
yarn dev
```

run on production

```bashell
yarn start
```

- build prisma client
- build crud system
- start dev server

`Good work`
