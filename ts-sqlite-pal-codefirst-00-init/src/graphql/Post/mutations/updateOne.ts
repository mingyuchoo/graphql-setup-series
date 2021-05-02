import { arg, mutationField, nonNull } from '@nexus/schema';

export const PostUpdateOneMutation = mutationField('updateOnePost', {
  type: nonNull('Post'),
  args: {
    where: nonNull(
      arg({
        type: 'PostWhereUniqueInput',
      })
    ),
    data: nonNull(
      arg({
        type: 'PostUpdateInput',
      })
    ),
  },
  resolve(_parent, { data, where }, { prisma, select }) {
    return prisma.post.update({
      where,
      data,
      ...select,
    });
  },
});
