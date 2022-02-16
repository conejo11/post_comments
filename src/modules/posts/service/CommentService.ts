import { IApi } from '../../../shared/api/IApi'
import Comment from '../../../domain/Comment'

export class CommentService {
  baseApi: IApi<Comment>

  constructor (baseApi: IApi<Comment>) {
    this.baseApi = baseApi
  }

  async findAll (): Promise<Comment[]> {
    const response = await this.baseApi.getAll('/comments')
    return response.data
  }
}
