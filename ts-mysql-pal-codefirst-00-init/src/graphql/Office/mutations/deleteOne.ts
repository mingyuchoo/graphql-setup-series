import { arg, mutationField, nonNull } from '@nexus/schema';

export const OfficeDeleteOneMutation = mutationField('deleteOneOffice', {
  type: 'Office',
  args: {
    where: nonNull(
      arg({
        type: 'OfficeWhereUniqueInput',
      })
    ),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    await prisma.onDelete({ model: 'Office', where });
    return prisma.office.delete({
      where,
      ...select,
    });
  },
});
