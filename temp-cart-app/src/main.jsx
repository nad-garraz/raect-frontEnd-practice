import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Components/App';
import './index.css';
import { AppProvider } from './utils/context';

ReactDOM.createRoot(document.getElementById('root')).render(
    <AppProvider>
      <App />
    </AppProvider>
);
