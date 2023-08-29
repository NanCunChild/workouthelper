Page({
  data: {
    
  },
  onLoad() {
    wx.showModal({
      title: 'V1.1更新',
      content: '本次开发修复了运动路程在整数时不显示两位小数的问题；添加了快速随机值的方式；加入了自定义路线。 ————NanCunChild',
    })
  },
  GotoHUAWEIHealth:function(){
    wx.navigateTo({
      url:"/pages/HUAWEI/HUAWEI_Health"
    })
  },
  GotoKeep:function(){
    wx.navigateTo({
      url:"/pages/Keep/Keep"
    })
  }
})
