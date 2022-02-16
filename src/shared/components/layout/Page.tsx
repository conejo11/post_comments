import { FC, HTMLAttributes, ReactElement } from 'react'
import { PageContent, TopBar } from './index'
import './Page.css'

type PageProps = HTMLAttributes<HTMLDivElement> & {
  pageContent: ReactElement
  topBar: ReactElement
}

const Page: FC<PageProps> = (parts) => {
  return (
    <div className='Main-grid'>
      <TopBar className='Top-bar'>
        {parts.topBar}
      </TopBar>
      <PageContent className='Page-content'>
        {parts.pageContent}
      </PageContent>
    </div>
  )
}

export default Page
