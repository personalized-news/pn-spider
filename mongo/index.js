'use strict';

const mongoose = require('mongoose');
const { mongodb } = require('../config');

mongoose.connect(
  mongodb,
  { useNewUrlParser: true }
);

const News = mongoose.model('News', {
  link: String,
  id: String,
  channelId: String,
  nid: String,
  havePic: Boolean,
  pubDate: String,
  title: String,
  source: String,
  imageurls: Array,
  desc: String
});

module.exports = {
  createNews: news => new News(news).save()
};
