var mongodb = require('mongodb');
var server = new mongodb.Server('localhost', 27017, { auto_reconnect: true });
var db = new mongodb.Db('orderManage', server, { safe: true });

//连接db
var openDB = function (callback) {
  db.open(function (err, db) {
    if (!err) {
      console.log('connect db');
      db.createCollection('orderList', { safe: true }, callback);
    } else {
      console.log(err);
    }
  });
}


var insertOrder = function (order, callback) {
  openDB(function (err, collection) {
    if (err) {
      console.log(err);
    } else {
      collection.insert([order], { safe: true }, function (err, result) {
        console.log(result);
        callback&&callback(JSON.stringify(result));
      });
      db.close();
    }
  });
}


var deleteOrder = function (orderId, callback) {
  openDB(function (err, collection) {
    if (err) {
      console.log(err);
    } else {
      collection.find().toArray(function (err, result) {
        console.log('find');
        console.log(docs);
        callback&&callback(JSON.stringify(docs));
      });
      db.close();
    }
  });
}

var getOrderList = function (key, callback) {
  openDB(function (err, collection) {
    if (err) {
      console.log(err);
    } else {
      collection.find().toArray(function (err, result) {
        callback&&callback(JSON.stringify(result));
      });
      db.close();
    }
  });
}

module.exports = {
  insertOrder:insertOrder,
  deleteOrder:deleteOrder,
  getOrderList:getOrderList
}

