import { extendType, objectType } from '@nexus/schema';

export const Comment = objectType({
  name: 'Comment',
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.content();
    t.model.postId();
    t.model.post();
  },
});

export const CommentQuery = extendType({
  type: 'Query',
  definition(t) {
    t.crud.comment();
    t.crud.comments({
      type: 'Comment',
      pagination: true,
      filtering: true,
      ordering: true,
    });
  },
});

export const CommentMutation = extendType({
  type: 'Mutation',
  definition(t) {
    t.crud.createOneComment({ alias: 'createComment' });
    t.crud.updateOneComment({ alias: 'updateComment' });
    t.crud.deleteOneComment({ alias: 'deleteComment' });
    t.crud.updateManyComment({ alias: 'updateComments' });
    t.crud.deleteManyComment({ alias: 'deleteComments' });
  },
});
