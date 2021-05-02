import { arg, list, queryField } from '@nexus/schema';

export const ProfileFindFirstQuery = queryField('findFirstProfile', {
  type: 'Profile',
  args: {
    where: 'ProfileWhereInput',
    orderBy: list(arg({ type: 'ProfileOrderByInput' })),
    cursor: 'ProfileWhereUniqueInput',
    distinct: 'ProfileScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.profile.findFirst({
      ...args,
      ...select,
    });
  },
});
