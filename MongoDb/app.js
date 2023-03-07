const mongoose = require('mongoose');

// creating mongodb connection
// mongoose.connect("path/databse name") this return a promise
mongoose.connect("mongodb://localhost:27017/try").then(() => console.log("MongoDB connection is successfull......")).catch((error) => console.log(error));    

// schema
// mongoose schema define structure of document default values , validators
const playlistSchema = new mongoose.Schema({
    name : {
        type : String ,
        required : true
    },
    ctype : String ,
    videos : Number ,
    author : String ,
    active : Boolean ,
    date : {
        type : Date ,
        default : Date.now
    }
})

// collection creation
// model is an wrapper oof mongoose schema
const Playlist = new mongoose.model("Playlist" , playlistSchema);

// inserting a data
const createDocument = async () => {
   try {
       const reactPlaylist = new Playlist({
           name : "NodeJS" ,
           ctype : "Back-End" ,
           videos : 18 ,
           author : "Jenil" ,
           active : true
       });
   
    //    const result = await reactPlaylist.save();
    //    console.log(result);
   } catch (error) {
        console.log(error);
   }
}
const insertManhyDocuments = async () => {
   try {
       const mongodbPlaylist = new Playlist({
           name : "MongoDB" ,
           ctype : "Database" ,
           videos : 33 ,
           author : "Jenil" ,
           active : true
       });
       const mongoosePlaylist = new Playlist({
           name : "Mongoose" ,
           ctype : "Database" ,
           videos : 15 ,
           author : "Jenil" ,
           active : true
       });
       const phpPlaylist = new Playlist({
           name : "PHP" ,
           ctype : "Back-End" ,
           videos : 100 ,
           author : "Jenil" ,
           active : true
       });
       const bootstrapPlaylist = new Playlist({
           name : "Bootstrap" ,
           ctype : "Front-End" ,
           videos : 15 ,
           author : "Jenil" ,
           active : true
       });
   
    //    const result = await Playlist.insertMany([mongodbPlaylist , mongoosePlaylist , phpPlaylist , bootstrapPlaylist]);
    //    console.log(result);
   } catch (error) {
        console.log(error);
   }
}

// get or fetch document
const getDocumnet = async () => {
    // const result = await Playlist.find({ctype : "Front-End"})
    // const result = await Playlist.find({ctype : "Front-End"}).limit(1)
    // const result = await Playlist.find({videos : {$lt : 100}}).select({name : 1}).count();
    const result = await Playlist.find({videos : {$lt : 100}}).select({name : 1}).sort("name : 1")
    // const result = await Playlist.find({$and : [ {videos : {$lt : 20}} , {ctype : "Database"}]}).select({name : 1})
    console.log(result)  
}

// comparison operator in mongodb
    /* 
        use :- const result = await Playlist.find({videos : {$gt : 50}}).select({name : 1})
        $gt :- greater than specified value
        $gte :- greater than or equal specified value
        $lt :- less than specified value
        $lte :- greater than or equal specified value
        $eq :- equal to specified value
        $ne :- not equal to specified value
        $in :- available in given array
        $nin :- not available in given array
    */

// logical operator in mongodb
    /* 
        use :- const result = await Playlist.find({$and : [ {videos : {$lt : 20}} , {ctype : "Database"}]}).select({name : 1})
        $and :- 
        $or :- 
        $not :- 
        $nor :- 
    */

// Validations
    /*
        String :-
            lowercase
            uppercase
            trim
            match (concept of regular expression)
            enum
            minlength
            maxlength
        
        Number :-
            min
            max
            enum
        
        Date :-
            min
            max
    */

// npm Validator
    /*
        like ,...
            isEmail()
            isAlpha()...
    */
createDocument();
insertManhyDocuments();
getDocumnet();