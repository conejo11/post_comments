import { FC, useContext, useMemo } from 'react'
import { CustomCard } from '../../../shared/components'
import { Stack } from 'react-bootstrap'
import { PostsContext } from '../context/PostsContext'

const PostCommentsList: FC = () => {
  const {
    comments,
    postToShow,
  } = useContext(PostsContext)

  const filteredComments = useMemo(() => {
    return comments?.filter(comment => postToShow?.id === comment.postId)
  }, [postToShow, comments])

  return (
    <>
      <Stack gap={2}>
        <p className="fs-2">Comments</p>
        {filteredComments && filteredComments?.map(comment => <CustomCard
          key={comment.id}
          title={comment.name}
          subtitle={comment.email}
          body={comment.body}
        />)}
      </Stack>
    </>
  )
}

export default PostCommentsList
