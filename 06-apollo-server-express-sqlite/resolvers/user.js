export default {
  Query: {
    users: async (parent, args, { models }) => {
      return await models.User.findAll();
    },
    user: async (parent, { id }, { models }) => {
      return await models.User.findByPk(id);
    }
  },
  User: {
    friends: async (usre, args, { models }) => {
      return await models.User.findAll({
        where: {
          id: user.id
        }
      });
    }
  }
};
