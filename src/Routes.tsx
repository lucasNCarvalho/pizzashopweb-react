import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/App'
import { AuthLayout } from './pages/_layouts/Auth'
import { DashBoard } from './pages/app/Dashboard'
import { SignIn } from './pages/auth/Sign-in'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [{ path: '/', element: <DashBoard /> }],
  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: '/sign-in', element: <SignIn /> }],
  },
  // { path: '/', element: <DashBoard /> },
  // { path: '/sign-in', element: <SignIn /> },
])
