export default {
  Query: {
    authors: async (parent, args, { models }) => {
      return await models.Author.findAll();
    },
    author: async (parent, { id }, { models }) => {
      return await models.Author.findByPk(id);
    },
  },
  Mutation: {
    createAuthor: async (parent, { username, email, password }, { models }) => {
      return await models.Author.create({
        username: username,
        email: email,
        password: password,
      });
    },
    updateAuthor: async (parent, { id, name, role }, { models }) => {
      return await models.Author.update(
        { name: name, role: role },
        {
          where: {
            id: id,
          },
        },
      );
    },
    deleteAuthor: async (parent, { id }, { models }) => {
      return await models.Author.destroy({
        where: { id },
      });
    },
  },
  Author: {
    articles: async (author, args, { models }) => {
      return await models.Article.findAll({
        where: {
          AuthorId: author.id,
        },
      });
    },
  },
};
