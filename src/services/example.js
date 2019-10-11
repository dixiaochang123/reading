import request from '../utils/request';

const url = 'http://weizhiliang.top/ruilu'
const url1 = 'http://123.114.205.224:8848'
//
export function query() {
  return request.get(`${url}/book`,{book_id:1000002});
}
//获取章节目录
export function chapter_list(book_id) {
  return request.get(`${url}/chapter`,{book_id:book_id});
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

