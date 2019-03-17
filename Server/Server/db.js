var mongoose = require('mongoose');  
var User = new mongoose.Schema({
	room : String,
  name : String,
  id_proof : String,
  NoOfAdults : Number,
  NoOfChildren : Number, 
  NoofDays : Number,
  date : Date
});
mongoose.model('User', User);
mongoose.connect('mongodb://localhost/',function(err){
    if(!err)console.log(mongoose.connection.readyState);
});