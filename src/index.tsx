import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import './index.css';
import { MenuBar, Loader } from './components';
import { Provider } from 'react-redux';
import store from './redux/store';
import { ToastContainer } from 'react-toastify';

const LadyShoppingCart = React.lazy(() => import('./components/ShoppingCart'));

const LazyApp = React.lazy(() => import('./App'));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ToastContainer />
        <MenuBar />
        <div className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <React.Suspense fallback={<Loader />}>
                  <LazyApp />
                </React.Suspense>
              }
            ></Route>
            <Route
              path="/car"
              element={
                <React.Suspense fallback={<Loader />}>
                  <LadyShoppingCart />
                </React.Suspense>
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
