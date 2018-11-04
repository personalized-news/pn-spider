//推荐使用npm安装使用sdk: npm install --save showapi-sdk
'use strict';

const showapiSdk = require('showapi-sdk');
const { channelSettings } = require('../config');

//全局默认设置
showapiSdk.setting(channelSettings);

const request = showapiSdk.request();

let list = [];
request.post(res => {
  list = res.showapi_res_body.channelList;
  console.log(list);
  module.exports = {
    list
  };
});
