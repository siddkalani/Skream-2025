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
import Solutions from './components/pages/Navigations/Rules.jsx';
import Industries from './components/pages/Navigations/Events.jsx';
import AboutUs from './components/pages/Navigations/AboutUs.jsx';
import Rules from './components/pages/Navigations/Rules.jsx';
import Events from './components/pages/Navigations/Events.jsx';

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
        path: "/rules",
        element: <Rules />
      },
      {
        path: "/events",
        element: <Events />
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
