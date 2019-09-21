import request from '../utils/request';

//
export function query() {
  return request('http://weizhiliang.top/ruilu/book?book_id=1000002');
}
//获取章节目录
export function chapter_list(book_id) {
  return request(`http://weizhiliang.top/ruilu/chapter?book_id=${book_id}`);
}
//获取章节内容
export function chapter_text() {
  return request(`http://develop-ykks-book.cn-bj.ufileos.com/https://www.youkongkanshu.com/huagerr/chapter/1000002_387_48366.txt`);
}

