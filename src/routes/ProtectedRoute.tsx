import {ReactNode} from "react";
import {Navigate} from "react-router-dom";

type ProtectedProps ={
    children?: ReactNode;
}
export const ProtectedRoute = ({children}: ProtectedProps) => {
    const logged = false
    return (
        <>
            {logged ? children : <Navigate to={'/error'}/>}
        </>

    )

}