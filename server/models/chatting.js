const Sequelize = require("sequelize");

class Chatting extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        commentId: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        comment: {
          allowNull: false,
          type: Sequelize.STRING(100),
        },
        userId: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        trackId: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
      },
      {
        sequelize,
        modelName: "Comment",
        timestamps: true,
      }
    );
  }
  static associate(db) {
    db.Chat.belongsTo(db.User, {
      foreignKey: { name: "userId", allowNull: true },
      onDelete: "cascade",
    });
  }
}

module.exports = Chatting;
