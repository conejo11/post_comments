import Post from '../../../domain/Post'
import Comment from '../../../domain/Comment'
import { Api } from '../../../shared/api/Api'
import { CommentService } from './CommentService'
import { PostService } from './PostService'

const postBaseApi = new Api<Post>(import.meta.env.M_API_BASE as string)
export const postService = new PostService(postBaseApi)

const commentBaseApi = new Api<Comment>(import.meta.env.M_API_BASE as string)
export const commentService = new CommentService(commentBaseApi)
