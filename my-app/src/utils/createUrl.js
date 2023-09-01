import { URL, LIMIT } from "./constants";

export function createUrlWithPage(category, sort, search, page){
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

export function createUrl(category, sort, search){
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
