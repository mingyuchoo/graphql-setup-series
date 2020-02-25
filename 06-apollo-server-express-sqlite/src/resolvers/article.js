export default {
  Query: {
    articles: async (parent, args, { models }) => {
      return await models.Article.findAll();
    },
    article: async (parent, { id }, { models }) => {
      return await models.Article.findByPk(id);
    },
  },
  Mutation: {
    createArticle: async (parent, { title, content }, { models }) => {
      return await models.Article.create({
        title: title,
        content: content,
      });
    },
    updateArticle: async (parent, { id, title, content }, { models }) => {
      return await models.Article.update(
        { title: title, content: content },
        {
          where: {
            id: id,
          },
        },
      );
    },
    deleteArticle: async (parent, { id }, { models }) => {
      return await models.Article.destroy({
        where: { id },
      });
    },
  },
  Article: {
    author: async (article, args, { models }) => {
      return await models.Author.findByPk(article.AuthorId);
    },
    comments: async (article, args, { models }) => {
      return await models.Comment.findAll({
        where: {
          authorId: article.authorId,
          articleId: article.id,
        },
      });
    },
  },
};
