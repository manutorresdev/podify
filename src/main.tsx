import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './views/Home.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SearchProvider from '@context/search/context'
import ErrorPage from '@views/ErrorPage'
import PodcastDetail from '@views/PodcastDetail'
import '@styles/main.css'
import { ERROR } from '@utils/constants.ts'
import EpisodeDetail from '@views/EpisodeDetail'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: 'podcast/:podcastId',
    element: <PodcastDetail />,
    errorElement: <ErrorPage />
  },
  {
    path: 'podcast/:podcastId/episode/:episodeId',
    element: <EpisodeDetail />,
    errorElement: <ErrorPage />
  },
  {
    path: '*',
    element: <ErrorPage error={ERROR.NOT_FOUND} />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SearchProvider>
      <RouterProvider router={router} />
    </SearchProvider>
  </React.StrictMode>
)
