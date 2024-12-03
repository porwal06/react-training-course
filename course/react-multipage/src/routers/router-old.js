import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import HomePage from '../components/Home';
import ProductPage from '../components/Products';
// Create router as jsx format which is old approach work with React version < 6.4

const routesDefination = createRoutesFromElements(
    <Route>
      <Route path='' element={<HomePage/>} />
      <Route path='/product' element={<ProductPage/>} />    
    </Route>
  );

const router = createBrowserRouter(routesDefination);

const customRouter = () => {
    return (<RouterProvider router={router}/>)
}

export default customRouter;