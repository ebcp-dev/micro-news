module.exports = (sequelize, type) => {
  return sequelize.define('headline', {
    id: {
      type: type.UUID,
      primaryKey: true,
      defaultValue: type.UUIDV4
    },
    headline: {
      type: type.STRING(1000),
      unique: true
    },
    description: {
      type: type.STRING(1000)
    },
    published: {
      type: type.DATE
    }
  });
};
