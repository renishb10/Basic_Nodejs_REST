var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var swarasSchema = new Schema({
	song : String,
	movie : String,
	type : String,
	lang : String,
	cnotes : String,
	wnotes : String,
	comment : String,
	createdDate : Date,
	lastUpdatedDate : Date,
	author : {
		name : String,
		email : String
	}
});

module.exports = mongoose.model('Swaras',swarasSchema);