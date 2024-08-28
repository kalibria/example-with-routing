import * as React from "react";
import {
    createBrowserRouter,
    LoaderFunction, Navigate, Outlet
} from "react-router-dom";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import App from "../App";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Prices} from "../components/pages/Prices";
import {Model} from "../components/pages/Model";
import {modelsData} from "../data/data";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {ProtectedRoute} from "./ProtectedRoute";
import {LoginPage} from "../components/pages/LoginPage";



export const PATH = {
    INITPATH:'/',
    ADIDAS: '/adidas',
    PUMA:'/puma',
    ABIBAS:'/abibas',
    ADIDAS_MODEL: '/adidas/:id',
    PUMA_MODEL: '/puma/:id',
    ABIBAS_MODEL: '/abibas/:id',
    PRICES: '/prices',
    MODEL: '/:model/:id',
    PROTECTED_PAGE: '/protected-page',
    ERROR404: '/error404',
    LOGIN: '/login',
} as const

const modelLoader: LoaderFunction = ({params}) => {
    console.log('paramsLoader', params)
    const modelId = params.id;
    const nameModel = params.model;

    if (!modelId || !nameModel) {
        throw new Response("Not Found", {status: 404});
    }

    // Now TypeScript knows modelId is defined and valid
    const models = modelsData[nameModel];

    return {models};
};

const publicRoutes = [
    {
        path: PATH.ADIDAS,
        element: <Adidas/>,
    },
    {
        path: PATH.PUMA,
        element: <Puma/>,
    },
    {
        path: PATH.ABIBAS,
        element: <Abibas/>,
    },
    {
        path: PATH.PRICES,
        element: <Prices/>,
    },
    {
        path: PATH.MODEL,
        element: <Model/>,
        loader: modelLoader,
    },
    {
        path: PATH.ERROR404,
        element: <Error404/>,
    },
    {
        path: PATH.LOGIN,
        element: <LoginPage/>,
    }
]

const privateRoutes = [
    {
        path: PATH.PROTECTED_PAGE,
        element: <ProtectedRoute>
            <ProtectedPage/>
        </ProtectedRoute>
    },
]



export const PrivateRoutes = () =>{
 const isAuth = true;
 return isAuth ? <Outlet/> : <Navigate to={'/error'}/>
}

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Navigate to={PATH.ERROR404 }/>,
        children: [
            {element: <PrivateRoutes/>,
            children: privateRoutes
            },
            ...publicRoutes
        ]
    },
    {
        path: "about",
        element: <div>About</div>,
    },
]);

