import { arg, mutationField, nonNull } from '@nexus/schema';

export const ProfileDeleteOneMutation = mutationField('deleteOneProfile', {
  type: 'Profile',
  args: {
    where: nonNull(
      arg({
        type: 'ProfileWhereUniqueInput',
      })
    ),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    await prisma.onDelete({ model: 'Profile', where });
    return prisma.profile.delete({
      where,
      ...select,
    });
  },
});
