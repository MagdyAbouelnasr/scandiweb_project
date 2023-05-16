import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Switch
} from "react-router-dom";
import ProductAdd from './components/Pages/ProductAdd';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

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
  <>
  <div className="transition-container">
  <TransitionGroup>
  <CSSTransition key={location.key} classNames="fade-in" timeout={300}>
    <Switch location={location}>
  <RouterProvider router={router} />
  </Switch>
  </CSSTransition>
  </TransitionGroup>
  </div>
  </>
);
