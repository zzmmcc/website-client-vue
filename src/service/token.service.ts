import axios from "axios";
import {AxiosResponse} from "../utils/AxiosResponse";
import {UserInfo} from "../interceptor/UserInfo";

export class TokenService{

  generatorToken(account: string, password: string){
    return axios.post<AxiosResponse<UserInfo>>('/api/token')
      .then(res => res.data)
      .catch(err => console.error(err))
  }
}
