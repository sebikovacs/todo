var mongo = require('mongoose');
var Schema = mongo.Schema;

var Todo = new Schema({
	user_id : String,
	content : String,
	updated_at: Date
});

var Wine = new Schema({
	name: String,
	measure: String,
	qty: Number
})

mongo.model('Todo', Todo);
mongo.model('Wine', Wine);

mongo.connect('mongodb://localhost/express-todo');