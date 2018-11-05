//推荐使用npm安装使用sdk: npm install --save showapi-sdk
'use strict';

const showapiSdk = require('showapi-sdk');
const { config, newsSettings } = require('./config');
const { createNews } = require('./mongo');

//全局默认设置
showapiSdk.setting(newsSettings);

const request = showapiSdk.request();

for (const prop in config) {
  request.appendText(prop, config[prop]);
}

request.post(function(data) {
  const list = data.showapi_res_body.pagebean.contentlist;
  for (const item of list) {
    createNews(item).then(data => {
      console.log(`${data.title} is inserted`);
    });
  }
});
