import fetch from 'dva/fetch';
import {getCookie} from './cookie'
import {login} from './andohistoy'

function parseJSON(response) {
  // let token = getCookie('token');
  // if(token!="undefined" && token!=null && token!='null' && token!=undefined && token!="") {
  //   response.headers.token = token
  //   console.log('token222',token)
  // } else {
  //   login()
  // }
  // response.headers.token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjEiLCJleHAiOjE2MDE2MDQ2MDN9.ifSBbRKyHjZK5Dv5QUJP5tkzZTgy4Z48JrYRYwewc9k';
  
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

const parseQuery = (obj) => {
  let str = ''
  for (let key in obj) {
    const value = typeof obj[key] !== 'string' ? JSON.stringify(obj[key]) : obj[key]
    str += '&' + key + '=' + value
  }
  return str.substr(1)
}

const request = (url, method = 'get', data) => {
  let token = getCookie('token');
  if(token=="undefined" && token==null && token=='null' && token==undefined) {
    login()
  }
  const options = {
    method: method,   // HTTP请求方法，默认为GET
    headers: {        // HTTP的请求头，默认为{}
      'Content-Type': 'application/json',
      'token':token
      // 'token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMjEiLCJleHAiOjE2MDE2MDQ2MDN9.ifSBbRKyHjZK5Dv5QUJP5tkzZTgy4Z48JrYRYwewc9k'
    },
    credentials: 'include' // 是否携带cookie，默认为omit,不携带; same-origi,同源携带; include,同源跨域都携带
  }
  if (method === 'get') {
    let w = "?";
    if(!data) w = "";

    url += w + parseQuery(data)
  } else {
    options.body = JSON.stringify(data)
  }
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
/* export default function request(url, options) {
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
} */

export default {
  get (url, data) {
    return request(url, 'get', data)
  },
  post (url, data) {
    return request(url, 'post', data)
  }
}
