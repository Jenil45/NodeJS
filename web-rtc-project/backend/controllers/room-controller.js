import roomService from '../services/room-service';
class RoomController
{
    async createRoom(req , res)
    {   
        // getting body data
        const {topic , roomType} = req.body;

        if(!topic || !roomType)
        {
            return res.status(400).json({message : "All fields required"});
        }

        
        try {
            const room = await roomService.create({topic , roomType , ownerId : req.user._id});
            return res.json({room}); 
        } catch (error) {
            return res.status(500).json({message : "Internal server error"})
        }
    }

    async getRooms(req , res)
    {
        try {
            const rooms = await roomService.getRooms(['open']);
            return res.json(rooms);
        } catch (error) {
            return res.status(404).json({message : "Data not found"})
        }
    }
}

export default new RoomController();