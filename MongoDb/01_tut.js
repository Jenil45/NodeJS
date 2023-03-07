// inserting data into mongo db
use jenil
db.items.insertOne({name : "Jenil Thakoe" , age : 19});     // db.items.insertOne(object)
db.items.insertMany([{name : "Aniket Jadav" , age : 20},{name : "Gunjan Surti" , age : 21},{name : "Raghav Hirani" , age : 2024}]);     // db.items.insertMany(array of object)

// to find all data in db
db.items.find() 

// find particular data
db.items.find({name : "Jenil"})

// find data with condditiions
db.items.find({age : {$gte : 33}})

// find data with and operator with , symbole
db.items.find({age : {$gte : 33} , name : "Virat"})

// find data using or operator
db.items.find({$or : [{age : {$gte : 33}} , {name : "Rohit"}]})

// to showw any particular parameter in data
db.items.find({age : {$gte : 33}} , {name : 1})

// delte first matched entry
db.items.deleteOne({name : "Jenil"})
