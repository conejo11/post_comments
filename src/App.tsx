import { FC } from 'react'
import './App.css'
import { PageRoutes } from './routes'
import { AppBar } from './shared/components'
import { Page } from './shared/components/layout'

const App: FC = () => {
  return (
    <Page
      topBar={<AppBar/>}
      pageContent={<PageRoutes />}
    />
  )
}

export default App
