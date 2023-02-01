import { arg, mutationField, nonNull } from '@nexus/schema';

export const EmployeeUpdateManyMutation = mutationField('updateManyEmployee', {
  type: nonNull('BatchPayload'),
  args: {
    where: arg({
      type: 'EmployeeWhereInput',
    }),
    data: nonNull(
      arg({
        type: 'EmployeeUpdateManyMutationInput',
      })
    ),
  },
  resolve(_parent, args, { prisma }) {
    return prisma.employee.updateMany(args);
  },
});
