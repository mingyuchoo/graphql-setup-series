import bcrypt from "bcryptjs";

const resolvers = {
  Query: {
    async user(parent, { id }, { models }) {
      return models.User.findByPk(id);
    },
    async allUsers(parent, args, { models }) {
      return models.User.findAll();
    },
    async allRecipes(parent, args, { models }) {
      return models.Recipe.findAll();
    },
    async recipe(parent, { id }, { models }) {
      return models.Recipe.findByPk(id);
    }
  },
  Mutation: {
    async createUser(parent, { name, email, password }, { models }) {
      return models.User.create({
        name,
        email,
        password: await bcrypt.hash(password, 10)
      });
    },
    async createRecipe(
      parent,
      { userId, title, ingredients, direction },
      { models }
    ) {
      return models.Recipe.create({ userId, title, ingredients, direction });
    }
  },
  User: {
    async recipes(user) {
      return user.getRecipes();
    }
  },
  Recipe: {
    async user(recipe) {
      return recipe.getUser();
    }
  }
};

export default resolvers;
