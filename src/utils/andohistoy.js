let isIOS = navigator.userAgent.match('iPad') || navigator.userAgent.match('iPhone') || navigator.userAgent.match('iPod')
let isAndroid = navigator.userAgent.match('Android');
export  function goBack() {
    if (isIOS) {
        window.webkit.messageHandlers.jsCall.postMessage({
          "action": "backTrack",
          "data": {}
        })
      } else if (isAndroid) {
        window.jsCall.backTrack()
      }
}
export  function toShareDaily(params) {
    if (isIOS) {
        window.webkit.messageHandlers.jsCall.postMessage(JSON.stringify({
            action: "toShareDaily",
            actionDetail: {
                showType: params.actionDetail.showType, //1:图文模式，2：大图模式，3：文本模式
                data:{
                    title: params.actionDetail.data.title,
                    imageUrl: params.actionDetail.data.imageUrl,
                    jumpUrl: params.actionDetail.data.jumpUrl,
                    content: params.actionDetail.data.content
                }
            }

        }))
      } else if (isAndroid) {
        window.jsCall.toShareDaily(JSON.stringify({
            action: "toShareDaily",
            actionDetail: {
                showType: params.actionDetail.showType, //1:图文模式，2：大图模式，3：文本模式
                data:{
                    title: params.actionDetail.data.title,
                    imageUrl: params.actionDetail.data.imageUrl,
                    jumpUrl: params.actionDetail.data.jumpUrl,
                    content: params.actionDetail.data.content
                }
            }

        }))
      }
}
export  function toRecharge(data) {
    if (isIOS) {
        window.webkit.messageHandlers.jsCall.postMessage(JSON.stringify({
            action: "toRecharge",
            actionDetail: {
                showType:data.actionDetail.showType,
                id:data.actionDetail.id,
                payType:data.actionDetail.payType
            }
        }))
      } else if (isAndroid) {
        window.jsCall.toRecharge(JSON.stringify({
                action: "toRecharge",
                actionDetail: {
                    showType:data.actionDetail.showType,
                    id:data.actionDetail.id,
                    payType:data.actionDetail.payType
                }
            }))
      }
}
export  function login(data) {
    if (isIOS) {
        window.webkit.messageHandlers.jsCall.postMessage({
            "action": "login",
            "data": {}
        })
      } else if (isAndroid) {
        window.jsCall.login()
      }
}

export  function toSharePassword(data) {
    if (isIOS) {
        window.webkit.messageHandlers.jsCall.postMessage(JSON.stringify({
            action:data.action,
            actionDetail:{
                content:data.actionDetail.content
            }
        }))
    } else if (isAndroid) {
        window.jsCall.toSharePassword(JSON.stringify({
            action:data.action,
            actionDetail:{
                content:data.actionDetail.content
            }
        }))
    }
}
//去阅读
export  function toBookCity(data) {
    if (isIOS) {
        window.webkit.messageHandlers.jsCall.postMessage(JSON.stringify({
            action:"toBookCity",
            data:{}
        }))
      } else if (isAndroid) {
        window.jsCall.toBookCity()
      }
}
// toBindPhoneNumber  绑定手机号  
export  function toBindPhoneNumber(data) {
    if (isIOS) {
        window.webkit.messageHandlers.jsCall.postMessage(JSON.stringify({
            action:data.action,
            actionDetail: {
              extractId:data.actionDetail.extractId,
              type:data.actionDetail.type
            }
        }))
    } else if (isAndroid) {
        window.jsCall.toBindPhoneNumber(JSON.stringify({
          action:data.action,
          actionDetail: {
            extractId:data.actionDetail.extractId,
            type:data.actionDetail.type
          }
        }))
    }
}