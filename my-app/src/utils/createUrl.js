import {URL} from '../utils/url';

export default function createUrl(category, sort){
  let url = `${URL}?`;
  if(category){
    url = url+`category=${category}&`;
  };
  if(sort){
    url = url+`sortBy=${sort}&`
  }
  return url.slice(0,-1)
}
