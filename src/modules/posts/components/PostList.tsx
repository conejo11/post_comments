import { FC, useCallback, useContext } from 'react'
import { CustomCard, CustomModal } from '../../../shared/components'
import { useToggle } from '../../../shared/hooks'
import { Stack } from 'react-bootstrap'
import { PostsContext } from '../context/PostsContext'
import Post from '../../../domain/Post'
import { PostCommentsForm, PostCommentsList } from '.'

const PostList: FC = () => {
  const {
    posts,
    postToShow,
    setPostToShow,
  } = useContext(PostsContext)
  const {
    value: isModalOpen,
    setTrue: openModal,
    setFalse: closeModal,
  } = useToggle()

  const handleCardClick = useCallback((post: Post) => {
    setPostToShow(post)
    openModal()
  }, [])

  const handleCloseModal = useCallback(() => {
    setPostToShow(undefined)
    closeModal()
  }, [])

  return (
    <>
      <Stack gap={2}>
        {posts?.map(post => <CustomCard
          key={post.id}
          title={post.title}
          subtitle={`User: ${post.userId}`}
          body={post.body}
          onClick={() => handleCardClick(post)}
        />)}
      </Stack>
      {isModalOpen && <CustomModal
        postTitle={postToShow?.title as string}
        postContent={postToShow?.body as string}
        body={<PostCommentsList />}
        footer={<PostCommentsForm
          onClose={handleCloseModal}
        />}
        onClose={handleCloseModal}
        isOpen={isModalOpen}
      />}
    </>
  )
}

export default PostList
