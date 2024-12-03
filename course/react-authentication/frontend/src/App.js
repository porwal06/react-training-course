import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import EventDetailPage, {
  loader as eventDetailLoader,
  action as deleteEventAction,
} from './pages/EventDetail';
//import EventsPage, { loader as eventsLoader } from './pages/Events';
//import EventsRootLayout from './pages/EventsRoot';
import HomePage from './pages/Home';
import NewEventPage from './pages/NewEvent';
import RootLayout from './pages/Root';
import { action as manipulateEventAction } from './components/EventForm';
import NewsletterPage, { action as newsletterAction } from './pages/Newsletter';
import Authenticaion, {action as authAction} from './pages/Authentication';
import { action as logoutAction } from './pages/Logout';
import { checkLoader, tokenLoader } from './util/auth';
import { Suspense, lazy } from 'react';

const EventsPage = lazy(() => import('./pages/Events'));
const EventsRootLayout = lazy(() => import('./pages/EventsRoot'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    id: 'root', // Using this id we can access loader data
    loader: tokenLoader,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <Suspense fallback={<p>Loading...</p>}><EventsRootLayout /></Suspense>,
        children: [
          {
            index: true,
            element: <Suspense fallback={<p>Loading...</p>}><EventsPage /></Suspense>,
            loader: () => import('./pages/Events').then((module) => module.loader()),
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetailPage />,
                action: deleteEventAction,
              },
              {
                path: 'edit',
                element: <EditEventPage />,
                action: manipulateEventAction,
                loader: checkLoader, //Prevent accessing without login
              },
            ],
          },
          {
            path: 'new',
            element: <NewEventPage />,
            action: manipulateEventAction,
            loader: checkLoader,
          },
        ],
      },
      {
        path: 'auth',
        element: <Authenticaion/>,
        action: authAction,
      },
      {
        path: 'newsletter',
        element: <NewsletterPage />,
        action: newsletterAction,
      },
      {
        path: 'logout',
        action: logoutAction
      }
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
