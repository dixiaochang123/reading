import request from '../utils/request';

const url = 'http://weizhiliang.top/ruilu'
//
export function query() {
  return request(`${url}/book?book_id=1000002`);
}
//获取章节目录
export function chapter_list(book_id) {
  return request(`${url}/chapter?book_id=${book_id}`);
}
//获取章节内容
export function chapter_text(text) {
  return request(`http://develop-ykks-book.cn-bj.ufileos.com/${text}`);
}

