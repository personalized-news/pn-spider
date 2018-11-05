// https://www.showapi.com/api/lookPoint/109

'use strict';

const channelSettings = {
  url: 'http://route.showapi.com/109-34', //你要调用的API对应接入点的地址,注意需要先订购了相关套餐才能调
  appId: '79391', //你的应用id
  secret: 'de28e369534e4d9586aaa4600f6eb64c', //你的密钥
  timeout: 5000 //http超时设置
};

const newsSettings = {
  url: 'http://route.showapi.com/109-35', //你要调用的API对应接入点的地址,注意需要先订购了相关套餐才能调
  appId: '79391', //你的应用id
  secret: 'de28e369534e4d9586aaa4600f6eb64c', //你的密钥
  timeout: 5000 //http超时设置
};

// example
const config = {
  channelId: '5572a108b3cdc86cf39001cd',
  channelName: '',
  title: '',
  page: '1',
  needContent: '1',
  needHtml: '0',
  needAllList: '1',
  maxResult: '100',
  id: ''
};

module.exports = {
  config,
  channelSettings,
  newsSettings,
  mongodb: 'mongodb://localhost:27017/pn'
};
