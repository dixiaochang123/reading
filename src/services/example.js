import request from '../utils/request';

const url = 'http://weizhiliang.top/ruilu'
const url1 = 'http://123.114.202.129:8848'
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
  return request.post(`${url1}//welfare/resign?day=${day}`);
}

