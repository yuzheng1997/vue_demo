import service from '@/utils/httpUtils'

export default class apiBase {
  /**
   * 构造函数
   * @param {String} subSys 子系统英文名（小写）
   * @param {String} module 模块英文名（小写）
   */
  constructor (subSys, module) {
    this.subSys = subSys
    this.module = module
  }
  getList (params) {
    let $this = this
    return service({
      method: 'get',
      url: `${$this.subSys}/${$this.module}/list`,
      params
    })
  }
}
