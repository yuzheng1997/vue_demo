import UserApi from './userApi/userApi.js'
import TestApi from './userApi/testApi.js'
const userApi = new UserApi()
const testApi = new TestApi()
export default{
  userApi,
  testApi
}
