const article = (sequelize, DataTypes) => {
  const Article = sequelize.define(
    'Article',
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
      },
      content: {
        type: DataTypes.TEXT,
      },
    },
    {
      // options
      timestamps: false,
    },
  );
  Article.associate = models => {
    Article.belongsTo(models.Author, {
      foreignKey: 'authorId',
      as: 'author',
      onDelete: 'CASCADE',
    });
    Article.hasMany(models.Comment, {
      foreignKey: 'articleId',
      as: 'comments',
      onDelete: 'CASCADE',
    });
  };
  return Article;
};

export default article;
