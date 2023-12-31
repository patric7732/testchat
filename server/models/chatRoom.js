const Sequelize = require("sequelize");

class chatRoom extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        chatRoomId: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        userId: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        userId2: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        roomNum: {
          allowNull: false,
          type: Sequelize.STRING,
        },
      },
      {
        sequelize,
        timstamps: true,
        modelName: "ChatRoom",
      }
    );
  }
  static associate(db) {
    db.ChatRoom.hasMany(db.ChatParticipant, {
      foreignKey: { name: "chatRoomId", allowNull: true },
    });
    db.ChatRoom.belongsTo(db.User, {
      foreignKey: { name: "userId", allowNull: true },
      onDelete: "cascade",
    });
  }
}

module.exports = chatRoom;
