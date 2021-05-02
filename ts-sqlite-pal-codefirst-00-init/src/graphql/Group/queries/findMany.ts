import { arg, list, nonNull, queryField } from '@nexus/schema';

export const GroupFindManyQuery = queryField('findManyGroup', {
  type: nonNull(list(nonNull('Group'))),
  args: {
    where: 'GroupWhereInput',
    orderBy: list(arg({ type: 'GroupOrderByInput' })),
    cursor: 'GroupWhereUniqueInput',
    distinct: 'GroupScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.group.findMany({
      ...args,
      ...select,
    });
  },
});
