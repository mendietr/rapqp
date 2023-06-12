const mongoose = require("mongoose");
module.exports = async function bd(bd1){
const URI = 'mongodb+srv://'+bd1+':HHnOQn2B4iVtEdOU@cluster0.pgfsbij.mongodb.net/rapqp?retryWrites=true&w=majority'
console.log(URI)

mongoose.connect(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log("Conexión exitosa a la base de datos");
  })
  .catch(error => {
    console.log("Error al conectar a la base de datos:", error);
  });
}
  // bd.js
module.exports = async function bd(bd1) {
    // Aquí puedes acceder a la variable bd1 y realizar las operaciones necesarias con la base de datos
    // ...
    return resultado; // Devuelve el resultado de las operaciones
};
