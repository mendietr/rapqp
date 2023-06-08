const mongoose = require('mongoose');
// const { mongodb } = require('./keys');
require('dotenv').config();
const URI = process.env.MONGODB_URI;

mongoose.set('useFindAndModify', false);
// mongoose.connect(mongodb.URI, {
//   useNewUrlParser: true
// })
//   .then(db => console.log('DB is connected'))
//   .catch(err => console.log(err));

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