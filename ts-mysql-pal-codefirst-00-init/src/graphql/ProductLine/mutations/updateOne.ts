import { arg, mutationField, nonNull } from '@nexus/schema';

export const ProductLineUpdateOneMutation = mutationField('updateOneProductLine', {
  type: nonNull('ProductLine'),
  args: {
    where: nonNull(
      arg({
        type: 'ProductLineWhereUniqueInput',
      })
    ),
    data: nonNull(
      arg({
        type: 'ProductLineUpdateInput',
      })
    ),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.productLine.update({
      where,
      data,
      ...select,
    });
  },
});
