var express = require('express');
var router = express.Router();
var storeDao = require("../src/dao/storeList");
router.post('*', function(req, res, next) {
    console.log("允许跨域");
    res.header("Access-Control-Allow-Origin", "*");
    next();
})
/* GET users listing. */
router.post('/addGoodsList', function (req, res, next) {
  var goodsList = undefined;
  if (req.body) {
    goodsList = req.body.goodsList;
  }
  console.log(goodsList);
  storeDao.insertGoodsList(goodsList, function (result) {
    res.write(result);
    res.end();
  });
});

router.post('/getGoodsList', function (req, res, next) {
  var key = undefined;
  if (req.body) {
    key = req.body;
    console.log(key);
  }
  storeDao.getGoodsList(key, function (result) {
    res.write(result);
    res.end();
  });
});

router.post('/deleteGoodsById', function (req, res, next) {
  var goodsId = undefined;
  if (req.get("orderId")) {
    goodsId = req.get("orderId");
    console.log(orderId);
  }
  storeDao.deleteGoodsById(goodsId, function (result) {
    res.write(result);
    res.end();
  });
});

module.exports = router;
