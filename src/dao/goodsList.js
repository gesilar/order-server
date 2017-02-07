var mongodb = require('mongodb');
var server = new mongodb.Server('localhost', 27017, { auto_reconnect: true });
var db = new mongodb.Db('orderManage', server, { safe: true });

//连接db
var openDB = function (callback) {
  db.open(function (err, db) {
    if (!err) {
      console.log('connect db');
      db.createCollection('goodsList', { safe: true }, callback);
    } else {
      console.log(err);
    }
  });
}


var insertOrder = function (goods) {
  openDB(function (err, collection) {
    if (err) {
      console.log(err);
    } else {
      collection.insert([order], { safe: true }, function (err, result) {
        console.log(result);
      });
      db.close();
    }
  });
}


var deleteOrder = function (goodsName) {
  openDB(function (err, collection) {
    if (err) {
      console.log(err);
    } else {
      collection.find().toArray(function (err, docs) {
        console.log('find');
        console.log(docs);
      });
      db.close();
    }
  });
}

var getOrderList = function (goodsName, callback) {
  openDB(function (err, collection) {
    if (err) {
      console.log(err);
    } else {
      collection.find().toArray(function (err, docs) {
        console.log('find');
        console.log(docs);
        callback(docs);
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


