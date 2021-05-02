import { arg, mutationField, nonNull } from '@nexus/schema';

export const ProductLineUpsertOneMutation = mutationField('upsertOneProductLine', {
  type: nonNull('ProductLine'),
  args: {
    where: nonNull(
      arg({
        type: 'ProductLineWhereUniqueInput',
      })
    ),
    create: nonNull(
      arg({
        type: 'ProductLineCreateInput',
      })
    ),
    update: nonNull(
      arg({
        type: 'ProductLineUpdateInput',
      })
    ),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.productLine.upsert({
      ...args,
      ...select,
    });
  },
});
