import { arg, list, queryField } from '@nexus/schema';

export const ProfileAggregateQuery = queryField('aggregateProfile', {
  type: 'AggregateProfile',
  args: {
    where: 'ProfileWhereInput',
    orderBy: list(arg({ type: 'ProfileOrderByInput' })),
    cursor: 'ProfileWhereUniqueInput',
    distinct: 'ProfileScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.profile.aggregate({ ...args, ...select });
  },
});
