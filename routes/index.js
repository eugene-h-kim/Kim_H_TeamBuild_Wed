var express = require('express');
var router = express.Router();

let team = {

  justin: {
    name: 'Justin',
    roles: 'coordinator'
  },

  joe: {
    name: 'Joe',
    roles: '3d/video productor/animator',
    avatar: 'avatar_01.jpg'
  },

  john: {
    name: 'John',
    roles: '3d/video productor/animator'
  },

}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Express',
    content: 'express is so easy' });
});


router.get('/team/:member', function(req,res) {
  console.log(req.params.member);

res.render('team', { person: team[req.params.member]});
})

module.exports = router;
