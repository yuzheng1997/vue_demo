import service from '@/utlis/httpUtils'

export default class testApi {
  getQuestion (data) {
    return service({
      method: 'get',
      url: '/choice/selectAll',
      data
    })
  }
  delQuestion (data) {
    return service({
      method: 'post',
      url: '/choice/deleteChoice',
      data
    })
  }
  updQuestion (data) {
    return service({
      method: 'post',
      url: '/choice/updateChoice',
      data
    })
  }
  exportEaxm (params) {
    return service({
      method: 'get',
      url: '/paper/generatePaper',
      params
    })
  }

  selectAllPapers (params) {
    return service({
      method: 'get',
      url: '/paper/selectAllPapers',
      params
    })
  }
  showPaper (params) {
    return service({
      method: 'get',
      url: '/paper/showPaper',
      params
    })
  }
  commit (data) {
    return service({
      method: 'post',
      url: '/paper/showPaper',
      data
    })
  }
  queryByPaper (params) {
    return service({
      method: 'get',
      url: '/paper/queryPaper',
      params
    })
  }
  fuzzyQuery (params) {
    return service({
      method: 'get',
      url: '/paper/fuzzyQuery',
      params
    })
  }
}
