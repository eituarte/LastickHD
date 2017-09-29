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

	this.task.name = request.body.name_task;
	this.task.dateIni = request.body.time_ini_task;
	this.task.dateEnd = request.body.time_fin_task;
	this.task.acr = request.body.acr_task;
	this.task.desc = request.body.desc_task;
	this.task.tags = request.body.tags_task;
	this.task.comments = request.body.comments_task;
	//this.task.repeat = request.body.repeat;
	console.log("rula");
	this.task.save();
};


module.exports = mongoose.model('Task', taskSchema);

