import { arg, mutationField, nonNull } from '@nexus/schema';

export const OfficeUpsertOneMutation = mutationField('upsertOneOffice', {
  type: nonNull('Office'),
  args: {
    where: nonNull(
      arg({
        type: 'OfficeWhereUniqueInput',
      })
    ),
    create: nonNull(
      arg({
        type: 'OfficeCreateInput',
      })
    ),
    update: nonNull(
      arg({
        type: 'OfficeUpdateInput',
      })
    ),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.office.upsert({
      ...args,
      ...select,
    });
  },
});
