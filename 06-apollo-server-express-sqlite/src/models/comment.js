const comment = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    'Comment',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      comment: {
        type: DataTypes.TEXT,
      },
    },
    {
      // options
      timestamps: false,
    },
  );
  Comment.associate = models => {
    Comment.belongsTo(models.Author, {
      foreignKey: 'authorId',
      as: 'author',
      onDelete: 'CASCADE',
    });
    Comment.belongsTo(models.Article, {
      foreignKey: 'articleId',
      as: 'article',
      onDelete: 'CASCADE',
    });
  };
  return Comment;
};

export default comment;
