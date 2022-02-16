import { FC, PropsWithChildren } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

const AppProvider: FC<PropsWithChildren<Record<never, never>>> = ({ children }) => {
  return (
    <Router>
      {children}
    </Router>
  )
}

export { AppProvider }
