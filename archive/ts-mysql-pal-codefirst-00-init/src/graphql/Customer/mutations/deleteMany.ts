import { arg, mutationField, nonNull } from '@nexus/schema';

export const CustomerDeleteManyMutation = mutationField('deleteManyCustomer', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'CustomerWhereInput',
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    await prisma.onDelete({ model: 'Customer', where });
    return prisma.customer.deleteMany({ where } as any);
  },
});
