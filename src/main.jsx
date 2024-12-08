import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

// import App from './App.jsx';
import router from './routes/router.jsx';
import { HeaderProvider } from './context/HeaderProvider';
import './index.css';
import './reset.css';
import { CartProvider } from './context/CartContext.jsx';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 60 * 1000,
        },
    },
    // queryCache: new QueryCache({
    //   onError: handleQueryError,
    // }),
});

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <CartProvider>
                <HeaderProvider>
                    <RouterProvider router={router} />
                </HeaderProvider>
            </CartProvider>
            <Toaster
                position="top-right"
                gutter={12}
                containerStyle={{ margin: '8px' }}
                toastOptions={{
                    className: 'max-w-lg py-4 px-6 bg-white text-slate-700 text-base',
                    success: {
                        duration: 3000,
                    },
                    error: {
                        duration: 5000,
                    },
                }}
            />
        </QueryClientProvider>
    </StrictMode>,
);
