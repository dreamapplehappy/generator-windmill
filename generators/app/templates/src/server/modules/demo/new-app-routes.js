/*
 1.这里是写我们模拟后端的路由问题
 */


var router = require('express').Router();
var four0four = require('../../utils/404')();
var data = require('./new-app-data');
var json = require('../../utils/json').json;

// 以下部分是路由部分,注意方法的方法名称,是[GET],[POST],[PUT],[DELETE]

// url('/api/new-app/items')
router.get('/items', getPeople);

// url('/api/new-app/items/:id')
router.get('/items/:id', getPerson);

router.get('/*', four0four.notFoundMiddleware);

// 导出本应用的路由模块
module.exports = router;

// 以下部分是根据路由的不同,返回不同的路有数据
function getPeople(req, res, next) {
    json(res, 1, data.yourObjFuncName);
}

function getPerson(req, res, next) {
    var id = +req.params.id;
    var person = data.people.filter(function(p) {
        return p.id === id;
    })[0];

    if (person) {
        res.status(200).send(person);
    } else {
        four0four.send404(req, res, 'person ' + id + ' not found');
    }
}
