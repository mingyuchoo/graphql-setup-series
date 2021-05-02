import { arg, list, queryField } from '@nexus/schema';

export const OfficeFindFirstQuery = queryField('findFirstOffice', {
  type: 'Office',
  args: {
    where: 'OfficeWhereInput',
    orderBy: list(arg({ type: 'OfficeOrderByInput' })),
    cursor: 'OfficeWhereUniqueInput',
    distinct: 'OfficeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.office.findFirst({
      ...args,
      ...select,
    });
  },
});
