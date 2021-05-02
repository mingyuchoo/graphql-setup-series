import { arg, mutationField, nonNull } from '@nexus/schema';

export const UserDeleteManyMutation = mutationField('deleteManyUser', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'UserWhereInput',
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    await prisma.onDelete({ model: 'User', where });
    return prisma.user.deleteMany({ where } as any);
  },
});
