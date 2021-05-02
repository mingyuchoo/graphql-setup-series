import { arg, mutationField, nonNull } from '@nexus/schema';

export const ProductLineUpdateManyMutation = mutationField('updateManyProductLine', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'ProductLineWhereInput',
    }),
    data: nonNull(
      arg({
        type: 'ProductLineUpdateManyMutationInput',
      })
    ),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.productLine.updateMany(args);
  },
});
