import React from 'react';
import ReactDOM from 'react-dom/client';
import Landing from './pages/landing/Landing.jsx';
import Homepage from './pages/homepage/Homepage.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Landing />
    ),
  },
  {
    path: "/home",
    element: (
      <Homepage />
    )
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
