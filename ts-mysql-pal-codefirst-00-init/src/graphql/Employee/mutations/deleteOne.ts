import { arg, mutationField, nonNull } from '@nexus/schema';

export const EmployeeDeleteOneMutation = mutationField('deleteOneEmployee', {
  type: 'Employee',
  args: {
    where: nonNull(
      arg({
        type: 'EmployeeWhereUniqueInput',
      })
    ),
  },
  resolve: async (_parent, { where }, { prisma, select }) => {
    await prisma.onDelete({ model: 'Employee', where });
    return prisma.employee.delete({
      where,
      ...select,
    });
  },
});
