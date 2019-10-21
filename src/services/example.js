import request from '../utils/request';

const url = 'http://weizhiliang.top/ruilu'
// const url1 = 'http://123.114.202.129:8848'
const url1 = 'http://api.readalot.com.cn:80'
//
export function query() {
  return request.get(`${url}/book`,{book_id:1000001});
}
//获取章节目录 //bookId=1000001&chapterId=1
export function chapter_list(data) {
  return request.post(`${url1}/book/chapter?bookId=${data.bookId}&chapterId=${data.chapterId}`,{...data});
}
//获取章节内容
export function chapter_text(text) {
  return request.get(`http://develop-ykks-book.cn-bj.ufileos.com/${text}`);
}

//邀请好友
export function inviteRecordCount() {
  return request.post(`${url1}/welfare/inviteRecordCount`);
}

//邀请码以及分享图片
export function getInviteCodeAndImg() {
  return request.post(`${url1}/welfare/getInviteCodeAndImg`);
}
//我的金币
export function getCoinLog() {
  return request.post(`${url1}/my/getCoinLog`);
}

//我的金币
// export function extractMoney(data) {
//   return request.post(`${url1}/coin/extractMoney?extractId=${data.extractId}&type=${data.type}`);
// }

//签到
export function signed() {
  return request.post(`${url1}/welfare/signed`);
}

//签到信息获取
export function signData() {
  return request.post(`${url1}/welfare/signData`);
}

//补签
export function signResign(day) {
  return request.post(`${url1}/welfare/resign?day=${day}`);
}

//福利中心
export function getWelfareResult() {
  return request.post(`${url1}/welfare/getWelfareResult`);
}

//获取充值页面信息
export function getVipConfig() {
  return request.post(`${url1}/pay/getVipConfig`);
}
//立即支付
export function getPayOrder(data) {
  return request.post(`${url1}/pay/getPayOrder?id=${data.id}&platform=${data.platform}&payType=${data.payType}`);
}

//我的信息
export function my() {
  return request.post(`${url1}/my`);
}

//提现配置
export function extractConfig() {
  return request.post(`${url1}/coin/extractConfig`);
}

//提现
export function extractMoney(data) {
  return request.post(`${url1}/coin/extractMoney?extractId=${data.extractId}&type=${data.type}`);
}


//提现记录
export function extractMoneyLog(data) {
  return request.post(`${url1}/coin/extractMoneyLog?page=${data.page}&pageSize=${data.pageSize}`);
}

