import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recipe.init(
    {
      title: DataTypes.STRING,
      ingredients: DataTypes.TEXT,
      direction: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Recipe',
    }
  );
  Recipe.associate = function (models) {
    Recipe.belongsTo(models.User, { foreignKey: 'userId' });
  };
  return Recipe;
};
