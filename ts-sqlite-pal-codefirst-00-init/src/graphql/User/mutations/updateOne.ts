import { arg, mutationField, nonNull } from '@nexus/schema';

export const UserUpdateOneMutation = mutationField('updateOneUser', {
  type: nonNull('User'),
  args: {
    where: nonNull(
      arg({
        type: 'UserWhereUniqueInput',
      })
    ),
    data: nonNull(
      arg({
        type: 'UserUpdateInput',
      })
    ),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.user.update({
      where,
      data,
      ...select,
    });
  },
});
