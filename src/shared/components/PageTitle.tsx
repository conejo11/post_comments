import { FC } from 'react'

const PageTitle: FC = ({ children }) => {
  return (
    <p className="fs-1">
      {children}
    </p>
  )
}

export default PageTitle
