var mongodb = require('mongodb');
var server = new mongodb.Server('localhost', 27017, { auto_reconnect: true });
var db = new mongodb.Db('orderManage', server, { safe: true });

//连接db
var openDB = function (callback) {
  db.open(function (err, db) {
    if (!err) {
      console.log('connect db');
      db.createCollection('purchaseList', { safe: true }, callback);
    } else {
      console.log(err);
    }
  });
}


var insertPurchaseOrder = function (purchaseOrder, callback) {
  openDB(function (err, collection) {
    if (err) {
      console.log(err);
    } else {
      collection.insert([purchaseOrder], { safe: true }, function (err, result) {
        console.log(result);
        callback&&callback(JSON.stringify(result));
      });
      db.close();
    }
  });
}


var deletePurchaseOrder = function (orderId) {
  openDB(function (err, collection) {
    if (err) {
      console.log(err);
    } else {
      collection.find().toArray(function (err, result) {
        console.log('find');
        callback&&callback(JSON.stringify(result));
      });
      db.close();
    }
  });
}

var getPurchaseOrderList = function (key, callback) {
  openDB(function (err, collection) {
    if (err) {
      console.log(err);
    } else {
      collection.find().toArray(function (err, result) {
        console.log('find');
        callback&&callback(JSON.stringify(result));
      });
      db.close();
    }
  });
}


module.exports = {
  insertPurchaseOrder:insertPurchaseOrder,
  deletePurchaseOrder:deletePurchaseOrder,
  getPurchaseOrderList:getPurchaseOrderList
}

