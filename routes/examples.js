var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

router.get('/chat', function (req, res) {
    res.render('examples/chat');
});


router.get('/ViewHTML5MediaRecordDataAsStream', function (req, res) {
    res.render('examples/ViewHTML5MediaRecordDataAsStream');
});

module.exports = router;
