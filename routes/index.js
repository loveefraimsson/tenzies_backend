var express = require('express');
var router = express.Router();
var cors = require('cors');

router.use(cors()) 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/gethighscore', function(req, res, next) {
  req.app.locals.db
  .collection('tenzies')
  .find()
  .toArray()
  .then((results) => {
      return res.json(results); 
  });
});


router.post('/register', (req, res) => {
  let user = req.body;

  req.app.locals.db.collection("tenzies").insertOne(user)
  .then(result => {
    res.json({'result': result});
  })

}) 

module.exports = router;
