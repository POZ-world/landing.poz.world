import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, RouteObject, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { FAQs } from './routes/faqs';
import { Privacy } from './routes/privacy';
import Layout from './components/layout';
import Rules from './routes/rules';
import About from './routes/about';
import Terms from './routes/terms';
import EditProfileFields from './routes/edit-profile-fields';
import { createRoot } from 'react-dom/client';
import ErrorHandler from './components/errorHandler';
import ScrollToTop from './components/scrollToTop';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';

// Define the routes with Layout as the parent route
const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <About />,
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
      {
        path: 'my-profile',
        element: <EditProfileFields />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

const root = createRoot(document.getElementById('root')!);
root.render( // eslint-disable-line @typescript-eslint/no-non-null-assertion
  <Provider store={store}>
    <BrowserRouter basename={pack.homepage}>
      <ErrorHandler>
        <ScrollToTop>
          <App />
        </ScrollToTop>
      </ErrorHandler>
    </BrowserRouter>
  </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals