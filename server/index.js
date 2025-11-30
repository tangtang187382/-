const express = require('express')
//创建服务器
const router = require('./router/router.js')
const app = express();


app.use('/',router)
//事件监听
app.listen(7788,()=>{
    console.log('server start');
    console.log('http://localhost:7788')
})
