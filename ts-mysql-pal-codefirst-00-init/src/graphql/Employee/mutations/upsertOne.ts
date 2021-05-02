import { arg, mutationField, nonNull } from '@nexus/schema';

export const EmployeeUpsertOneMutation = mutationField('upsertOneEmployee', {
  type: nonNull('Employee'),
  args: {
    where: nonNull(
      arg({
        type: 'EmployeeWhereUniqueInput',
      })
    ),
    create: nonNull(
      arg({
        type: 'EmployeeCreateInput',
      })
    ),
    update: nonNull(
      arg({
        type: 'EmployeeUpdateInput',
      })
    ),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.employee.upsert({
      ...args,
      ...select,
    });
  },
});
