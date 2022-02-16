import { createContext, Dispatch, SetStateAction } from 'react'
import Post from '../../../domain/Post'
import Comment from '../../../domain/Comment'

interface PostsState {
  posts?: Array<Post>
  comments?: Array<Comment>
  setComments: Dispatch<SetStateAction<Comment[]>>
  postToShow?: Post
  setPostToShow: Dispatch<SetStateAction<Post | undefined>>
}

export const PostsContext = createContext<PostsState>({
  setComments: () => {},
  setPostToShow: () => {},
})
