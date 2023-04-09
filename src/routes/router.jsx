import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from '../pages/Homepage';
import AppartementPage from '../pages/AppartementPage';
import Footer from '../layout/Footer';
import Navbar from '../components/Navbar';
import About from '../pages/About';
import ErrorPage from '../pages/ErrrorPage';

const router = createBrowserRouter([

{ path: '/',
element: <Homepage />,
errorElement:(
<>
<Navbar />
<ErrorPage/>
</>
),},

{ path: '/flat/:id',
element: (
<>
<Navbar />
<AppartementPage/>
<Footer />
</>
),},

{ path: '/about',
element: (
<>
<Navbar />
<About/>
<Footer />
</>
),},

]);

createRoot(document.getElementById('root')).render(
<React.StrictMode>
<RouterProvider router={router} />
</React.StrictMode>
);
