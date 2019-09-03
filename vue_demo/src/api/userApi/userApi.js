import service from '@/utlis/httpUtils'

export default class userApi {
  login (data) {
    return service({
      method: 'get',
      url: 'user/login',
      data
    })
  }
}
