Page({
  data: {
    
  },
  onLoad() {

  },

  GotoHUAWEIHealth:function(){
    wx.navigateTo({
      url:"/pages/HUAWEI/HUAWEI_Health"
    })
    return;
  },

  GotoKeep:function(){
    wx.navigateTo({
      url:"/pages/Keep/Keep"
    })
    return;
  },

})
