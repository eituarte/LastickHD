var mongoose = require('mongoose');
var db = mongoose.createConnection( 'mongodb://localhost:27017/knoldus' );
var taskSchema = mongoose.Schema({
    task             : { // correoUsuario, tiempoInicial, tiempoFinal, nombre, siglas, descripción, tags, comentarios, bool repetir {rep: true/false, días: [0, 1, 1, 1, 0, 0, 0]}
		name : String/*,
	    email : String,
	    dateIni : Date,
		dateEnd : Date,
		acr : String,
		desc : String,
		tags: [],
		comments: String,
		repeat: {
			rep : boolean,
			days: []
		}*/
    }
});


taskSchema.methods.addTask = function(request, response){

	this.task.name = request.body.name;
	console.log("Ha funcionado");
	/*this.task.email = request.body.email;
	this.task.dateIni = request.body.dateIni;
	this.task.dateEnd = request.body.dateEnd;
	this.task.acr = request.body.acr;
	this.task.desc = request.body.desc;
	this.task.tags = request.body.tags;
	this.task.comments = request.body.comments;
	this.task.repeat = request.body.repeat;*/
	this.task.save();
};


module.exports = mongoose.model('Task', taskSchema);

