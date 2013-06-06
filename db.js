var mongo = require('mongoose');
var Schema = mongoose.Schema;

var Todo = new Schema({
	user_id : String,
	content : String,
	updated_at: Date
});

mongo.model('Todo', Todo);

mongo.connect('mongodb://localhost/express-todo');