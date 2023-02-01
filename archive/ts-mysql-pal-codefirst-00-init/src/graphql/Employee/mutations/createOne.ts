import { arg, mutationField, nonNull } from '@nexus/schema';

export const EmployeeCreateOneMutation = mutationField('createOneEmployee', {
  type: nonNull('Employee'),
  args: {
    data: nonNull(
      arg({
        type: 'EmployeeCreateInput',
      })
    ),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.employee.create({
      data,
      ...select,
    });
  },
});
