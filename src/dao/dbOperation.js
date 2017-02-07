var  mongodb = require('mongodb');
var  server  = new mongodb.Server('localhost', 27017, {auto_reconnect:true});
var  db = new mongodb.Db('orderManage', server, {safe:true});

//连接db
db.open(function(err, db){
    if(!err){
        console.log('connect db');
        db.createCollection('orderList', {safe:true}, function(err, collection){
            if(err){
                console.log(err);
            }else{
                // 查询数据
                var tmp1 = {title:'hello'};
                   var tmp2 = {title:'world'};
                   collection.insert([tmp1,tmp2],{safe:true},function(err,result){
                   console.log(result);
                   }); 
                   collection.find().toArray(function(err,docs){
                   console.log('find');
                   console.log(docs);
                   }); 
                   collection.findOne(function(err,doc){
                    console.log('findOne');
                      console.log(doc);
                   }); 
                   db.close();
            }

        });
    }else{
        console.log(err);
    }
});