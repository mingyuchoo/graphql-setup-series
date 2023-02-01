import { arg, mutationField, nonNull } from '@nexus/schema';

export const ProductUpdateManyMutation = mutationField('updateManyProduct', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'ProductWhereInput',
    }),
    data: nonNull(
      arg({
        type: 'ProductUpdateManyMutationInput',
      })
    ),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.product.updateMany(args);
  },
});
