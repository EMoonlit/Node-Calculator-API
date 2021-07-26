const defineUserModel = (sequelize, DataTypes) => {
  const Users = sequelize.define('Users', {
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  }, { timestamps: false });

  return Users;
};

module.exports = defineUserModel;
