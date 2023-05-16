import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  useLocation
} from "react-router-dom";
import ProductAdd from './components/Pages/ProductAdd';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "addproduct",
    element: <ProductAdd />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);
