import { arg, list, nonNull, queryField } from '@nexus/schema';

export const OfficeFindCountQuery = queryField('findManyOfficeCount', {
  type: nonNull('Int'),
  args: {
    where: 'OfficeWhereInput',
    orderBy: list(arg({ type: 'OfficeOrderByInput' })),
    cursor: 'OfficeWhereUniqueInput',
    distinct: 'OfficeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.office.count(args);
  },
});
