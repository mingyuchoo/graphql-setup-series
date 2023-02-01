import { arg, nonNull, queryField } from '@nexus/schema';

export const EmployeeFindUniqueQuery = queryField('findUniqueEmployee', {
  type: 'Employee',
  args: {
    where: arg({
      type: 'EmployeeWhereUniqueInput',
    }),
  },
  resolve(_parent, { where }, { prisma, select }) {
    return prisma.employee.findUnique({
      where,
      ...select,
    });
  },
});
