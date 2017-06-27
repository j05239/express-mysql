var express = require('express');
var router = express.Router();


var pool = require('./../config/db.js')

/* GET home page. */
router.get('/', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    //res.sendfile('./public/html/H4/contact-us.html')
    res.sendfile('./views/html/index.html');
});

/* 注册. */
router.post('/register', function(req, res, next) {

    console.log(req.body);

    pool.getConnection(function(err, connection) {

        var data = req.body;

        connection.query('insert into user set ?', data, function(error, results, fields) {

            connection.release();

            if (error) throw error;

            console.log(results.insertId);

            res.send('<script>alert(\'提交成功\');location.href="/"</script>');

        });
    });



});
/*
{ name: '234323242',
	leavedate:'',
  arrivedate: '234',
  phone: '4234',
  numberofpeople: '1',
  numberofroom: '1',
  otherRequire: '',
  joinofdinner21: '请选择21日晚餐',
  joinoflunch22: '请选择22日中餐',
  numberoflunch22: '请选择人数',
  joinofdinner22: '请选择22日晚餐',
  numberofdinner22: '请选择人数',
  planof22: '',
  joinoflunch23: '请选择23日中餐',
  numberoflunch23: '请选择人数',
  isInviteTeacher: '请选择是否邀请老师',
  teacherName: '',
  tshirt: '请选择聚会T恤',
  remark: '' }
*/

module.exports = router;
