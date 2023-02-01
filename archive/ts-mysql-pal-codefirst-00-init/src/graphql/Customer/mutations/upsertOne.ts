import { arg, mutationField, nonNull } from '@nexus/schema';

export const CustomerUpsertOneMutation = mutationField('upsertOneCustomer', {
  type: nonNull('Customer'),
  args: {
    where: nonNull(
      arg({
        type: 'CustomerWhereUniqueInput',
      })
    ),
    create: nonNull(
      arg({
        type: 'CustomerCreateInput',
      })
    ),
    update: nonNull(
      arg({
        type: 'CustomerUpdateInput',
      })
    ),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.customer.upsert({
      ...args,
      ...select,
    });
  },
});
