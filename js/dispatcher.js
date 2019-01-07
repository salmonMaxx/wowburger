/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

//socket.on('currentQueue', function(data){pushTheNewOrdersToTheNewArrayAsAWorkaround();})

var vm = new Vue({
  el: '#orderList',
  data: {
    orders: {},
  },
  created: function () {
    socket.on('initialize', function (data) { console.log("######## inish ########");
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {  console.log("######## Queue ########")
      //console.log("data.orders.orderItems: "+data.orders.orderItems)
      this.orders = data.orders;
    }.bind(this));
  },
});
