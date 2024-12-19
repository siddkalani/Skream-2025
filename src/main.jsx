import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux'
import Main from './components/layout/Main.jsx';
import hotelStore from './store/store.js';
import SmoothScrolling from './components/scroll/SmoothScrolling.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Solutions from './components/pages/Navigations/Solutions.jsx';
import Industries from './components/pages/Navigations/Industries.jsx';
import AboutUs from './components/pages/Navigations/AboutUs.jsx';

AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />
      },
      {
        path: "/home",
        element: <Main />
      },
      {
        path: "/solutions",
        element: <Solutions />
      },
      {
        path: "/industries",
        element: <Industries />
      },
      {
        path: "/about us",
        element: <AboutUs />
      },
      
      // {
      //   path: "/stay",
      //   element: <Stay />
      // }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SmoothScrolling>
    <Provider store={hotelStore}>
      <RouterProvider router={router} />
    </Provider>
    </SmoothScrolling>
  </React.StrictMode>,
)
