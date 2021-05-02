import { arg, mutationField, nonNull } from '@nexus/schema';

export const CommentCreateOneMutation = mutationField('createOneComment', {
  type: nonNull('Comment'),
  args: {
    data: nonNull(
      arg({
        type: 'CommentCreateInput',
      })
    ),
  },
  resolve(_parent, { data }, { prisma, select }) {
    return prisma.comment.create({
      data,
      ...select,
    });
  },
});
