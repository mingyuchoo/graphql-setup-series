import { arg, list, queryField } from '@nexus/schema';

export const UserFindFirstQuery = queryField('findFirstUser', {
  type: 'User',
  args: {
    where: 'UserWhereInput',
    orderBy: list(arg({ type: 'UserOrderByInput' })),
    cursor: 'UserWhereUniqueInput',
    distinct: 'UserScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.user.findFirst({
      ...args,
      ...select,
    });
  },
});
