const author = (sequelize, DataTypes) => {
  const Author = sequelize.define(
    'Author',
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING(50),
        unique: true,
      },
      name: {
        type: DataTypes.STRING(50),
      },
      email: {
        type: DataTypes.STRING(50),
        unique: true,
      },
      password: {
        type: DataTypes.STRING(50),
        allowNull: false,
        validate: { notEmpty: true, len: [7, 42] },
      },
      role: {
        type: DataTypes.STRING(20),
      },
    },
    {
      // options
      timestamps: false,
    },
  );
  Author.associate = models => {
    Author.hasMany(models.Article, {
      foreignKey: 'authorId',
      as: 'articles',
      onDelete: 'CASCADE',
    });
    Author.hasMany(models.Comment, {
      foreignKey: 'authorId',
      as: 'comments',
      onDelete: 'CASCADE',
    });
  };
  return Author;
};

export default author;
