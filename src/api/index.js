import request from '@/utils/request'


// 比如
export const login=(username, password) => {
  return request.post('/login',{ username, password })  
}