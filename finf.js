//1. Rescatando el argumento que es pasadoa al script
var ageArg = +process.argv[2];

// Conectarnos a la base de datos
// Paso 1 .Cargar el driver en nuestro string
var mongodb = require ('mongodb');
// Paso 2 .El driver de mongodb nos proporciona un cliente
// Por lo que lo esxtraemos de la libreria
var mongoClient = mongodb.MongoClient;
// Paso 3 .Conectar el cliente a la base de datos
mongoClient.connect("mongodb://127.0.0.1:27017/learnyoumongo",
function(err, db){
   // Verificando si hubo un error en la conexion
    if(err)
    {
        console.log(">ERROR AL CONECTARSE A:"+
        'mongodb://127.0.0.1:27017/learnyoumongo');
        throw err;
    }
    // Obteniendo la conexion
    var parrotsCollection = db.collection('parrots');
    // Aplicando un query sobre la coleccion
    var objetoResultado = parrotsCollection.find({
         age : {$gt : ageArg}
    });
    //
    objetoResultado.toArray(function(err, docs){
        console.log(docs);
        // Cerrando la conexion
        db.close();
    });
});