import {URL} from '../utils/url';

export default function createUrl(category, sort, search){
  let url = `${URL}?`;
  if(category){
    url = url+`category=${category}&`;
  };
  if(sort){
    url = url+`sortBy=${sort}&`
  }if(search){
    url = url+`search=${search}`
  }
  return url.slice(0,-1)
}
