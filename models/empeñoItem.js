const mongoose = require ('mongoose');


const itemEmpeñoSchema = new mongoose.Schema({
Tipo: String,
Modelo: String,
Año: Number,
Costo: Number, 
Fecha: Date,
NombreEmpeñador: String,
NumeroEmpeñador: Number,
Estatus: String
})

const empeñoSchema = new mongoose.Schema({
   items: [itemEmpeñoSchema],
   user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
   }
});

empeñoSchema.set('toJSON',{
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Empeño = mongoose.model('Empeño', empeñoSchema);

module.exports = Empeño;