export interface Response<T> {
  headers: T
  status: number
  data: T
}

export interface IApi<Q> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getAll(url: string, data?: Record<string, any>): Promise<Response<Q[]>>
}
