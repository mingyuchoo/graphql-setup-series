import { arg, mutationField, nonNull } from '@nexus/schema';

export const ProductCreateOneMutation = mutationField('createOneProduct', {
  type: nonNull('Product'),
  args: {
    data: nonNull(
      arg({
        type: 'ProductCreateInput',
      })
    ),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.product.create({
      data,
      ...select,
    });
  },
});
