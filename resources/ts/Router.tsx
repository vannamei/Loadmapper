import { FC } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import DefaultLayout from './components/templates/DefaultLayout'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import LoadmapCreate from './components/pages/LoadmapCreate'
import LoadmapDetail from './components/pages/LoadmapDetail'
import Loadmaps from './components/pages/Loadmaps'
import Manage from './components/pages/Manage'
import NotFound from './components/pages/NotFound'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="new" element={<LoadmapCreate />} />
          <Route path="manage" element={<Manage />} />
          <Route path="loadmaps" element={<Loadmaps />} />
          <Route path="loadmaps/:id" element={<LoadmapDetail />} />
          {/* <Route path="post/edit/:id" element={<PostEdit />} /> */}
          {/* <Route path="users/:id" element={<UserShow />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
