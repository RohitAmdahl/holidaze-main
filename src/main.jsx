import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from './auth/context/Context.jsx';
import VenueDataProvider from './api/accommodation/Context/DataContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <VenueDataProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </VenueDataProvider>
    </AuthProvider>
  </React.StrictMode>
);
