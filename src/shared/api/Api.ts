import axios, { AxiosInstance } from 'axios'
import { IApi, Response } from './IApi'
import { omitBy } from 'lodash-es'

export class Api<Q> implements IApi<Q> {
  axios: AxiosInstance
  constructor (apiBase = '') {
    const timeout = 0
    this.axios = axios.create({
      baseURL: apiBase,
      timeout,
      withCredentials: true,
    })
  }

  getAll (url: string, data?: Record<string, unknown>): Promise<Response<Q[]>> {
    const params = omitBy(data, (param: unknown) => {
      return param === null && param === undefined && param === ''
    })
    return this.axios.get(url, { params })
  }
}
