import { arg, mutationField, nonNull } from '@nexus/schema';

export const OfficeUpdateOneMutation = mutationField('updateOneOffice', {
  type: nonNull('Office'),
  args: {
    where: nonNull(
      arg({
        type: 'OfficeWhereUniqueInput',
      })
    ),
    data: nonNull(
      arg({
        type: 'OfficeUpdateInput',
      })
    ),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.office.update({
      where,
      data,
      ...select,
    });
  },
});
