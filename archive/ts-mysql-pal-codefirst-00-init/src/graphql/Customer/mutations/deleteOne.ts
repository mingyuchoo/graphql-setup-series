import { arg, mutationField, nonNull } from '@nexus/schema';

export const CustomerDeleteOneMutation = mutationField('deleteOneCustomer', {
  type: 'Customer',
  args: {
    where: nonNull(
      arg({
        type: 'CustomerWhereUniqueInput',
      })
    ),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    await prisma.onDelete({ model: 'Customer', where });
    return prisma.customer.delete({
      where,
      ...select,
    });
  },
});
