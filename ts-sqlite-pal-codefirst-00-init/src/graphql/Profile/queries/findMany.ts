import { arg, list, nonNull, queryField } from '@nexus/schema';

export const ProfileFindManyQuery = queryField('findManyProfile', {
  type: nonNull(list(nonNull('Profile'))),
  args: {
    where: 'ProfileWhereInput',
    orderBy: list(arg({ type: 'ProfileOrderByInput' })),
    cursor: 'ProfileWhereUniqueInput',
    distinct: 'ProfileScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.profile.findMany({
      ...args,
      ...select,
    });
  },
});
