import {request} from './request'

export function getHomeMultidata(){
  return request({
    rul:'/home/multidata'
  })
}