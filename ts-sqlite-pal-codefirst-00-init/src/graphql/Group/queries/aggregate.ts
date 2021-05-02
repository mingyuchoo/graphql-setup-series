import { arg, list, queryField } from '@nexus/schema';

export const GroupAggregateQuery = queryField('aggregateGroup', {
  type: 'AggregateGroup',
  args: {
    where: 'GroupWhereInput',
    orderBy: list(arg({ type: 'GroupOrderByInput' })),
    cursor: 'GroupWhereUniqueInput',
    distinct: 'GroupScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.group.aggregate({ ...args, ...select }) as any;
  },
});
