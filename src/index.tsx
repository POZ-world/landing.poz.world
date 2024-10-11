import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider, RouteObject, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import EditProfileFields from './routes/edit-profile-fields';
import * as ReactDom from 'react-dom/client';
import ErrorHandler from './components/errorHandler';
import ScrollToTop from './components/scrollToTop';
import App from './App';
import { setUpStore } from './store';
import Bottle, { IContainer } from 'bottlejs';
import Loading from './components/loading';

const container = new Bottle();
const store = setUpStore(container as unknown as IContainer);

const reactDom = ReactDom.createRoot(document.getElementById('root') as ReactDom.Container);

reactDom.render(
  <BrowserRouter>
    <ErrorHandler>
      <ScrollToTop>
        <Suspense fallback={<Loading />}>
          <App />
        </Suspense>
      </ScrollToTop>
    </ErrorHandler>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals