import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <App />
            <ToastContainer />
        </HashRouter>
    </StrictMode>,
);
