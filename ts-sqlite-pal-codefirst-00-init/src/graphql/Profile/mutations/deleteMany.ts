import { arg, mutationField, nonNull } from '@nexus/schema';

export const ProfileDeleteManyMutation = mutationField('deleteManyProfile', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'ProfileWhereInput',
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    await prisma.onDelete({ model: 'Profile', where });
    return prisma.profile.deleteMany({ where } as any);
  },
});
