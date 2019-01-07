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
    //orderList: [],
  },
  created: function () {
    socket.on('initialize', function (data) { console.log("######## inish ########");
    //console.log("on initialize - data: " + data)
    //console.log("on initialize - data.orders: " + data.orders)
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {  console.log("######## Queue ########")
    console.log("on currentQueue - data: " + data)
    console.log("on currentQueue - data.orders: " + data.orders)
    console.log("on currentQueue - data.orders.orderItems: " + data.orders.orderItems)
      this.orders = data.orders;
      console.log("wtf: "+ data.orders.order.orderItems);
      //this.orderList.push(data.orders.order.orderItems)
    //console.log("on currentQueue - this.orders: " + this.orders)
    }.bind(this));
  },
  methods:{
    pushTheNewOrdersToTheNewArrayAsAWorkaround: function () {
      //this.orderList.push(this.orders.order.orderItems);
    }
  },
});
