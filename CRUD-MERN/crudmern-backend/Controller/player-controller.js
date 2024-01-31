import Player from '../Schema/playerSchema.js'

export const addPlayer = async (req , res) => {
    const player = req.body;
    console.log(player)
    
    const newPlayer = new Player(player);
    console.log(newPlayer)

    try {
        await newPlayer.save()
        res.status(201).json(newPlayer)
    } catch (error) {
        
        res.status(409).json({message : error.message})
    }
}

export const updatePlayer = async (req , res) => {
    const player = req.body;
    const id = req.params.id
    console.log(player)
    
    const newPlayer = new Player(player);
    console.log(newPlayer)

    try {
        await Player.updateOne({_id : id} , newPlayer)
        res.status(201).json(newPlayer)
    } catch (error) {
        
        res.status(409).json({message : error.message})
    }
}

export const getPlayers = async (req , res) => {
    try {
        const player = await Player.find({});
        res.status(200).json(player);
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

export const getPlayerDetail = async (req , res) => {
    try {
        const id = req.params.id
        console.log(req.params.id)
        const playerDetail = await Player.findOne({_id : id});
        // console.log(playerDetail);
        res.status(200).json(playerDetail);
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

export const deletePlayer = async (req , res) => {
    try {
        const id = req.params.id
        await Player.deleteOne({_id : id});

        res.status(200).json({message : "Deleted"});
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}