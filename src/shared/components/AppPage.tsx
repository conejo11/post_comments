import { FC } from 'react'
import { Stack } from 'react-bootstrap'
import { PageTitle } from '.'

interface AppPageProps {
  title?: string
}

const AppPage: FC<AppPageProps> = (props) => {
  const {
    title,
    children,
  } = props

  return (
    <div className='container'>
      <Stack>
        <Stack
          direction="horizontal"
        >
          <PageTitle>{title}</PageTitle>
        </Stack>
        {children}
      </Stack>
    </div>
  )
}

export default AppPage
