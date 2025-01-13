import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './context/AuthContext';
import PagesLoading from './components/molecules/PagesLoading';
const App = lazy(() => import('./App'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Suspense fallback={<PagesLoading showTitle />}>
          <App />
        </Suspense>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
