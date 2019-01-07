'use strict';
var socket = io();

var vm = new Vue({
      el: "#vue-container",
      data: {
          menu: food,
          hoverDate: "Page loaded on: " + new Date().toLocaleString(),
          currentOrder: [],
          fullName: "",
          email: "",
          //street: "",
          //streetNo: "",
          phoneNumber: "",
          comment: "",
          gender: [],
          favouriteburger: [],
          showOrder: false,
          orders: {},
          details: {},
          idOfOrder: 0,
          location: {x:"", y:""},
      },
      created: function () {
        socket.on('initialize', function (data) {
          this.orders = data.orders;
        }.bind(this));

        socket.on('currentQueue', function (data) {
          this.orders = data.orders;
        }.bind(this));
      },
      methods: {
          orderPlaced(){
              var order =
              {
              "fullName":        ""+this.fullName,
              "email":           ""+this.email,
              //"Adress":          ""+this.street+" "+this.streetNo,
              "phoneNumber":     ""+this.phoneNumber,
              "orderComments":   ""+this.comment,
              "gender":          ""+this.gender,
              "favouriteburger": ""+this.favouriteburger,
              "locationx":       ""+this.location.x,
              "locationy":       ""+this.location.y
              }
              return order;
          },
          toggleShowOrder(){
              this.showOrder = !this.showOrder;
          },
          getNext: function () {
            var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
              return Math.max(last, next);
            }, 0);
            return lastOrder + 1;
          },

          getTheId: function (){
            return this.idOfOrder++
          },

          addOrder: function () {
            //var orderino = this.orderPlaced();
            socket.emit("addOrder", { orderId: this.getTheId(),
                                      details: {x: this.location.x, y: this.location.y},
                                      orderItems: [this.currentOrder, ""+this.fullName]
                                      }
                                    )
                    },
          displayOrder: function(event){
            var offset = {x: event.currentTarget.getBoundingClientRect().left,
            y: event.currentTarget.getBoundingClientRect().top};
            this.details.x = event.clientX;
            this.details.y = event.clientY;
            /*this.location.x = {event.clientX - 10 - offset.x};
            this.location.y = {event.clientY - 10 - offset.y};*/
            this.location = { x: event.clientX - 10 - offset.x,
            y: event.clientY - 10 - offset.y };

            //socket.emit("addOrder", { orderId: this.getNext(), orderItems: [ "Curry"]});
          }
      }
  });
