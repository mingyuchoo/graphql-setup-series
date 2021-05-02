import { arg, mutationField, nonNull } from '@nexus/schema';

export const GroupUpsertOneMutation = mutationField('upsertOneGroup', {
  type: nonNull('Group'),
  args: {
    where: nonNull(
      arg({
        type: 'GroupWhereUniqueInput',
      })
    ),
    create: nonNull(
      arg({
        type: 'GroupCreateInput',
      })
    ),
    update: nonNull(
      arg({
        type: 'GroupUpdateInput',
      })
    ),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.group.upsert({
      ...args,
      ...select,
    });
  },
});
