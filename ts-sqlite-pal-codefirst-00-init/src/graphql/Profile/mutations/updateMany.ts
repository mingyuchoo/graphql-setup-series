import { arg, mutationField, nonNull } from '@nexus/schema';

export const ProfileUpdateManyMutation = mutationField('updateManyProfile', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'ProfileWhereInput',
    }),
    data: nonNull(
      arg({
        type: 'ProfileUpdateManyMutationInput',
      })
    ),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.profile.updateMany(args as any);
  },
});
