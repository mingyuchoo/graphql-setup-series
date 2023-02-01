import { arg, nonNull, queryField } from '@nexus/schema';

export const ProfileFindUniqueQuery = queryField('findUniqueProfile', {
  type: 'Profile',
  args: {
    where: arg({
      type: 'ProfileWhereUniqueInput',
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.profile.findUnique({
      where,
      ...select,
    });
  },
});
