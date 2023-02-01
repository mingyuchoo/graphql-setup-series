import { extendType, objectType, stringArg } from '@nexus/schema';

import { Context } from '../types';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.firstName();
    t.model.lastName();
    t.model.role();
    t.model.profile();
    t.model.posts();
  },
});

export const UserQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.user();
    t.crud.users({
      type: 'User',
      pagination: true,
      filtering: true,
      ordering: true,
    });
    t.field('countUsers', {
      type: 'Int',
      args: {
        firstName: stringArg({ nullable: true }),
        lastName: stringArg({ nullable: true }),
      },
      resolve: async (parent, args, context: Context, info) => {
        const queryResult = await context.prisma.$queryRaw`
        -----------------------------------------
        -- THIS IS THE QUERY FOR COUNT OF USER
        -----------------------------------------
        select count(*) as count
        from public."User"
        where "firstName" like ${'%' + String(args.firstName) + '%'}
        or "lastName" like ${'%' + args.lastName + '%'}
        `;
        return Number(queryResult[0].count);
      },
    });
  },
});

export const UserMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneUser({ alias: 'createUser' });
    t.crud.updateOneUser({ alias: 'updateUser' });
    t.crud.deleteOneUser({ alias: 'deleteUser' });
    t.crud.updateManyUser({ alias: 'updateUsers' });
    t.crud.deleteManyUser({ alias: 'deleteUsers' });
  },
});
