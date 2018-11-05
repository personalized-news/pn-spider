'use strict';

const mongoose = require('mongoose');
const { mongodb } = require('../config');

mongoose.connect(
  mongodb,
  { useNewUrlParser: true }
);

const News = mongoose.model('News', {
  allList: Array,
  id: String,
  content: String,
  havePic: Boolean,
  pubDate: String,
  title: String,
  source: String,
  imageurls: Array,
  channelName: String,
  link: String,
  desc: String,
  channelId: String
});

module.exports = {
  createNews: news => new News(news).save()
};
