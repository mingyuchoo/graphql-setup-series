import { arg, mutationField, nonNull } from '@nexus/schema';

export const CustomerUpdateOneMutation = mutationField('updateOneCustomer', {
  type: nonNull('Customer'),
  args: {
    where: nonNull(
      arg({
        type: 'CustomerWhereUniqueInput',
      })
    ),
    data: nonNull(
      arg({
        type: 'CustomerUpdateInput',
      })
    ),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.customer.update({
      where,
      data,
      ...select,
    });
  },
});
