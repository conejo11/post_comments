import { FC, HTMLAttributes, PropsWithChildren } from 'react'

type PageContentProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const PageContent: FC<PageContentProps> = (props) => {
  return (
    <div {...props}></div>
  )
}

export default PageContent
