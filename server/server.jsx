const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const database = {db: 'mongodb://localhost:27017/CIMDB'};

const customerRoute = require('../server/routes/customer-routes.jsx');

mongoose.connect(database.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
    console.log('Database connected sucessfully !');
},
    error => {
        console.log('Database could not be connected : ' + error);
    }
);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended:true
}));

app.use(cors());
app.use('/customers', customerRoute);

// app.listen(3000, function(){
//     console.log("Server started at port 3000");
//   });

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// // Error Handling
// app.use((req, res, next) => {
//     next(createError(404));
// });

// app.use(function (err, req, res, next) {
//     console.error(err.message);
//     if (!err.statusCode) err.statusCode = 500;
//     res.status(err.statusCode).send(err.message);
// });