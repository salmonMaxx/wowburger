'use strict';
//var socket = io();

var vm = new Vue({
      el: "#vue-container",
      data: {
          menu: food,
          hoverDate: "Page loaded on: " + new Date().toLocaleString(),
          currentOrder: [],
          fullName: "",
          email: "",
          street: "",
          streetNo: "",
          phoneNumber: "",
          comment: "",
          gender: [],
          favouriteburger: [],
          showOrder: false,
      },
      methods: {
          orderPlaced(){
              var order =
              {
              "fullName":        ""+this.fullName,
              "email":           ""+this.email,
              "Adress":          ""+this.street+" "+this.streetNo,
              "phoneNumber":     ""+this.phoneNumber,
              "orderComments":   ""+this.comment,
              "gender":          ""+this.gender,
              "favouriteburger": ""+this.favouriteburger
              }
              return order;
          },
          toggleShowOrder(){
              this.showOrder = !this.showOrder;
          }
    }
  });

































//*****************************************************************************
//old functions
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function MenuItem(na, kc, pr, gl, la, ve){
    this.name       = na;
    this.kcal       = kc;
    this.price      = pr;
    this.gluten     = gl;
    this.lactose    = la;
    this.vegetarian = ve;
    this.idNo       = null;
    this.menuInfo   = function(){return this.name + ": " + this.kcal + " kcal"};
    this.allergen   = function(){return this.gluten || this.lactose};
}

function makeMeNBurgers(){ //bara en testgrejj
		var burgerNames = ["whale","hot","pinecone", "cheese","eggz","schabäm (Olles burgare)"];
    var burgerArray = [];
    for(var i=0; i<burgerNames.length; i++){
        burgerArray.push(new MenuItem(burgerNames[i], getRndInteger(500,1700), getRndInteger(80,190), Math.random() >= 0.5, Math.random() >= 0.5, false));
    //console.log(gluten, lactose);
    }
    return burgerArray;
}
//var burgerArray = makeMeNBurgers();
