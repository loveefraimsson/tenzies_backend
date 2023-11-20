var express = require('express');
var router = express.Router();
var cors = require('cors');

router.use(cors()) 


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




router.post('/test', (req, res) => {
 
  //console.log(req.body);
  //res.json({msg: 'Got a POST request'})
  
  let user = req.body;

  req.app.locals.db.collection("tenzies").insertOne(user)
  .then(result => {
    res.json({'result': result});
  })

}) 




module.exports = router;
