const Sequelize = require("sequelize");

class chatParticipant extends Sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        ChatParticipantId: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        user_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        room_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
      },
      {
        sequelize,
        timstamps: true,
        modelName: "ChatParticipant",
      }
    );
  }
  static associate(db) {
    db.chatParticipant.belongsTo(db.ChatRoom, {
      foreignKey: { name: "chatRoomId", allowNull: true },
      onDelete: "cascade",
    });
  }
}

module.exports = chatParticipant;
