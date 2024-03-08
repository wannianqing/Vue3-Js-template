
export const setStorage = (key,value)=> {
  if(typeof value !== 'object'){
    sessionStorage.setItem(key,value)
  }
  if(
    Object.prototype.toString.call(value) === '[Object object]' ||
    Object.prototype.toString.call(value) === '[object Array]'
  ){
    sessionStorage.setItem(key,JSON.stringify(value))
  }
}

export const getStorage = (key)=> {
  return sessionStorage.getItem(key)
}

export const removeStorage = (key)=> {
  sessionStorage.removeItem(key)
}