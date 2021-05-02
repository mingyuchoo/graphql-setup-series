import { arg, list, nonNull, queryField } from '@nexus/schema';

export const ProfileFindCountQuery = queryField('findManyProfileCount', {
  type: nonNull('Int'),
  args: {
    where: 'ProfileWhereInput',
    orderBy: list(arg({ type: 'ProfileOrderByInput' })),
    cursor: 'ProfileWhereUniqueInput',
    distinct: 'ProfileScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.profile.count(args as any);
  },
});
