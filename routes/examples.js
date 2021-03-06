var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.render('examples/index');
});


router.get('/chat', function (req, res) {
    res.render('examples/chat');
});


router.get('/ViewHTML5MediaRecordDataAsStream', function (req, res) {
    res.render('examples/ViewHTML5MediaRecordDataAsStream');
});

router.get('/SSSPlayer', function (req, res) {
    res.render('examples/SSSPlayer');
});


router.get('/VideoCast', function (req, res) {
    res.render('examples/VideoCast');
});


module.exports = router;
