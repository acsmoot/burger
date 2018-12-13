var orm = require("../config/orm.js");

var burger = {
    instruction: function(cb){
console.log("instrutions");
    },
    selectAll: function (controllerCallBack) {
        orm.selectAll("burgers", function (res) {
            controllerCallBack(res);
        });
    },
    insertOne: function(controllerCallBack){
        orm.insertOne("burgers", function (res){
            controllerCallBack(res);
        });
    },
    updateOne:function(controllerCallBack){
        orm.updateOne("burgers", function (res){
            controllerCallBack(res);
        });
    }
};
// Export the database functions for the controller 
module.exports = burger;