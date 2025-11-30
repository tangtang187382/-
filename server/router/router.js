const express=require('express');
const router = express.Router();
//创建实例

//映入轮播图数据
const bannerdata = require('../data/banner.json')
//hotdata
const hotdata = require('../data/hot.json')
//gooditems
const productData = require('../data/product.json')

router.get('/test',(req,res) =>{
    res.send('success');
})
router.get('/home/banner',(req,res)=>{
    res.send(bannerdata);
})
router.get('/home/hot',(req,res)=>{
    res.send(hotdata);
})
router.get('/home/product',(req,res)=>{
    res.send(productData);
})
module.exports = router;