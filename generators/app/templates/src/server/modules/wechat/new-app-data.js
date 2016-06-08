/*
 1.这一份文件是新应用的存储模拟数据的文件
 2.写法可以参考下面的代码,具体的以业务为准
 */


// 导出这个数据模块这个对象左边是导出的函数,右边是这份文件中的函数
module.exports = {
    yourObjFuncName: yourObjFuncName(), // 返回对象
    yourArrayFuncName: yourArrayFuncName(), // 返回一个数组,
    people: getPeople(),
    visitorStatus: visitorStatus(),
    generateUserProfile: generateUserProfile(),
    getVerificationCode: getVerificationCode(),
    checkVerificationCode: checkVerificationCode(),
    tuiJianHuoDong: tuiJianHuoDong(),
    sheQunFuLi: sheQunFuLi(),
    updateUser: updateUser(),
    welfareDetail: welfareDetail(),
    communityDetail: communityDetail(),
    commentList: commentList(),
    createComment: createComment(),
    redPacket: redPacket(),
    packetsDetail: packetsDetail(),
    couponPacket: couponPacket(),
    redPacketDetail: redPacketDetail(),
    couponDetail: couponDetail(),
    getWXMsg: getWXMsg(),
    spaActivityList: spaActivityList(),
    iLikeIt: iLikeIt()
};

function iLikeIt() {
    return 'success';
}

function spaActivityList() {
    return {
        "total": 3,
        "per_page": 10,
        "current_page": 1,
        "last_page": 1,
        "next_page_url": null,
        "prev_page_url": null,
        "from": 1,
        "to": 3,
        "data": [
            {
                "id": 3,
                "association_id": 3,
                "name": "3",
                "img": "http://pic.i-yizhan.com/uploads/5701489bb3af6.jpeg",
                "detail": "3",
                "url": "http://www.iqiyi.com/",
                "url_md5": null,
                "created_at": null,
                "updated_at": "2016-04-21 20:09:38",
                "deleted_at": null,
                "start_at": "2016-04-21 21:05:00",
                "end_at": "2016-04-22 20:05:00",
                "tag": [
                    {
                        "id": 5,
                        "name": "1sdfds",
                        "created_at": "2016-04-03 13:27:41",
                        "updated_at": "2016-04-03 13:27:41",
                        "deleted_at": null,
                        "pivot": {
                            "association_id": 3,
                            "tag_id": 5
                        }
                    },
                    {
                        "id": 9,
                        "name": "呵呵",
                        "created_at": "2016-04-04 00:21:42",
                        "updated_at": "2016-04-04 00:21:42",
                        "deleted_at": null,
                        "pivot": {
                            "association_id": 3,
                            "tag_id": 9
                        }
                    }
                ],
                "like": {
                    "count": 17,
                    "i_like": 0
                }
            },
            {
                "id": 2,
                "association_id": 2,
                "name": "2",
                "img": "http://pic.i-yizhan.com/uploads/570df91c31710.jpeg",
                "detail": "2",
                "url": "http://www.iqiyi.com/",
                "url_md5": null,
                "created_at": "2016-04-01 16:21:19",
                "updated_at": "2016-04-21 20:10:52",
                "deleted_at": null,
                "start_at": "2016-04-21 22:10:00",
                "end_at": "2016-04-22 06:10:00",
                "tag": [
                    {
                        "id": 4,
                        "name": "dsadasdasd",
                        "created_at": "2016-04-02 22:54:54",
                        "updated_at": "2016-04-02 22:54:54",
                        "deleted_at": null,
                        "pivot": {
                            "association_id": 2,
                            "tag_id": 4
                        }
                    },
                    {
                        "id": 8,
                        "name": "魔兽世界",
                        "created_at": "2016-04-04 00:04:41",
                        "updated_at": "2016-04-04 00:04:41",
                        "deleted_at": null,
                        "pivot": {
                            "association_id": 2,
                            "tag_id": 8
                        }
                    }
                ],
                "like": {
                    "count": 123,
                    "i_like": 1
                }
            },
            {
                "id": 1,
                "association_id": 1,
                "name": "1",
                "img": "http://pic.i-yizhan.com/uploads/570148d49b1d9.jpeg",
                "detail": "1",
                "url": "http://www.iqiyi.com/",
                "url_md5": null,
                "created_at": "2016-04-01 16:21:12",
                "updated_at": "2016-04-21 20:11:01",
                "deleted_at": null,
                "start_at": "2016-04-23 07:35:00",
                "end_at": "2016-04-27 14:30:00",
                "tag": [ ],
                "like": {
                    "count": 3,
                    "i_like": 0
                }
            }
        ]
    }
}

function getWXMsg() {
    return {
        "id": 28,
        "token": "udqyng1441867418",
        "name": "xuecoffeeshow",
        "gh_id": "gh_1a1a03ea17ed",
        "appid": "wx25358cbc2d863f05",
        "appsecret": "7db2a476b4a9f6b663ff05690e73359e",
        "encodingaeskey": null,
        "qrcode": "http://pic.i-yizhan.com/uploads/55f1269781561.jpeg",
        "logo": "http://pic.i-yizhan.com/uploads/55f12662365e8.jpeg",
        "created_at": "2015-09-10 14:43:38",
        "updated_at": "2015-09-10 14:43:38",
        "deleted_at": null,
        "type": 1,
        "mchid": null,
        "mchkey": null,
        "business_id": 38
    };
}

function couponDetail() {
    return {
        "id": 3,
        "no": "k2GofJ",
        "status": "us",
        "coupon_template_id": 18,
        "business_id": 38,
        "from": "eflyers",
        "deleted_at": null,
        "created_at": "2015-09-15 09:53:40",
        "updated_at": "2015-09-30 10:50:26",
        "user_id": 17655,
        "assistant_id": null,
        "business": {
            "id": 38,
            "phone": "18858292328",
            "real_name": "TOM王",
            "email": "tomwang1981@qq.com",
            "shop_name": "学咖秀",
            "shop_location": null,
            "trade": 0,
            "logo": "http://pic.i-yizhan.com/uploads/55f1257bd918c.jpeg",
            "npc_no": 12,
            "status": "1",
            "created_at": "2015-09-10 14:30:06",
            "updated_at": "2015-12-02 09:23:37",
            "deleted_at": null,
            "shop_address": "下沙学源街传媒学院斜对面",
            "sum": 0,
            "expiration_time": null,
            "blind_status": "0",
            "founding_time": "0000-00-00 00:00:00",
            "category": "",
            "desc": "",
            "city": "",
            "district": "",
            "province": "",
            "shop_phone": "",
            "applicant": "",
            "area_id": 0
        },
        "coupon_template": {
            "id": 18,
            "intro": "所有解释权归商家所有",
            "begin_time": "2015-09-11",
            "end_time": "2015-10-31",
            "data": {
                "value": "9"
            },
            "business_id": 38,
            "created_at": "2015-09-10 17:47:04",
            "updated_at": "2015-09-30 10:22:07",
            "deleted_at": null,
            "type": "d",
            "name": "9折优惠券"
        }
    };
}

function redPacketDetail() {
    return {
        "id": 152,
        "business_id": 78,
        "user_id": 17655,
        "red_packet_template_id": 57,
        "no": "849320",
        "from": "red_packet",
        "status": 1,
        "value": 11,
        "created_at": "2016-03-31 21:07:30",
        "updated_at": "2016-03-31 21:07:30",
        "deleted_at": null,
        "assistant_id": 123,
        "business": {
            "id": 78,
            "phone": "15757161256",
            "real_name": "yuan",
            "email": "1103916076@qq.com",
            "shop_name": "yuan",
            "shop_location": null,
            "trade": 4,
            "logo": "http://pic.i-yizhan.com/uploads/56a3656649718.png",
            "npc_no": null,
            "status": "1",
            "created_at": "2015-10-16 09:32:47",
            "updated_at": "2016-02-25 16:55:13",
            "deleted_at": null,
            "shop_address": "xx",
            "sum": 9940,
            "expiration_time": null,
            "blind_status": "0",
            "founding_time": "0000-00-00 00:00:00",
            "category": "",
            "desc": "",
            "city": "",
            "district": "",
            "province": "",
            "shop_phone": "",
            "applicant": "",
            "area_id": 0
        },
        "red_packet_template": {
            "id": 57,
            "business_id": 78,
            "name": "test sms redirect",
            "intro": "test sms redirect",
            "type": 1,
            "repeat": 1,
            "begin_time": "2016-04-01",
            "end_time": "2016-04-10",
            "data": {
                "value": "11"
            },
            "created_at": "2016-03-31 20:58:32",
            "updated_at": "2016-03-31 20:58:32",
            "deleted_at": null
        }
    };
}

function couponPacket() {
    return [
        {
            "id": 3,
            "no": "k2GofJ",
            "status": "us",
            "coupon_template_id": 18,
            "business_id": 38,
            "from": "eflyers",
            "deleted_at": null,
            "created_at": "2015-09-15 09:53:40",
            "updated_at": "2015-09-30 10:50:26",
            "user_id": 17655,
            "assistant_id": null,
            "business": {
                "id": 38,
                "phone": "18858292328",
                "real_name": "TOM王",
                "email": "tomwang1981@qq.com",
                "shop_name": "学咖秀",
                "shop_location": null,
                "trade": 0,
                "logo": "http://pic.i-yizhan.com/uploads/55f1257bd918c.jpeg",
                "npc_no": 12,
                "status": "1",
                "created_at": "2015-09-10 14:30:06",
                "updated_at": "2015-12-02 09:23:37",
                "deleted_at": null,
                "shop_address": "下沙学源街传媒学院斜对面",
                "sum": 0,
                "expiration_time": null,
                "blind_status": "0",
                "founding_time": "0000-00-00 00:00:00",
                "category": "",
                "desc": "",
                "city": "",
                "district": "",
                "province": "",
                "shop_phone": "",
                "applicant": "",
                "area_id": 0
            },
            "coupon_template": {
                "id": 18,
                "intro": "所有解释权归商家所有",
                "begin_time": "2015-09-11",
                "end_time": "2015-10-31",
                "data": {
                    "value": "9"
                },
                "business_id": 38,
                "created_at": "2015-09-10 17:47:04",
                "updated_at": "2015-09-30 10:22:07",
                "deleted_at": null,
                "type": "m",
                "name": "9折优惠券"
            }
        },
        {
            "id": 2,
            "no": "02BDZV",
            "status": "un",
            "coupon_template_id": 28,
            "business_id": 42,
            "from": "eflyers",
            "deleted_at": null,
            "created_at": "2015-09-14 18:12:54",
            "updated_at": "2015-09-14 18:12:54",
            "user_id": 17655,
            "assistant_id": null,
            "business": {
                "id": 38,
                "phone": "18858292328",
                "real_name": "TOM王",
                "email": "tomwang1981@qq.com",
                "shop_name": "学咖秀",
                "shop_location": null,
                "trade": 0,
                "logo": "http://pic.i-yizhan.com/uploads/55f1257bd918c.jpeg",
                "npc_no": 12,
                "status": "1",
                "created_at": "2015-09-10 14:30:06",
                "updated_at": "2015-12-02 09:23:37",
                "deleted_at": null,
                "shop_address": "下沙学源街传媒学院斜对面",
                "sum": 0,
                "expiration_time": null,
                "blind_status": "0",
                "founding_time": "0000-00-00 00:00:00",
                "category": "",
                "desc": "",
                "city": "",
                "district": "",
                "province": "",
                "shop_phone": "",
                "applicant": "",
                "area_id": 0
            },
            "coupon_template": {
                "id": 28,
                "intro": "“还有谁”终极挑战",
                "begin_time": "2015-09-14",
                "end_time": "2015-09-20",
                "data": {
                    "value": 9
                },
                "business_id": 42,
                "created_at": "2015-09-14 18:00:27",
                "updated_at": "2015-09-14 18:00:27",
                "deleted_at": null,
                "type": "d",
                "name": "“还有谁”终极挑战"
            }
        },
        {
            "id": 2,
            "no": "02BDZV",
            "status": "un",
            "coupon_template_id": 28,
            "business_id": 42,
            "from": "eflyers",
            "deleted_at": null,
            "created_at": "2015-09-14 18:12:54",
            "updated_at": "2015-09-14 18:12:54",
            "user_id": 17655,
            "assistant_id": null,
            "business": {
                "id": 38,
                "phone": "18858292328",
                "real_name": "TOM王",
                "email": "tomwang1981@qq.com",
                "shop_name": "学咖秀",
                "shop_location": null,
                "trade": 0,
                "logo": "http://pic.i-yizhan.com/uploads/55f1257bd918c.jpeg",
                "npc_no": 12,
                "status": "1",
                "created_at": "2015-09-10 14:30:06",
                "updated_at": "2015-12-02 09:23:37",
                "deleted_at": null,
                "shop_address": "下沙学源街传媒学院斜对面",
                "sum": 0,
                "expiration_time": null,
                "blind_status": "0",
                "founding_time": "0000-00-00 00:00:00",
                "category": "",
                "desc": "",
                "city": "",
                "district": "",
                "province": "",
                "shop_phone": "",
                "applicant": "",
                "area_id": 0
            },
            "coupon_template": {
                "id": 28,
                "intro": "“还有谁”终极挑战",
                "begin_time": "2015-09-14",
                "end_time": "2015-09-20",
                "data": {
                    "value": 9
                },
                "business_id": 42,
                "created_at": "2015-09-14 18:00:27",
                "updated_at": "2015-09-14 18:00:27",
                "deleted_at": null,
                "type": "d",
                "name": "“还有谁”终极挑战"
            }
        },
        {
            "id": 3,
            "no": "k2GofJ",
            "status": "us",
            "coupon_template_id": 18,
            "business_id": 38,
            "from": "eflyers",
            "deleted_at": null,
            "created_at": "2015-09-15 09:53:40",
            "updated_at": "2015-09-30 10:50:26",
            "user_id": 17655,
            "assistant_id": null,
            "business": {
                "id": 38,
                "phone": "18858292328",
                "real_name": "TOM王",
                "email": "tomwang1981@qq.com",
                "shop_name": "学咖秀",
                "shop_location": null,
                "trade": 0,
                "logo": "http://pic.i-yizhan.com/uploads/55f1257bd918c.jpeg",
                "npc_no": 12,
                "status": "1",
                "created_at": "2015-09-10 14:30:06",
                "updated_at": "2015-12-02 09:23:37",
                "deleted_at": null,
                "shop_address": "下沙学源街传媒学院斜对面",
                "sum": 0,
                "expiration_time": null,
                "blind_status": "0",
                "founding_time": "0000-00-00 00:00:00",
                "category": "",
                "desc": "",
                "city": "",
                "district": "",
                "province": "",
                "shop_phone": "",
                "applicant": "",
                "area_id": 0
            },
            "coupon_template": {
                "id": 18,
                "intro": "所有解释权归商家所有",
                "begin_time": "2015-09-11",
                "end_time": "2015-10-31",
                "data": {
                    "value": "9"
                },
                "business_id": 38,
                "created_at": "2015-09-10 17:47:04",
                "updated_at": "2015-09-30 10:22:07",
                "deleted_at": null,
                "type": "m",
                "name": "9折优惠券"
            }
        },
        {
            "id": 2,
            "no": "02BDZV",
            "status": "un",
            "coupon_template_id": 28,
            "business_id": 42,
            "from": "eflyers",
            "deleted_at": null,
            "created_at": "2015-09-14 18:12:54",
            "updated_at": "2015-09-14 18:12:54",
            "user_id": 17655,
            "assistant_id": null,
            "business": {
                "id": 38,
                "phone": "18858292328",
                "real_name": "TOM王",
                "email": "tomwang1981@qq.com",
                "shop_name": "学咖秀",
                "shop_location": null,
                "trade": 0,
                "logo": "http://pic.i-yizhan.com/uploads/55f1257bd918c.jpeg",
                "npc_no": 12,
                "status": "1",
                "created_at": "2015-09-10 14:30:06",
                "updated_at": "2015-12-02 09:23:37",
                "deleted_at": null,
                "shop_address": "下沙学源街传媒学院斜对面",
                "sum": 0,
                "expiration_time": null,
                "blind_status": "0",
                "founding_time": "0000-00-00 00:00:00",
                "category": "",
                "desc": "",
                "city": "",
                "district": "",
                "province": "",
                "shop_phone": "",
                "applicant": "",
                "area_id": 0
            },
            "coupon_template": {
                "id": 28,
                "intro": "“还有谁”终极挑战",
                "begin_time": "2015-09-14",
                "end_time": "2015-09-20",
                "data": {
                    "value": 9
                },
                "business_id": 42,
                "created_at": "2015-09-14 18:00:27",
                "updated_at": "2015-09-14 18:00:27",
                "deleted_at": null,
                "type": "d",
                "name": "“还有谁”终极挑战"
            }
        },
        {
            "id": 2,
            "no": "02BDZV",
            "status": "un",
            "coupon_template_id": 28,
            "business_id": 42,
            "from": "eflyers",
            "deleted_at": null,
            "created_at": "2015-09-14 18:12:54",
            "updated_at": "2015-09-14 18:12:54",
            "user_id": 17655,
            "assistant_id": null,
            "business": {
                "id": 38,
                "phone": "18858292328",
                "real_name": "TOM王",
                "email": "tomwang1981@qq.com",
                "shop_name": "学咖秀",
                "shop_location": null,
                "trade": 0,
                "logo": "http://pic.i-yizhan.com/uploads/55f1257bd918c.jpeg",
                "npc_no": 12,
                "status": "1",
                "created_at": "2015-09-10 14:30:06",
                "updated_at": "2015-12-02 09:23:37",
                "deleted_at": null,
                "shop_address": "下沙学源街传媒学院斜对面",
                "sum": 0,
                "expiration_time": null,
                "blind_status": "0",
                "founding_time": "0000-00-00 00:00:00",
                "category": "",
                "desc": "",
                "city": "",
                "district": "",
                "province": "",
                "shop_phone": "",
                "applicant": "",
                "area_id": 0
            },
            "coupon_template": {
                "id": 28,
                "intro": "“还有谁”终极挑战",
                "begin_time": "2015-09-14",
                "end_time": "2015-09-20",
                "data": {
                    "value": 9
                },
                "business_id": 42,
                "created_at": "2015-09-14 18:00:27",
                "updated_at": "2015-09-14 18:00:27",
                "deleted_at": null,
                "type": "d",
                "name": "“还有谁”终极挑战"
            }
        },
        {
            "id": 3,
            "no": "k2GofJ",
            "status": "us",
            "coupon_template_id": 18,
            "business_id": 38,
            "from": "eflyers",
            "deleted_at": null,
            "created_at": "2015-09-15 09:53:40",
            "updated_at": "2015-09-30 10:50:26",
            "user_id": 17655,
            "assistant_id": null,
            "business": {
                "id": 38,
                "phone": "18858292328",
                "real_name": "TOM王",
                "email": "tomwang1981@qq.com",
                "shop_name": "学咖秀",
                "shop_location": null,
                "trade": 0,
                "logo": "http://pic.i-yizhan.com/uploads/55f1257bd918c.jpeg",
                "npc_no": 12,
                "status": "1",
                "created_at": "2015-09-10 14:30:06",
                "updated_at": "2015-12-02 09:23:37",
                "deleted_at": null,
                "shop_address": "下沙学源街传媒学院斜对面",
                "sum": 0,
                "expiration_time": null,
                "blind_status": "0",
                "founding_time": "0000-00-00 00:00:00",
                "category": "",
                "desc": "",
                "city": "",
                "district": "",
                "province": "",
                "shop_phone": "",
                "applicant": "",
                "area_id": 0
            },
            "coupon_template": {
                "id": 18,
                "intro": "所有解释权归商家所有",
                "begin_time": "2015-09-11",
                "end_time": "2015-10-31",
                "data": {
                    "value": "9"
                },
                "business_id": 38,
                "created_at": "2015-09-10 17:47:04",
                "updated_at": "2015-09-30 10:22:07",
                "deleted_at": null,
                "type": "m",
                "name": "9折优惠券"
            }
        },
        {
            "id": 2,
            "no": "02BDZV",
            "status": "un",
            "coupon_template_id": 28,
            "business_id": 42,
            "from": "eflyers",
            "deleted_at": null,
            "created_at": "2015-09-14 18:12:54",
            "updated_at": "2015-09-14 18:12:54",
            "user_id": 17655,
            "assistant_id": null,
            "business": {
                "id": 38,
                "phone": "18858292328",
                "real_name": "TOM王",
                "email": "tomwang1981@qq.com",
                "shop_name": "学咖秀",
                "shop_location": null,
                "trade": 0,
                "logo": "http://pic.i-yizhan.com/uploads/55f1257bd918c.jpeg",
                "npc_no": 12,
                "status": "1",
                "created_at": "2015-09-10 14:30:06",
                "updated_at": "2015-12-02 09:23:37",
                "deleted_at": null,
                "shop_address": "下沙学源街传媒学院斜对面",
                "sum": 0,
                "expiration_time": null,
                "blind_status": "0",
                "founding_time": "0000-00-00 00:00:00",
                "category": "",
                "desc": "",
                "city": "",
                "district": "",
                "province": "",
                "shop_phone": "",
                "applicant": "",
                "area_id": 0
            },
            "coupon_template": {
                "id": 28,
                "intro": "“还有谁”终极挑战",
                "begin_time": "2015-09-14",
                "end_time": "2015-09-20",
                "data": {
                    "value": 9
                },
                "business_id": 42,
                "created_at": "2015-09-14 18:00:27",
                "updated_at": "2015-09-14 18:00:27",
                "deleted_at": null,
                "type": "d",
                "name": "“还有谁”终极挑战"
            }
        },
        {
            "id": 2,
            "no": "02BDZV",
            "status": "un",
            "coupon_template_id": 28,
            "business_id": 42,
            "from": "eflyers",
            "deleted_at": null,
            "created_at": "2015-09-14 18:12:54",
            "updated_at": "2015-09-14 18:12:54",
            "user_id": 17655,
            "assistant_id": null,
            "business": {
                "id": 38,
                "phone": "18858292328",
                "real_name": "TOM王",
                "email": "tomwang1981@qq.com",
                "shop_name": "学咖秀",
                "shop_location": null,
                "trade": 0,
                "logo": "http://pic.i-yizhan.com/uploads/55f1257bd918c.jpeg",
                "npc_no": 12,
                "status": "1",
                "created_at": "2015-09-10 14:30:06",
                "updated_at": "2015-12-02 09:23:37",
                "deleted_at": null,
                "shop_address": "下沙学源街传媒学院斜对面",
                "sum": 0,
                "expiration_time": null,
                "blind_status": "0",
                "founding_time": "0000-00-00 00:00:00",
                "category": "",
                "desc": "",
                "city": "",
                "district": "",
                "province": "",
                "shop_phone": "",
                "applicant": "",
                "area_id": 0
            },
            "coupon_template": {
                "id": 28,
                "intro": "“还有谁”终极挑战",
                "begin_time": "2015-09-14",
                "end_time": "2015-09-20",
                "data": {
                    "value": 9
                },
                "business_id": 42,
                "created_at": "2015-09-14 18:00:27",
                "updated_at": "2015-09-14 18:00:27",
                "deleted_at": null,
                "type": "d",
                "name": "“还有谁”终极挑战"
            }
        },
        {
            "id": 1,
            "no": "iQpiSL",
            "status": "un",
            "coupon_template_id": 28,
            "business_id": 42,
            "from": "eflyers",
            "deleted_at": null,
            "created_at": "2015-09-14 18:02:50",
            "updated_at": "2015-09-14 18:02:50",
            "user_id": 17655,
            "assistant_id": null,
            "business": {
                "id": 38,
                "phone": "18858292328",
                "real_name": "TOM王",
                "email": "tomwang1981@qq.com",
                "shop_name": "学咖秀",
                "shop_location": null,
                "trade": 0,
                "logo": "http://pic.i-yizhan.com/uploads/55f1257bd918c.jpeg",
                "npc_no": 12,
                "status": "1",
                "created_at": "2015-09-10 14:30:06",
                "updated_at": "2015-12-02 09:23:37",
                "deleted_at": null,
                "shop_address": "下沙学源街传媒学院斜对面",
                "sum": 0,
                "expiration_time": null,
                "blind_status": "0",
                "founding_time": "0000-00-00 00:00:00",
                "category": "",
                "desc": "",
                "city": "",
                "district": "",
                "province": "",
                "shop_phone": "",
                "applicant": "",
                "area_id": 0
            },
            "coupon_template": {
                "id": 28,
                "intro": "“还有谁”终极挑战",
                "begin_time": "2015-09-14",
                "end_time": "2015-09-20",
                "data": {
                    "value": "“还有谁”终极挑战"
                },
                "business_id": 42,
                "created_at": "2015-09-14 18:00:27",
                "updated_at": "2015-09-14 18:00:27",
                "deleted_at": null,
                "type": "c",
                "name": "“还有谁”终极挑战"
            }
        }
    ];
}

function packetsDetail() {
    return [
        {
            "name": "red_packet",
            "img": "/assets/wechat/packets/packets__red-packet.png",
            "data": [
                {
                    "id": 152,
                    "business_id": 78,
                    "user_id": 17655,
                    "red_packet_template_id": 57,
                    "no": "849320",
                    "from": "red_packet",
                    "status": 1,
                    "value": 11,
                    "created_at": "2016-03-31 21:07:30",
                    "updated_at": "2016-03-31 21:07:30",
                    "deleted_at": null,
                    "assistant_id": null,
                    "red_packet_template": {
                        "id": 57,
                        "business_id": 78,
                        "name": "test sms redirect",
                        "intro": "test sms redirect",
                        "type": 1,
                        "repeat": 1,
                        "begin_time": "2016-04-01",
                        "end_time": "2016-04-10",
                        "data": {
                            "value": "11"
                        },
                        "created_at": "2016-03-31 20:58:32",
                        "updated_at": "2016-03-31 20:58:32",
                        "deleted_at": null
                    }
                }
            ]
        },
        {
            "name": "coupon",
            "img": "/assets/wechat/packets/packets__coupon.png",
            "data": [
                {
                    "id": 2,
                    "no": "02BDZV",
                    "status": "un",
                    "coupon_template_id": 28,
                    "business_id": 42,
                    "from": "eflyers",
                    "deleted_at": null,
                    "created_at": "2015-09-14 18:12:54",
                    "updated_at": "2015-09-14 18:12:54",
                    "user_id": 17655,
                    "assistant_id": null,
                    "coupon_template": {
                        "id": 28,
                        "intro": "“还有谁”终极挑战",
                        "begin_time": "2015-09-14",
                        "end_time": "2015-09-20",
                        "data": {
                            "value": "“还有谁”终极挑战"
                        },
                        "business_id": 42,
                        "created_at": "2015-09-14 18:00:27",
                        "updated_at": "2015-09-14 18:00:27",
                        "deleted_at": null,
                        "type": "c",
                        "name": "“还有谁”终极挑战"
                    }
                },
                {
                    "id": 1,
                    "no": "iQpiSL",
                    "status": "un",
                    "coupon_template_id": 28,
                    "business_id": 42,
                    "from": "eflyers",
                    "deleted_at": null,
                    "created_at": "2015-09-14 18:02:50",
                    "updated_at": "2015-09-14 18:02:50",
                    "user_id": 17655,
                    "assistant_id": null,
                    "coupon_template": {
                        "id": 28,
                        "intro": "“还有谁”终极挑战",
                        "begin_time": "2015-09-14",
                        "end_time": "2015-09-20",
                        "data": {
                            "value": "“还有谁”终极挑战"
                        },
                        "business_id": 42,
                        "created_at": "2015-09-14 18:00:27",
                        "updated_at": "2015-09-14 18:00:27",
                        "deleted_at": null,
                        "type": "c",
                        "name": "“还有谁”终极挑战"
                    }
                }
            ]
        }
    ];
}

function redPacket() {
    return  [
        {
            "id": 152,
            "business_id": 78,
            "user_id": 17655,
            "red_packet_template_id": 57,
            "no": "849320",
            "from": "red_packet",
            "status": 1,
            "value": 11,
            "created_at": "2016-03-31 21:07:30",
            "updated_at": "2016-03-31 21:07:30",
            "deleted_at": null,
            "assistant_id": null,
            "business": {
                "id": 78,
                "phone": "15757161256",
                "real_name": "yuan",
                "email": "1103916076@qq.com",
                "shop_name": "yuan",
                "shop_location": null,
                "trade": 4,
                "logo": "http://pic.i-yizhan.com/uploads/56a3656649718.png",
                "npc_no": null,
                "status": "1",
                "created_at": "2015-10-16 09:32:47",
                "updated_at": "2016-02-25 16:55:13",
                "deleted_at": null,
                "shop_address": "xx",
                "sum": 9940,
                "expiration_time": null,
                "blind_status": "0",
                "founding_time": "0000-00-00 00:00:00",
                "category": "",
                "desc": "",
                "city": "",
                "district": "",
                "province": "",
                "shop_phone": "",
                "applicant": "",
                "area_id": 0
            },
            "red_packet_template": {
                "id": 57,
                "business_id": 78,
                "name": "test sms redirect",
                "intro": "test sms redirect",
                "type": 1,
                "repeat": 1,
                "begin_time": "2016-04-01",
                "end_time": "2016-04-10",
                "data": {
                    "value": "11"
                },
                "created_at": "2016-03-31 20:58:32",
                "updated_at": "2016-03-31 20:58:32",
                "deleted_at": null
            }
        }
    ];
}

function createComment() {
    return 'success';
}

function commentList() {
    return {
        "total": 2,
        "per_page": "3",
        "current_page": 1,
        "last_page": 1,
        "next_page_url": null,
        "prev_page_url": null,
        "from": 1,
        "to": 2,
        "data": [
            {
                "id": 2,
                "parent_id": null,
                "user_id": 12,
                "source_id": 1,
                "source_type": "benefit",
                "content": "13212321",
                "created_at": "2016-04-01 16:03:23",
                "updated_at": null,
                "deleted_at": null,
                "user": {
                    "id": 12,
                    "email": null,
                    "base_name": "辣辣",
                    "base_sex": 0,
                    "base_birth": "1992-01-13",
                    "base_city": "",
                    "base_job": null,
                    "wx_headpic": "http://wx.qlogo.cn/mmopen/kPiaK4Pq8TuHaRVxl6zicMW35Py0kXSXxvT8vY9qmJPETIIMgHQhwUoRf4t625VZJ07AsOAYIz1ibNKPpFqr8zrCgMGvlVLFmnx/0",
                    "wx_nickname": "✔️相由心生",
                    "wx_address": "浙江杭州",
                    "source": null,
                    "wx_unionid": null,
                    "wx_openid": "oxAKrs8axdeZ3FxKxDLRq_A-xU0I",
                    "created_at": "2015-09-15 09:52:38",
                    "updated_at": "2015-09-29 19:43:52",
                    "phone": "18768126460",
                    "deleted_at": null,
                    "create_from": null
                }
            },
            {
                "id": 1,
                "parent_id": null,
                "user_id": 1231,
                "source_id": 1,
                "source_type": "benefit",
                "content": "12312",
                "created_at": "2016-04-01 16:03:15",
                "updated_at": null,
                "deleted_at": null,
                "user": {
                    "id": 1231,
                    "email": null,
                    "base_name": null,
                    "base_sex": null,
                    "base_birth": null,
                    "base_city": null,
                    "base_job": null,
                    "wx_headpic": "http://wx.qlogo.cn/mmopen/ajNVdqHZLLBy5FsoM3lFziaGgwQngKRibbCN8ldJ7W9D0WXD0JF61CPVnBWKRwXmzoSFs6Rv26AIE8Ep9MZ8jgVQ/0",
                    "wx_nickname": "zj",
                    "wx_address": "浙江杭州",
                    "source": null,
                    "wx_unionid": null,
                    "wx_openid": "oxAKrsw2y1LqssqX5jSXXgRsLTu4",
                    "created_at": "2015-09-23 16:36:03",
                    "updated_at": "2015-09-23 16:36:14",
                    "phone": "13857140110",
                    "deleted_at": null,
                    "create_from": null
                }
            }
        ]
    }
}

function communityDetail() {
    return {
        "id": 1,
        "name": "社群1",
        "business_id": 1,
        "created_at": "2016-04-01 11:34:49",
        "updated_at": null,
        "deleted_at": null,
        "user_count": 0,
        "detail": 'qweqw_R_eq_N_we',
        "benefit_rule": 'qwe_R_qwe',
        "benefit_store": 'qwe_N_qwe',
        "wx_qrcode": 'asdasd',
        "business": {
            "wechat": {
                "id": 1,
                "token": "bjtjxu1441621005",
                "name": "极客咖啡GeekCoffee",
                "gh_id": "gh_4f8c97495106",
                "appid": "wx6271364f0b9d7213",
                "appsecret": "edbd6641cc46f2e3cda2fa0d77a2032a",
                "encodingaeskey": null,
                "qrcode": "http://pic.i-yizhan.com/uploads/55ed640aa3b12.jpeg",
                "logo": "http://pic.i-yizhan.com/uploads/55ed6404b0f51.jpeg",
                "created_at": "2015-09-07 18:16:45",
                "updated_at": "2015-11-11 15:06:11",
                "deleted_at": null,
                "type": 2,
                "mchid": null,
                "mchkey": null,
                "business_id": 1
            },
            "id": 1,
            "phone": "15695880633",
            "real_name": "我",
            "email": "gg@163.com",
            "shop_name": "旗舰店",
            "shop_location": null,
            "trade": 1,
            "logo": "http://pic.i-yizhan.com/uploads/55ed8832ea2fa.jpeg",
            "npc_no": null,
            "status": "1",
            "created_at": "2015-09-07 16:01:28",
            "updated_at": "2015-09-07 20:51:03",
            "deleted_at": null,
            "shop_address": "g",
            "sum": 0,
            "expiration_time": null,
            "blind_status": "0",
            "founding_time": "0000-00-00 00:00:00",
            "category": "",
            "desc": "",
            "city": "",
            "district": "",
            "province": "",
            "shop_phone": "",
            "applicant": "",
            "area_id": 0
        }
    };
}

function welfareDetail() {
    return {
        "id": 1,
        "name": "1",
        "img": "https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/logo_white.png",
        "detail": "112312<img src='http://img1.3lian.com/2015/w7/98/d/22.jpg'>",
        "source_id": 1,
        "source_type": "red_packet",
        "association_id": "1",
        "url": "http://www.baidu.com",
        "url_md5": null,
        "created_at": "2016-04-01 15:04:34",
        "updated_at": null,
        "deleted_at": null
    }
}

function updateUser() {
    return 'success';
}

function sheQunFuLi() {
    return {
        "total": 2,
        "per_page": "2",
        "current_page": 1,
        "last_page": 1,
        "next_page_url": null,
        "prev_page_url": null,
        "from": 1,
        "to": 2,
        "data": [
            {
                "id": 2,
                "name": "2",
                "img": "http://img1.3lian.com/2015/w7/98/d/22.jpg",
                "detail": "1232",
                "source_id": 1,
                "source_type": "coupon",
                "association_id": "90",
                "url": "1",
                "url_md5": null,
                "created_at": null,
                "updated_at": null,
                "deleted_at": null
            },
            {
                "id": 1,
                "name": "1",
                "img": "http://img1.3lian.com/2015/w7/98/d/22.jpg",
                "detail": "112312",
                "source_id": 1,
                "source_type": "red_packet",
                "association_id": "1",
                "url": "1",
                "url_md5": null,
                "created_at": null,
                "updated_at": null,
                "deleted_at": null
            }
        ]
    }
}

function tuiJianHuoDong() {
    return {
        "total": 3,
        "per_page": "3",
        "current_page": 1,
        "last_page": 1,
        "next_page_url": null,
        "prev_page_url": null,
        "from": 1,
        "to": 3,
        "data": [
            {
                "id": 3,
                "association_id": 3,
                "name": "3",
                "img": "/assets/wechat/home/1.png",
                "detail": "3",
                "url": "http://angular-china.org",
                "url_md5": null,
                "created_at": null,
                "updated_at": null,
                "deleted_at": null
            },
            {
                "id": 2,
                "association_id": 2,
                "name": "2",
                "img": "/assets/wechat/home/3.png",
                "detail": "2",
                "url": "http://angular-china.org",
                "url_md5": null,
                "created_at": null,
                "updated_at": null,
                "deleted_at": null
            },
            {
                "id": 1,
                "association_id": 1,
                "name": "1",
                "img": "/assets/wechat/home/2.png",
                "detail": "123",
                "url": "http://angular-china.org",
                "url_md5": null,
                "created_at": null,
                "updated_at": null,
                "deleted_at": null
            }
        ]
    }
}

function checkVerificationCode() {
    return 'check';
}

function getVerificationCode() {
    return 'send';
}

function generateUserProfile() {
    return 'profile already exist';
}

// 当前用户状态
function visitorStatus() {
    return {
        "id":17763,
        "email":null,
        "base_name":null,
        "base_sex":1,
        "base_birth":'2016-03-24',
        "base_city":null,
        "base_job":null,
        "wx_headpic":"http://wx.qlogo.cn/mmopen/EJW6j9SyrxVAgXy0J9X9rwLj7OnkYTEGZuOF2vFJUwc4FJHIPO9nxGgibU3wvaBpoTruWsMZRUAGt5BRqfJ86e7bvA2kaGZvV/0",
        "wx_nickname":"KEL-IVO",
        "wx_address":"浙江绍兴",
        "source":null,
        "wx_unionid":null,
        "wx_openid":"o1SNDs8uhCTXUDt1ghcTAin4Jcso",
        "created_at":"2016-03-24 09:01:28",
        "updated_at":"2016-03-24 09:01:28",
        "phone": '13738015054',
        "deleted_at":null,
        "create_from":"we_chat_auto_create",
        //"user_profile":null
        "user_profile":{
            name: 'dreamapple',
            id: 123,
            rank: 1,
            score: 1
        }
    }
}

function yourArrayFuncName() {
    return [
        {id: 1, firstName: 'John', lastName: 'Papa', age: 90, location: 'Florida'},
        {id: 2, firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California'},
        {id: 3, firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York'},
        {id: 4, firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota'},
        {id: 5, firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota'},
        {id: 6, firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina'},
        {id: 7, firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming'},
        {id: 90, firstName: 'Aaron', lastName: 'Jinglehiemer', age: 22, location: 'Utah'}
    ];

}

function yourObjFuncName() {
    return {
        key: 'value',
        id: 1
    }
}

function getPeople() {
    return [
        {id: 1, firstName: 'John', lastName: 'Papa', age: 90, location: 'Florida'},
        {id: 2, firstName: 'Ward', lastName: 'Bell', age: 31, location: 'California'},
        {id: 3, firstName: 'Colleen', lastName: 'Jones', age: 21, location: 'New York'},
        {id: 4, firstName: 'Madelyn', lastName: 'Green', age: 18, location: 'North Dakota'},
        {id: 5, firstName: 'Ella', lastName: 'Jobs', age: 18, location: 'South Dakota'},
        {id: 6, firstName: 'Landon', lastName: 'Gates', age: 11, location: 'South Carolina'},
        {id: 7, firstName: 'Haley', lastName: 'Guthrie', age: 35, location: 'Wyoming'},
        {id: 90, firstName: 'Aaron', lastName: 'Jinglehiemer', age: 22, location: 'Utah'}
    ];
}
