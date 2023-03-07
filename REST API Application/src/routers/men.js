const express = require("express");
const router = new express.Router();

const MensRanking = require("../models/mens");

// handling inserting post request
router.post("/mens" ,async (req , res) => {
    try {
        const addingRecord = new MensRanking(req.body);
        console.log(req.body); 
        const insert = await addingRecord.save()
        res.status(201).send(insert);
    } catch (error) {
        res.status(400).send(error);
    }
})


// fetch all data of database
router.get("/mens" , async (req , res) => {
    try {
        const getMensRecord = await MensRanking.find({});
        res.send(getMensRecord);
    } catch (error) {
        res.status(400).send(error);
    }
})

// fetching individual data by ranking
router.get("/mens/:rank" , async (req , res) => {
    try {
         
        const rank = req.params.rank;
        const getMenByRank = await MensRanking.find({ranking : rank});
        res.send(getMenByRank);
    } catch (error) {
        res.status(400).send(error);
    }
})

// updating data
router.patch("/mens/:rank" , async (req , res) => {
    try {
        const rank = req.params.rank;
        const updateMenRecord = await MensRanking.updateOne({ranking:rank} , req.body , {new : true});
        res.send(updateMenRecord);
    } catch (error) {
        res.status(400).send(error);
    }
})

// deleting data
router.delete("/mens/:rank" , async (req , res) => {
    try {
        const rank = req.params.rank;
        const deleteMenRecord = await MensRanking.deleteOne({ranking : rank});
        res.send(deleteMenRecord);
        
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;