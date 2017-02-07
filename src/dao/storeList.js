var mongodb = require('mongodb');
var server = new mongodb.Server('localhost', 27017, { auto_reconnect: true });
var db = new mongodb.Db('orderManage', server, { safe: true });

//连接db
var openDB = function (callback) {
  db.open(function (err, db) {
    if (!err) {
      console.log('connect db');
      db.createCollection('store', { safe: true }, callback);
    } else {
      console.log(err);
    }
  });
}


var insertGoodsList = function (goodsList, callback) {
  openDB(function (err, collection) {
    if (err) {
      console.log(err);
    } else {
      collection.insert(goodsList, { safe: true }, function (err, result) {
        callback&&callback(JSON.stringify(result));
      });
      db.close();
    }
  });
}



var deleteGoodsById = function (goodsId, number, callback) {
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

var getGoodsList = function (key, callback) {
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
  insertGoodsList:insertGoodsList,
  deleteGoodsById:deleteGoodsById,
  getGoodsList:getGoodsList
}

