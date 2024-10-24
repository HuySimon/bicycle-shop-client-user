import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// import App from './App.jsx';
import router from './routes/router.jsx';
import { RouterProvider } from 'react-router-dom';
import { HeaderProvider } from './context/HeaderProvider';
import './index.css';
import './reset.css';

createRoot(document.getElementById('root')).render(
    // <StrictMode>
    //     <App />
    // </StrictMode>,
    <HeaderProvider>
        <RouterProvider router={router} />
    </HeaderProvider>,
);
