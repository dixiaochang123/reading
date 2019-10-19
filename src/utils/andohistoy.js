export  function goBack() {
    let isIOS = navigator.userAgent.match('iPad') || navigator.userAgent.match('iPhone') || navigator.userAgent.match('iPod')
    let isAndroid = navigator.userAgent.match('Android');
    if (isIOS) {
        // window.webkit.messageHandlers.jsCall.postMessage({
        //   "action": "toLoginIn",
        //   "data": {}
        // })
      } else if (isAndroid) {
        window.jsCall.backTrack()
      }
}
export  function toShareDaily(params) {
    let isIOS = navigator.userAgent.match('iPad') || navigator.userAgent.match('iPhone') || navigator.userAgent.match('iPod')
    let isAndroid = navigator.userAgent.match('Android');
    if (isIOS) {
        // window.webkit.messageHandlers.jsCall.postMessage({
        //   "action": "toLoginIn",
        //   "data": {}
        // })
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