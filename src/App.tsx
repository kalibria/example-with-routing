import React from 'react';
import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {S} from '../src/components/pages/_styles';
import {Model} from "./components/pages/Model";

export const PATH = {
    INITPATH:'/',
    PAGE1: '/adidas',
    PAGE2:'/puma',
    PAGE3:'/abibas',
    // MODEL:'/model'
} as const

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.PAGE1}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE2}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PAGE3}>Abibas</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={PATH.INITPATH} element={<Navigate to={'/page1'}/>}/>
                        <Route path={PATH.PAGE1} element={<Adidas/>}>
                            {/*<Route path={':id'} element={<Model/>}/>*/}
                        </Route>
                        <Route path={PATH.PAGE2} element={<Puma/>}/>
                        <Route path={PATH.PAGE3} element={<Abibas/>}/>

                        <Route path={'/error404'} element={<Error404/>}/>
                        <Route path={'/*'} element={<Navigate to={'/error404'}/>} />
                        <Route path={'/adidas/:id'} element={<Model/>}/>
                    </Routes>

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}



export default App;

