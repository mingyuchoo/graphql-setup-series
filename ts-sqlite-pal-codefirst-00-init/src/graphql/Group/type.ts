import { objectType } from '@nexus/schema';

export const Group = objectType({
  nonNullDefaults: {
    output: true,
    input: false,
  },
  name: 'Group',
  definition(t) {
    t.int('id');
    t.string('name');
    t.field('createdAt', { type: 'DateTime' });
    t.field('updatedAt', { type: 'DateTime' });
    t.list.field('users', {
      type: 'User',
      args: {
        where: 'UserWhereInput',
        orderBy: 'UserOrderByInput',
        cursor: 'UserWhereUniqueInput',
        take: 'Int',
        skip: 'Int',
        distinct: 'UserScalarFieldEnum',
      },
      resolve(root: any) {
        return root.users;
      },
    });
  },
});
