import { FC } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Posts } from '../modules/posts/pages'

const PageRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to="/posts" />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
  )
}

export default PageRoutes
