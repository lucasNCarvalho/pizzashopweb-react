import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/App'
import { AuthLayout } from './pages/_layouts/Auth'
import { DashBoard } from './pages/app/Dashboard'
import { Orders } from './pages/app/orders/Oders'
import { SignIn } from './pages/auth/Sign-in'
import { SignUp } from './pages/auth/Sign-up'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      { path: '/', element: <DashBoard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },

  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/sign-in', element: <SignIn /> },
      { path: '/sign-up', element: <SignUp /> },
    ],
  },
  // { path: '/', element: <DashBoard /> },
  // { path: '/sign-in', element: <SignIn /> },
])
