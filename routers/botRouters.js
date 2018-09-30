const express = require('express');
const router = express.Router();
var env = process.env.NODE_ENV || 'development';
const db = require('../sequelize/models');

const {User} = db.sequelize.models;

router.get('/config', async (req,res)=>{
    try {
        res.status(200).json(process.env);
}
    catch(err){
        res.status(500).json(err);
    }
})

router.get('/test', async (req,res)=>{
    try {
        const user=  await User.findAll()
        res.status(200).json(user);
}
    catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;