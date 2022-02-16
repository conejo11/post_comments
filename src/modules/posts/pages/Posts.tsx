import { FC, useEffect, useState } from 'react'
import Post from '../../../domain/Post'
import Comment from '../../../domain/Comment'
import { AppPage } from '../../../shared/components'
import { commentService, postService } from '../service'
import { PostsContext } from '../context/PostsContext'
import { PostList } from '../components'

const Posts: FC = () => {
  const [posts, setPosts] = useState<Array<Post>>([])
  const [comments, setComments] = useState<Array<Comment>>([])
  const [postToShow, setPostToShow] = useState<Post>()
  const [isFetching, setIsFetching] = useState<boolean>()
  const [fetchError, setFetchError] = useState<boolean>(false)

  useEffect(() => {
    try {
      setIsFetching(true)
      postService.findAll().then(fetchedPosts => {
        setPosts(fetchedPosts)
      })
      commentService.findAll().then(fetchedComments => {
        setComments(fetchedComments)
      }).finally(() => {
        setIsFetching(false)
      })
    } catch (error) {
      setFetchError(true)
    }
  }, [])

  if (isFetching) return <div>Fetching Data...</div>
  if (fetchError) return <div>Error...</div>

  return <PostsContext.Provider
    value={{
      posts,
      comments,
      postToShow,
      setPostToShow,
      setComments,
    }}
  >
    <AppPage
      title='Posts'
    >
      <PostList />
    </AppPage>
  </PostsContext.Provider>
}

export default Posts
