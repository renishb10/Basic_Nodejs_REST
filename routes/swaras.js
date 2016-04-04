var Swaras = require('../models/swaras');
var express = require('express');
var router = express.Router();

//GET all swaras
router.route('/swaras').get(function(req, res){
	Swaras.find(function(err, swaras){
		if(err){
			return res.send(err);
		}
		res.json(swaras);
	});
});

//GET single swara
router.route('/swaras/:id').get(function(req, res){
	Swaras.findOne({_id: req.params.id}, function(err, swara){
		if(err){
			return res.send(err);
		}
		res.json(swara);
	});
});

//POST a swara
router.route('/swaras').post(function(req, res){
	var swara = new Swaras(req.body);

	swara.save(function(err){
		if(err)
			return res.send(err);
		res.send({message : 'Swara Added'});
	});
});

//PUT - update a single swara
router.route('/swaras/:id').put(function(req, res){
	Swaras.findByIdAndUpdate(req.params.id, req.body, {new : true}, function(err, swaras){
		if(err)
			return res.send(err);
		else
			return res.json(swaras);
	});
});

//DELETE - a Swara
router.route('/swaras/:id').delete(function(req, res){
	Swaras.remove({_id: req.params.id},function(err, data){
		if(err)
			return res.send(err);
		res.json({message: 'Swara deleted!'});
	});
});

//GET - swaras by language
router.route('/swarasbylang/:lang').get(function(req,res){
	if(req.params.lang){
		Swaras.find({lang:req.params.lang},function(err, swaras){
			if(err)
				return res.send(err);
			else
				return res.json(swaras);
		});
	}
});

//GET - swaras by type
router.route('/swarasbytype/:type').get(function(req,res){
	if(req.params.type){
		Swaras.find({type:req.params.type},function(err, swaras){
			if(err)
				return res.send(err);
			else
				return res.json(swaras);
		});
	}
});

//GET - swaras by recent update
router.route('/swarasbyrecent').get(function(req,res){
		Swaras.find({}).sort({lastUpdatedDate:-1}).exec(function(err, swaras){
			if(err)
				return res.send(err);
			else
				return res.json(swaras);
		});
});

module.exports = router;