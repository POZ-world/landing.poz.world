import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';
import { FAQs } from './routes/faqs';
import { Privacy } from './routes/privacy';
import Layout from './components/layout';
import Rules from './routes/rules';
import Index from './routes/index';
import Terms from './routes/terms';

// Define the routes with Layout as the parent route
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Index />,
      },
      {
        path: 'privacy',
        element: <Privacy />,
      },
      {
        path: 'faqs',
        element: <FAQs />,
      },
      {
        path: 'rules',
        element: <Rules />,
      },
      {
        path: 'terms',
        element: <Terms />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error('Root element not found');
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();