import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './App.css';

//database
import Pool from './db'
//pages importing
import ContactList from './pages/ContactList';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Applying from './pages/Applying'
import{
    createBrowserRouter,
    RouterProvider,
}from "react-router-dom"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    },
    {
        path: "/Contact",
        element: <Contact/>
    },
    {
        path: "/ContactList",
        element: <ContactList />
    },
    {
        path: "/Applying",
        element : <Applying/>
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <RouterProvider router={router} />


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
