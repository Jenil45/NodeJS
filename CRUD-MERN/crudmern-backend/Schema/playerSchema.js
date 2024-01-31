import mongoose from "mongoose";
import autoIncrement from 'mongoose-auto-increment'

const playerSchema = mongoose.Schema({
    pname : {
        type : String , 
        require : true
    } ,
    pno : {
        type : Number , 
        require : true
    } ,
    prun : {
        type : Number , 
        require : true
    } ,
    pabout : {
        type : String , 
        require : true
    } ,
})

// autoIncrement.initialize(mongoose.Connection)
// playerSchema.plugin(autoIncrement.plugin , 'Player')

const Player = mongoose.model('player' , playerSchema);

export default Player;