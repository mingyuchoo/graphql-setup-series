import { arg, list, nonNull, queryField } from '@nexus/schema';

export const OfficeFindManyQuery = queryField('findManyOffice', {
  type: nonNull(list(nonNull('Office'))),
  args: {
    where: 'OfficeWhereInput',
    orderBy: list(arg({ type: 'OfficeOrderByInput' })),
    cursor: 'OfficeWhereUniqueInput',
    distinct: 'OfficeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.office.findMany({
      ...args,
      ...select,
    });
  },
});
