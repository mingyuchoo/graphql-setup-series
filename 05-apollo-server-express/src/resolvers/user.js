export default {
  Query: {
    users: async (parent, args, { models }) => {
      return await models.User.findAll();
      // return Object.values(models.users);
    },
    user: async (parent, { id }, { models }) => {
      return await models.User.findByPk(id);
      // return models.users[id];
    },
    me: async (parent, args, { models, me }) => {
      if (!me) {
        return null;
      }
      return await models.User.findByPk(me.id);
      // return me;
    }
  },
  User: {
    messages: async (user, args, { models }) => {
      return await models.Message.findAll({
        where: {
          userId: user.id
        }
      });
      // return Object.values(models.messages).filter(
      //   message => message.userId === user.id
      // );
    }
  }
};
