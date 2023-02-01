import { arg, mutationField, nonNull } from '@nexus/schema';

export const CustomerCreateOneMutation = mutationField('createOneCustomer', {
  type: nonNull('Customer'),
  args: {
    data: nonNull(
      arg({
        type: 'CustomerCreateInput',
      })
    ),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.customer.create({
      data,
      ...select,
    });
  },
});
