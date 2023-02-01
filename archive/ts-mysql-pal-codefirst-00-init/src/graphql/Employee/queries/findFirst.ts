import { arg, list, queryField } from '@nexus/schema';

export const EmployeeFindFirstQuery = queryField('findFirstEmployee', {
  type: 'Employee',
  args: {
    where: 'EmployeeWhereInput',
    orderBy: list(arg({ type: 'EmployeeOrderByInput' })),
    cursor: 'EmployeeWhereUniqueInput',
    distinct: 'EmployeeScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.employee.findFirst({
      ...args,
      ...select,
    });
  },
});
