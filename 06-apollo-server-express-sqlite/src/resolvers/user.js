export default {
  Query: {
    users: async (parent, args, { models }) => {
      return await models.User.findAll();
    },
    user: async (parent, { id }, { models }) => {
      return await models.User.findByPk(id);
    },
  },
  Mutation: {
    createUser: async (parent, { username, email, password }, { models }) => {
      return await models.User.create({
        username: username,
        email: email,
        password: password,
      });
    },
    updateUser: async (parent, { id, name, role }, { models }) => {
      return await models.User.update(
        { name: name, role: role },
        {
          where: {
            id: id,
          },
        },
      );
    },
    deleteUser: async (parent, { id }, { models }) => {
      return await models.User.destroy({
        where: { id },
      });
    },
  },
  User: {
    articles: async (user, args, { models }) => {
      return await models.Article.findAll({
        where: {
          UserId: user.id,
        },
      });
    },
  },
};
