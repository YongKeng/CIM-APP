const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

let Customer = require('../customer-model/customer-schema.jsx');


//create customer
router.route("/create").post(function(req, res){
  const newCustomer = new Customer({
    name: req.body.name,
    age: req.body.age,
    gender: req.body.gender,
    email: req.body.email
  });
  newCustomer.save(function(err){
    if (!err){
      res.send("Successfully added a new customer");
    }else{
      res.send(err);
    }
  });
});


//read customer detail
router.route('/').get(function(req, res){
  Customer.find(function (err, foundCustomer){
    if (!err){
      res.send(foundCustomer);
    }else{
      res.send(err);
    }
  });
});

//get individual customer information
router.route("/edit-customer/:id").get(function (req, res){
  const customerID = req.params.id;

  Customer.findOne({
    _id: customerID
  }, function (err, foundCustomer){
    if (foundCustomer){
      res.send(foundCustomer);
    }else{
      res.send("No customer matching that name was found");
    }
  }
)
});

//update individual customer information
router.route("/update-customer/:id").patch((req, res, next) => {
  Customer.findByIdAndUpdate(req.params.id, {
    $set: req.body
  }, (error, data) => {
    if (error) {
      return next(error);
      console.log(error);
    } else {
      res.send(data)
      console.log('Customer updated successfully !');
    }
  })
});

//delete individual customer information

router.route("/delete-customer/:id").delete(function (req, res){
  Customer.deleteOne(
    {_id: req.params.id},
    function (err) {
      if (!err){
        res.send("Succesfully deleted customer detail");
      }else{
        res.send(err);
      }
    }
  )
});

module.exports = router;






