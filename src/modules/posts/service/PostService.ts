import Post from '../../../domain/Post'
import { IApi } from '../../../shared/api/IApi'

export class PostService {
  baseApi: IApi<Post>

  constructor (baseApi: IApi<Post>) {
    this.baseApi = baseApi
  }

  async findAll (): Promise<Post[]> {
    const response = await this.baseApi.getAll('/posts')
    return response.data
  }
}
