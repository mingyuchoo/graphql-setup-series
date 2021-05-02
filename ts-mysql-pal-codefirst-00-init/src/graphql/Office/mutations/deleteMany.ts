import { arg, mutationField, nonNull } from '@nexus/schema';

export const OfficeDeleteManyMutation = mutationField('deleteManyOffice', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'OfficeWhereInput',
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    await prisma.onDelete({ model: 'Office', where });
    return prisma.office.deleteMany({ where } as any);
  },
});
