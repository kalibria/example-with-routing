import * as React from "react";
import {createRoot} from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    LoaderFunction
} from "react-router-dom";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import App, {PATH} from "../App";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Prices} from "../components/pages/Prices";
import {Model} from "../components/pages/Model";
import { modelsData} from "../data/data";



const modelLoader: LoaderFunction  = ({params}) => {
    console.log('paramsLoader', params)
    const modelId = params.id;
    const nameModel = params.model;

    if (!modelId || !nameModel) {
        throw new Response("Not Found", { status: 404 });
    }

    // Now TypeScript knows modelId is defined and valid
    const models = modelsData[nameModel];
    console.log("models", models)

    return { models };
};

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error404/>,
        children: [
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
            }
        ]
    },
    {
        path: "about",
        element: <div>About</div>,
    },
]);

