import { arg, mutationField, nonNull } from '@nexus/schema';

export const OfficeCreateOneMutation = mutationField('createOneOffice', {
  type: nonNull('Office'),
  args: {
    data: nonNull(
      arg({
        type: 'OfficeCreateInput',
      })
    ),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.office.create({
      data,
      ...select,
    });
  },
});
