const article = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    'Article',
    {
      title: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.STRING,
      },
    },
    {
      // options
      timestamps: true,
    },
  );
  Article.associate = models => {
    Article.belongsTo(models.User, { foreignKey: 'UserId' });
  };
  return Article;
};

export default article;
