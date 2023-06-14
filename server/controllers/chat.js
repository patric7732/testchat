const db = require("../models");
const { ChatLog, ChatRoom, ChatParticipant } = db;

module.exports = {
  create_chat: async (req, res) => {
    const { my_id, type, room_name, identifier, participant } = req.body;

    try {
      const findRoom = await ChatRoom.findOne({
        where: { identifier },
      });

      if (findRoom) {
        const findRoomInfo = await ChatParticipant.findOne({
          where: { user_id: my_id, room_id: findRoom.id },
        });

        const data = {
          room_id: findRoom.id,
          identifier: findRoom.identifier,
          type: findRoom.type,
          room_name: findRoomInfo.room_name,
          not_read_chat: findRoomInfo.not_read_chat,
          last_read_chat_id: findRoomInfo.last_read_chat_id,
          last_chat: findRoom.last_chat,
          updatedAt: findRoom.updatedAt,
        };

        return res.json({
          data,
          msg: "방이 이미 존재합니다.",
        });
      } else {
        const room = await Room.create({
          type,
          identifier,
          last_chat: "",
        });

        await Participant.create({
          user_id: my_id,
          room_id: room.id,
          room_name,
          not_read_chat: 0,
          last_read_chat_id: 0,
        });

        for (const person of participant) {
          if (person.id !== my_id) {
            await Participant.create({
              user_id: person.id,
              room_id: room.id,
              room_name,
              not_read_chat: 0,
              last_read_chat_id: 0,
            });
          }
        }

        const data = {
          room_id: room.id,
          identifier: room.identifier,
          type: room.type,
          room_name,
          last_chat: room.last_chat,
          not_read_chat: 0,
          last_read_chat_id: 0,
          updatedAt: room.updatedAt,
        };

        return res.json({
          data,
          msg: "채팅방이 만들어졌습니다.",
        });
      }
    } catch (err) {
      return res.status(400).json({
        data: false,
        msg: "채팅방을 추가하지 못했습니다.",
      });
    }
  },
};
