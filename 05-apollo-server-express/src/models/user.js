const user = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    username: {
      type: DataTypes.STRING
    }
  });
  User.associate = models => {
    User.hasMany(models.Message, { onDelete: "CASCADE" });
  };
  User.findByLogin = async loginData => {
    let user = await User.findOne({
      where: { username: loginData }
    });
    if (!user) {
      user = await User.findOne({
        where: { email: loginData }
      });
    }
    return user;
  };

  return User;
};
export default user;
