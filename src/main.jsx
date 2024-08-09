import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './pages/home/Home'
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import SignUp from './component/SignUp/SignUp.jsx';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home", element: <Home />
  },
  {
    path: "/signup", element: <SignUp/>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-right" />
  </React.StrictMode>,
)
