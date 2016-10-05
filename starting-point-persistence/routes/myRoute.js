var express = require('express');
var router = express.Router();
var db = require('../models');

router.get('/hotels', (req,res,next) => {
	db.model('hotel').findAll()
	.then( result => res.send(result))
	.catch(next);
});

router.get('/restaurants', (req,res,next) => {
	db.model('restaurant').findAll()
	.then( result => res.send(result))
	.catch(next);
});

router.get('/activities', (req,res,next) => {
	db.model('activity').findAll()
	.then( result => res.send(result))
	.catch(next);
});
module.exports = router;

