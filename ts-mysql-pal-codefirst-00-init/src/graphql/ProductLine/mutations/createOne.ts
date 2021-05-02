import { arg, mutationField, nonNull } from '@nexus/schema';

export const ProductLineCreateOneMutation = mutationField('createOneProductLine', {
  type: nonNull('ProductLine'),
  args: {
    data: nonNull(
      arg({
        type: 'ProductLineCreateInput',
      })
    ),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.productLine.create({
      data,
      ...select,
    });
  },
});
