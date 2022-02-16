import { FC, useCallback, useContext, useEffect, useState } from 'react'
import { Button, FloatingLabel, Form, Stack } from 'react-bootstrap'
import { PostsContext } from '../context/PostsContext'
import Comment from '../../../domain/Comment'

export interface PostCommentsFormProps {
  onClose: () => void
}

const PostCommentsForm: FC<PostCommentsFormProps> = (props) => {
  const { onClose } = props
  const {
    comments,
    setComments,
    postToShow,
  } = useContext(PostsContext)
  const [formData, setFormData] = useState<Comment>()

  useEffect(() => {
    if (postToShow && comments?.length) {
      return setFormData({
        id: postToShow?.id,
        postId: postToShow?.id,
        name: 'My name',
        email: 'myemail@email.com',
        body: '',
      })
    }
  }, [postToShow, comments])

  const handleSave = useCallback(() => {
    if (comments && formData) {
      setComments([...comments, formData])
    }
  }, [comments, formData])

  return (
    <Stack gap={2}>
      <FloatingLabel
        controlId="floatingTextarea2"
        label="Comment"
      >
        <Form.Control
          as="textarea"
          style={{ height: '100px' }}
          onChange={e => setFormData(
            {
              ...formData as Comment,
              body: e.target.value,
            },
          )}
        />
      </FloatingLabel>
      <Stack
        direction='horizontal'
        gap={2}
      >
        <Button
          variant="secondary"
          onClick={onClose}
        >
          Close
        </Button>
        <Button
          variant="primary"
          onClick={handleSave}
        >
        Save comment
        </Button>
      </Stack>
    </Stack>
  )
}

export default PostCommentsForm
