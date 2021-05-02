import { arg, mutationField, nonNull } from '@nexus/schema';

export const EmployeeUpdateOneMutation = mutationField('updateOneEmployee', {
  type: nonNull('Employee'),
  args: {
    where: nonNull(
      arg({
        type: 'EmployeeWhereUniqueInput',
      })
    ),
    data: nonNull(
      arg({
        type: 'EmployeeUpdateInput',
      })
    ),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.employee.update({
      where,
      data,
      ...select,
    });
  },
});
