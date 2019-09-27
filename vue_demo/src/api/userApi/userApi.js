import service from '@/utlis/httpUtils'

export default class userApi {
  login (data) {
    return service({
      method: 'post',
      url: 'user/login',
      data
    })
  }
  tLogin (data) {
    return service({
      method: 'post',
      url: 'teacher/login',
      data
    })
  }
}
