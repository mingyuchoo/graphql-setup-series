import { arg, nonNull, queryField } from '@nexus/schema';

export const CustomerFindUniqueQuery = queryField('findUniqueCustomer', {
  type: 'Customer',
  args: {
    where: arg({
      type: 'CustomerWhereUniqueInput',
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.customer.findUnique({
      where,
      ...select,
    });
  },
});
