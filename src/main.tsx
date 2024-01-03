import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Pokes from './Pokes.tsx';
import Ability from './Ability.tsx';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Fight from './Fight.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Pokes />,
  },
  {
    path: "/pokes",
    element: <Pokes />,
  },
  {
    path: "/fight",
    element: <Fight />,
  },
  {
    path: "/pokes/ability",
    element: <Ability />,
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider  
      router={router}
      fallbackElement={<div>ddd</div>}
     />
  </React.StrictMode>,
)
