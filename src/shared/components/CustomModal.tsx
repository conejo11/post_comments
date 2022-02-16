import { FC, ReactNode } from 'react'
import { Modal, Stack } from 'react-bootstrap'

export interface CustomModalProps {
  postTitle: string
  postContent: string
  body: ReactNode
  footer?: ReactNode
  onClose: () => void
  isOpen: boolean
}

const CustomModal: FC<CustomModalProps> = (props) => {
  const {
    postTitle,
    postContent,
    body,
    footer,
    onClose,
    isOpen,
  } = props
  return (
    <Modal
      show={isOpen}
      onHide={onClose}
      size='xl'
      centered
      aria-labelledby="custom-modal-styling-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="custom-modal-styling-title">
          <Stack gap={2}>
            {postTitle}
            <p className='fs-6'>{postContent}</p>
          </Stack>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {body}
      </Modal.Body>
      <Modal.Footer>
        {footer}
      </Modal.Footer>
    </Modal>
  )
}

export default CustomModal
