import { URL, LIMIT } from "./constants";

export function createUrl(category, sort, search, page){
  let url = `${URL}?page=${page}&limit=${LIMIT}&`;
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
