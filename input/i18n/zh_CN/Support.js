module.exports = {
  Title: "提交报告",
  Field: {
    SelectType: "问题类型",
    SelectGame: "选择游戏",
    Account: "账号",
    Email: "邮箱",
    Title: "标题",
    Description: "描述",
    ScreenShot: "截图"
  },
  Select: {
    SelectType: {
      description: "功能介绍",
      game: "特色玩法",
      account: "账号相关",
      payment: "储值相关"
    },
    SelectGame: "请选择游戏",
    SelectArea: "请选择服务器"
  },
  ErrorMsg: {
    10001: "请输入您的账号",
    10002: "请输入标题",
    10003: "请输入描述",
    10004: '该区账号不存在'
  },
  Tips: {
    Succeed: "您的报告已经发送至游戏开发者。",
    Upload: "你可以上传一个JGP文件。文件大小不能超过500K。"
  },
  Button: {
    Ok: "提交",
    Reset: "重置",
    Cancel: "取消",
    ChooseImage: "选择文件"
  },
  Text: {
    Title: "用户报告了‘%s’‘%s’的一个问题。",
    Context: "亲爱的开发者，一个‘%s’的玩家，(UID ‘%s’, Server ‘%s’) 有一个关于‘%s’的问题。"
  }
};
