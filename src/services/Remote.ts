import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import IRemoteResponse from 'interfaces/Remote';

class RemoteService {
  public async get<T = any>(url: string, params?: any, headers?: any): Promise<AxiosResponse<T>> {
    return await this.request({ url, method: 'GET', params, headers });
  }

  public async post<T = any>(url: string, data: any, headers?: any): Promise<AxiosResponse<IRemoteResponse<T>>> {
    return await this.request({ url, method: 'POST', data, headers });
  }

  public async put<T = any>(url: string, data: any, headers?: any): Promise<AxiosResponse<T>> {
    return await this.request({ url, method: 'PUT', data, headers });
  }

  public async del<T = any>(url: string, data: any, params?: any, headers?: any): Promise<AxiosResponse<T>> {
    return await this.request({ url, method: 'DELETE', data, params, headers });
  }

  public async request(options: AxiosRequestConfig): Promise<AxiosResponse<any>> {
    try {
      return await axios({
        ...options,
        ...options.params,
        headers: {
          ...options.headers,
          Accept: 'application/json'
        }
      });
    } catch (err) {
      // something goes here
      return null as any;
    }
  }
}

export default RemoteService;
