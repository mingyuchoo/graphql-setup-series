import { arg, list, nonNull, queryField } from '@nexus/schema';

export const EmployeeFindManyQuery = queryField('findManyEmployee', {
  type: nonNull(list(nonNull('Employee'))),
  args: {
    where: 'EmployeeWhereInput',
    orderBy: list(arg({ type: 'EmployeeOrderByInput' })),
    cursor: 'EmployeeWhereUniqueInput',
    distinct: 'EmployeeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.employee.findMany({
      ...args,
      ...select,
    });
  },
});
