import { useRoutes } from 'react-router-dom'
import NotFound from '~/pages/NotFound'

import HomeLayout from '~/layouts/HomeLayout'
import Home from '~/pages/Home'
import Privacy from '~/pages/Privacy'
import Term from '~/pages/Term'
import Socialmedia from '~/pages/Socialmedia'
import Laundering from '~/pages/Laundering'

const useRouteElements = () => {
  const routeElements = useRoutes([
    {
      path: '/',
      index: true,
      element: (
        <HomeLayout>
          <Home />
        </HomeLayout>
      )
    },
    {
      path: '/privacy',
      element: (
        <HomeLayout>
          <Privacy />
        </HomeLayout>
      )
    },
    {
      path: '/notice',
      element: (
        <HomeLayout>
          <Term />
        </HomeLayout>
      )
    },
    {
      path: '/socialmedia',
      element: (
        <HomeLayout>
          <Socialmedia />
        </HomeLayout>
      )
    },
    {
      path: '/laundering',
      element: (
        <HomeLayout>
          <Laundering />
        </HomeLayout>
      )
    },

    {
      path: '*',
      element: <NotFound />
    }
  ])

  return routeElements
}
export default useRouteElements
