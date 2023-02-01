import { arg, mutationField, nonNull } from '@nexus/schema';

export const CustomerUpdateManyMutation = mutationField('updateManyCustomer', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'CustomerWhereInput',
    }),
    data: nonNull(
      arg({
        type: 'CustomerUpdateManyMutationInput',
      })
    ),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.customer.updateMany(args);
  },
});
