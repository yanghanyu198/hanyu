var express=require('express');

var router=express.Router();



router.get('/indexs', function (req, res) {
    res.render('index', { title: 'Hey', message: 'Hello000 there!'});
});
module.exports = router