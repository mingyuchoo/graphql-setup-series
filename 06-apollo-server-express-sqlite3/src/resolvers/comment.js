export default {
  Query: {
    comments: async (parent, args, { models }) => {
      return await models.Comment.findAll();
    },
    comment: async (parent, { id }, { models }) => {
      return await models.Comment.findByPk(id);
    },
  },
  Mutation: {
    createComment: async (parent, { comment }, { models }) => {
      return await models.Comment.create({
        comment: comment,
      });
    },
    updateComment: async (parent, { id, comment }, { models }) => {
      return await models.Comment.update(
        { comment: comment },
        {
          where: {
            id: id,
          },
        },
      );
    },
    deleteComment: async (parent, { id }, { models }) => {
      return await models.Comment.destroy({
        where: {
          id,
        },
      });
    },
  },
  Comment: {
    author: async (comment, args, { models }) => {
      return await models.Author.findByPk(comment.AuthorId);
    },
    article: async (comment, args, { models }) => {
      return await models.Article.findByPk(comment.ArticleId);
    },
  },
};
