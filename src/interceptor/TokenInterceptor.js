import axios from 'axios';
import environment from '../../config/dev.env'

export default {
  name: 'TokenInterceptor'
}
axios.interceptors.request.use(config => {
  let token = localStorage.getItem("token");
  let url = config.url;
  console.log(url)
  // 统一加上服务端前缀
  // let url = request.url;
  if (!url.startsWith('https://') && !url.startsWith('http://')) {
    config.url = environment.SERVER_URL + url;
  }
  if(!token){
    config.headers({
      'Authorization': 'Bearer ' + token
    });
  }
  return config;
});


