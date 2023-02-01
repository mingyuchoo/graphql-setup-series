import { arg, mutationField, nonNull } from '@nexus/schema';

export const UserUpdateManyMutation = mutationField('updateManyUser', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'UserWhereInput',
    }),
    data: nonNull(
      arg({
        type: 'UserUpdateManyMutationInput',
      })
    ),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.user.updateMany(args as any);
  },
});
