import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import Home from "./components/Home";
import Companies from "./components/Companies";
import EditCompany from "./components/EditCompany";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Company from "./components/Company";
import Chats from "./components/Chats";
import Chat from "./components/Chat";
import Admin from "./components/Admin";
import Info from "./components/Info";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {index: true, element: <Home/>,},
            {
                path: "/Companies",
                element: <Companies />,

            },
            {
                path: "/API",
                element: <Info />,

            },
            {
                path: "/Chat",
                element: <Chat />,

            },
            {
                path: "/Chats",
                element: <Chats />,

            },
            {
                path: "/Companies/:id",
                element: <Company />,

            },
            {
                path: "/admin/company/0",
                element: <EditCompany />,

            },
            {
                path: "/Login",
                element: <Login />,

            },
            {
                path: "/Signup",
                element: <SignUp />,

            },
            {
                path: "/Admin",
                element: <Admin />,

            },
        ]
    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


