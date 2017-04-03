var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://brad:123@ds145790.mlab.com:45790/mytasklist_brad',['lang'])

// Get all language details
router.get('/lang',function(req,res,next){
    db.lang.find(function(err,lang){
        if(err){
            res.send(err);
        }else{
            res.json(lang);
        }
    });
});

module.exports = router;


