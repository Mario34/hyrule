import { createBrowserRouter } from 'react-router-dom'
import { Layout } from '@/layout'
import Status from '@/pages/base/status'
import Home from '@/pages/home'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      {
        path: '',
        Component: Home,
      },
      {
        path: '/status',
        Component: Status,
      },
      {
        path: '/p/:code',
        Component: Status,
      },
    ],
  },
])
