import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout';
import { getProductByID, getProductList } from './client';
import ErrorBoundary from './components/errorBoundary';
import Loading from './components/loading';
import ProductDetail from './components/productDetail';
import PageMain from './components/pageMain';

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
