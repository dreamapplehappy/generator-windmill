/*
 1.这里是写我们模拟后端的路由问题
 */


var router = require('express').Router();
var four0four = require('../../utils/404')();
var data = require('./new-app-data');
var json = require('../../utils/json').json;

// 以下部分是路由部分,注意方法的方法名称,是[GET],[POST],[PUT],[DELETE]

// spa
router.get('/home/activity', spaActivityList);
router.post('/home/activity/:id/like', iLikeIt);
router.delete('/home/activity/:id/unlike', iUnlikeIt);

// url('/api/new-app/items')
router.get('/items', getPeople);

// url('/api/new-app/items/:id')
router.get('/items/:id', getPerson);

router.get('/home/wechat', getWXMsg);

router.get('/home/user/current-user', getVisitorStatus);
router.post('/home/user/default-profile', generateUserProfile);
router.post('/common/sms/send', getVerificationCode);
router.post('/common/sms/check', checkVerificationCode);


router.post('home/association/:id/subscriber', joinCommunity);
// 卡包详情
router.get('/home/benefit/mine', packetsDetail);
// 红包
router.get('/home/benefit/coupon', couponPacket);
router.get('/home/benefit/coupon/:id', couponDetail);
router.get('/home/benefit/red-packet', redPacket);
router.get('/home/benefit/red-packet/:id', redPacketDetail);
// 活动
router.get('/home/activity', tuiJianHuoDong);
// 福利
router.get('/home/benefit', sheQunFuLi);
router.get('/home/benefit/:id', welfareDetail);
// 修改用户信息
router.put('/home/user', updateUser);
// 社群
router.get('/home/association/:id', communityDetail);
// 评论
router.get('/home/comment', commentsList);
router.post('/home/comment', createComment);




router.get('/*', four0four.notFoundMiddleware);

// 导出本应用的路由模块
module.exports = router;

function iLikeIt(req, res, next) {
    json(res, 1, data.iLikeIt);
}

function iUnlikeIt(req, res, next) {
    json(res, 1, data.iLikeIt);
}

function spaActivityList(req, res, next) {
    json(res, 1, data.spaActivityList);
}

function getWXMsg(req, res, next) {
    json(res, 1, data.getWXMsg);
}

function joinCommunity(req, res, next) {
    json(res, 1);
}

function couponDetail(req, res, next) {
    json(res, 1, data.couponDetail);
}

function redPacketDetail(req, res, next) {
    json(res, 1, data.redPacketDetail);
}

function couponPacket(req, res, next) {
    json(res, 1, data.couponPacket);
}

function packetsDetail(req, res, next) {
    json(res, 1, data.packetsDetail);
}

function redPacket(req, res, next) {
    json(res, 1, data.redPacket);
}

function createComment(req, res, next) {
    json(res, 1, data.createComment)
}

function commentsList(req, res, next) {
    json(res, 1, data.commentList)
}

function communityDetail(req, res, next) {
    json(res, 1, data.communityDetail);
}

function welfareDetail(req, res, next) {
    json(res, 1, data.welfareDetail);
}

function updateUser(req, res, next) {
    json(res, 1, data.updateUser)
}

function sheQunFuLi(req, res, next) {
    json(res, 1, data.sheQunFuLi)
}

function tuiJianHuoDong(req, res, next) {
    json(res, 1, data.tuiJianHuoDong);
}

// 以下部分是根据路由的不同,返回不同的路有数据
function getPeople(req, res, next) {
    json(res, 1, data.yourObjFuncName);
}
///////
function getVisitorStatus(req, res, next) {
    json(res, 1, data.visitorStatus);
}
function generateUserProfile(req, res, next) {
    json(res, 1, data.visitorStatus);
}
function getVerificationCode(req, res, next) {
    json(res, 1, data.visitorStatus);
}
function checkVerificationCode(req, res, next) {
    json(res, 1, data.visitorStatus);
}
//////

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
