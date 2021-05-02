import { arg, mutationField, nonNull } from '@nexus/schema';

export const ProfileCreateOneMutation = mutationField('createOneProfile', {
  type: nonNull('Profile'),
  args: {
    data: nonNull(
      arg({
        type: 'ProfileCreateInput',
      })
    ),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.profile.create({
      data,
      ...select,
    });
  },
});
