var express = require("express");
var router = express.Router();

//Get the burger model
var burger = require("../models/burger.js");

// router.get("/", function(req,res){
//   burger.instruction;
// })
router.get("/api/all",function(req,res){
   burger.selectAll(function(data) {
       var hbsObject = {
        burger: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req,res){

});


// router.put("/api/burgers/:id",function(req,res){});

// Export routes for server.js to use.
module.exports = router;