import { arg, mutationField, nonNull } from '@nexus/schema';

export const ProductUpsertOneMutation = mutationField('upsertOneProduct', {
  type: nonNull('Product'),
  args: {
    where: nonNull(
      arg({
        type: 'ProductWhereUniqueInput',
      })
    ),
    create: nonNull(
      arg({
        type: 'ProductCreateInput',
      })
    ),
    update: nonNull(
      arg({
        type: 'ProductUpdateInput',
      })
    ),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.product.upsert({
      ...args,
      ...select,
    });
  },
});
