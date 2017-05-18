//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
     imgUrls: [
      '../../images/banner-1.jpg',
      '../../images/banner-2.jpg',
      '../../images/banner-1.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 1000,
    duration: 500,
    listItems:[{
      "title":"第一课：小程序入门",
      "content":"第一课：小程序入门。。。第一课：小程序入门。。。第一课：小程序入门。。。",
      "foot":"主讲老师：张德检"
    },{
      "title":"第一课：小程序入门",
      "content":"第一课：小程序入门。。。第一课：小程序入门。。。第一课：小程序入门。。。",
      "foot":"主讲老师：张德检"
    },{
      "title":"第一课：小程序入门",
      "content":"第一课：小程序入门。。。第一课：小程序入门。。。第一课：小程序入门。。。",
      "foot":"主讲老师：张德检"
    },{
      "title":"第一课：小程序入门",
      "content":"第一课：小程序入门。。。第一课：小程序入门。。。第一课：小程序入门。。。",
      "foot":"主讲老师：张德检"
    },{
      "title":"第一课：小程序入门",
      "content":"第一课：小程序入门。。。第一课：小程序入门。。。第一课：小程序入门。。。",
      "foot":"主讲老师：张德检"
    },{
      "title":"第一课：小程序入门",
      "content":"第一课：小程序入门。。。第一课：小程序入门。。。第一课：小程序入门。。。",
      "foot":"主讲老师：张德检"
    }]
  },
  
  onLoad: function () {
    console.log('onLoad')
   
  }
})
