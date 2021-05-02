import { arg, mutationField, nonNull } from '@nexus/schema';

export const ProfileUpsertOneMutation = mutationField('upsertOneProfile', {
  type: nonNull('Profile'),
  args: {
    where: nonNull(
      arg({
        type: 'ProfileWhereUniqueInput',
      })
    ),
    create: nonNull(
      arg({
        type: 'ProfileCreateInput',
      })
    ),
    update: nonNull(
      arg({
        type: 'ProfileUpdateInput',
      })
    ),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.profile.upsert({
      ...args,
      ...select,
    });
  },
});
