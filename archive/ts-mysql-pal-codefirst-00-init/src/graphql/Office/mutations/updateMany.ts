import { arg, mutationField, nonNull } from '@nexus/schema';

export const OfficeUpdateManyMutation = mutationField('updateManyOffice', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'OfficeWhereInput',
    }),
    data: nonNull(
      arg({
        type: 'OfficeUpdateManyMutationInput',
      })
    ),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.office.updateMany(args);
  },
});
