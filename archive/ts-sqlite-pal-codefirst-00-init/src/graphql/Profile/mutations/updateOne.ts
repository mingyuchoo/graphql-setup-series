import { arg, mutationField, nonNull } from '@nexus/schema';

export const ProfileUpdateOneMutation = mutationField('updateOneProfile', {
  type: nonNull('Profile'),
  args: {
    where: nonNull(
      arg({
        type: 'ProfileWhereUniqueInput',
      })
    ),
    data: nonNull(
      arg({
        type: 'ProfileUpdateInput',
      })
    ),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.profile.update({
      where,
      data,
      ...select,
    });
  },
});
