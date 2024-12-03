import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from '../pages/Home';
import ProductPage from '../pages/Products';
import RootLayout from '../pages/RootLayout';
import ErrorPage from '../pages/Error';
import ProductDetailPage from '../pages/ProductDetail';
import EventPage, {deleteAction, eventLoader}  from '../pages/Event';
import EventDetailPage, {singleEventLoader} from '../pages/EventDetail';
import EventNewPage, {addEventAction} from '../pages/EventNew';
import EventEditPage from '../pages/EventEdit';
import RootEventLayout from '../pages/RootEventLayout';

// Create router as JS object, this will latest which work React version > 6.4
const router = createBrowserRouter(
    [
      {path: '/', element: <RootLayout/>,  errorElement: <ErrorPage/>,
      children: [
        {path: '', element: <HomePage/>}, //define as jsx element or compnent name
        {path: 'product', Component: ProductPage},
        {path: 'product/:productId', element: <ProductDetailPage />},
        {path: 'events', element: <RootEventLayout/>,
        children:[
          {index:true, element: <EventPage/>, loader: eventLoader, action: deleteAction},
          {path: ':eventId',
          id: 'event-detail', //This id will help to use same loader in detail & edit page
          loader: singleEventLoader,
          children:[
            {index: true, element: <EventDetailPage/>,},
            {path: 'edit', element: <EventEditPage/>, action: addEventAction},
          ]        
        },         
          
          {path: 'new', element: <EventNewPage/>, action: addEventAction},
        ] }
      ]},
      
    ]
);

const CustomRouter = () => {
    return (<RouterProvider router={router}/>)
}

export default CustomRouter;