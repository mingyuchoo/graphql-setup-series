import { arg, mutationField, nonNull } from '@nexus/schema';

export const EmployeeDeleteManyMutation = mutationField('deleteManyEmployee', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'EmployeeWhereInput',
    }),
  },
  resolve: async (_parent, { where }, { prisma }) => {
    await prisma.onDelete({ model: 'Employee', where });
    return prisma.employee.deleteMany({ where } as any);
  },
});
