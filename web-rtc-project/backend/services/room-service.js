import Room from "../models/room-model";

class RoomService
{
    async create(payload)
    {
        const {topic , roomType , ownerId} = payload;
        const room = new Room({
            topic , 
            roomType ,
            ownerId , 
            speakers : [ownerId]
        })
        return await room.save();
    }

    async getRooms(types)
    {
        // console.log("here");
        // const rooms = await Room.find({roomType : {$in : types}});
        const rooms = await Room.find({roomType : {$in : types}}).populate('speakers').populate('ownerId').exec();
        // console.log(rooms);
        return rooms;
    }
}

export default new RoomService();