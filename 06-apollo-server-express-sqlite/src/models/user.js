const user = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      username: {
        type: DataTypes.STRING,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true, len: [7, 42] },
      },
      role: {
        type: DataTypes.STRING,
      },
    },
    {
      // options
      timestamps: true,
    },
  );
  User.associate = models => {
    User.hasMany(models.Article);
  };
  return User;
};

export default user;
