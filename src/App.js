import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './component/layout';
import { getProductByID, getProductList } from './client';
import ErrorBoundary from './component/errorBoundary';
import Loading from './component/loading';
import ProductDetail from './component/productDetail';
import PageMain from './component/pageMain';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "/",
          element: <PageMain />,
          loader: async () => getProductList(),
        },
        {
          path: "/product/:id",
          element: <ProductDetail />,
          loader: async ({ params }) => getProductByID(params.id),
        },
      ]
    },

  ]);

  return (<RouterProvider router={router} fallbackElement={<Loading />}  />)
}

export default App;
