Component({
  properties: {
    // myProperty: { // 属性名
    //   type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）
    //   value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个
    //   observer: function (newVal, oldVal) { } // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
    // },
    myProperty: String // 简化的定义方式
  },
  attached() { 
    let bar = wx.getMenuButtonBoundingClientRect()		// 获取胶囊丸信息
    // 胶囊的top有时候获取到是0 ，所以兼容 statusBarHeight（刘海的高度，原生标题栏的top，比胶囊的top高一些）
    let top = bar.top || wx.getSystemInfoSync().statusBarHeight+4	
    this.setData({
        height: bar.height,	// 标题栏高度与胶囊 高度相同，适用于透明标题栏。
        top	// 标题栏top。如果标题栏高度比胶囊大，设置为 top - (navigationHeight - bar.height)/2
    })
    // console.log(top,bar.height)
  },
 
  methods:{
    goback(){
      wx.navigateBack({
        delta: 1
      })
    },
  },
  onLoad() {
    this.attached()

  }
})