import { arg, list, queryField } from '@nexus/schema';

export const OfficeAggregateQuery = queryField('aggregateOffice', {
  type: 'AggregateOffice',
  args: {
    where: 'OfficeWhereInput',
    orderBy: list(arg({ type: 'OfficeOrderByInput' })),
    cursor: 'OfficeWhereUniqueInput',
    distinct: 'OfficeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.office.aggregate({ ...args, ...select });
  },
});
