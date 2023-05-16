import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Switch,
  useLocation
} from "react-router-dom";
import ProductAdd from './components/Pages/ProductAdd';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useEffect } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/addproduct",
    element: <ProductAdd />,
  },
]);

const Root = () => {
  const location = useLocation();
  return (
    <>
      <div className="transition-container">
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade-in" timeout={300}>
            <Routes location={location}>
              {router}
            </Routes>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}>
    <Routes>
      <Route element={<Root />} />
    </Routes>
  </RouterProvider>
);