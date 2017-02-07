var express = require('express');
var router = express.Router();
var purchaseDao = require("../src/dao/purchaseList");
var storeDao = require("../src/dao/storeList");
router.post('*', function(req, res, next) {
    console.log("允许跨域");
    res.header("Access-Control-Allow-Origin", "*");
    next();
})
/* GET users listing. */
router.post('/addOrder', function (req, res, next) {
  var order = undefined;
  if (req.body.order) {
    order = req.body.order;
  }
  console.log(purchaseDao);
  purchaseDao.insertPurchaseOrder(order, function (result) {
    res.write(result);
    res.end();
  });
});

router.post('/getOrder', function (req, res, next) {
  var key = undefined;
  if (req.body) {
    key = req.body;
    console.log(key);
  }
  purchaseDao.getPurchaseOrderList(key, function (result) {
    res.write(result);
    res.end();
  });
});

router.post('/deleteOrder', function (req, res, next) {
  var orderId = undefined;
  if (req.get("orderId")) {
    orderId = req.get("orderId");
    console.log(orderId);
  }
  purchaseDao.deletePurchaseOrder(orderId, function (result) {
    res.write(result);
    res.end();
  });
});

module.exports = router;
