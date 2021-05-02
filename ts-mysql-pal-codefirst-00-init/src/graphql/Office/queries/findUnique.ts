import { arg, nonNull, queryField } from '@nexus/schema';

export const OfficeFindUniqueQuery = queryField('findUniqueOffice', {
  type: 'Office',
  args: {
    where: arg({
      type: 'OfficeWhereUniqueInput',
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.office.findUnique({
      where,
      ...select,
    });
  },
});
