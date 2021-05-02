import { arg, list, nonNull, queryField } from '@nexus/schema';

export const EmployeeFindCountQuery = queryField('findManyEmployeeCount', {
  type: nonNull('Int'),
  args: {
    where: 'EmployeeWhereInput',
    orderBy: list(arg({ type: 'EmployeeOrderByInput' })),
    cursor: 'EmployeeWhereUniqueInput',
    distinct: 'EmployeeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma }) {
    return prisma.employee.count(args);
  },
});
