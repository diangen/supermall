import { request } from './request'

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export class GoodsInfo {
  constructor(itemInfor, columns, services) {
    this.title = itemInfor.title
    this.desc = itemInfor.desc
    this.newPrice = itemInfor.price
    this.oldPrice = itemInfor.oldPrice
    this.discount = itemInfor.discount
    this.columns = columns
    this.services = services
    this.realPrice = itemInfor.lowNowPrice
  }
}
export class GoodParam {
  constructor(info, rule) {
    this.image = info.images ? info.images[0] : "";
    this.infos = info.set;
    this.sizes = rule.tables;
  }
}