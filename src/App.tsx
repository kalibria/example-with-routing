import React from 'react';
import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import {S} from '../src/components/pages/_styles';
import {Model} from "./components/pages/Model";
import {abibasArr, adidasArr, pumaArr} from "./data/data";

export const PATH = {
    INITPATH:'/',
    ADIDAS: '/adidas',
    PUMA:'/puma',
    ABIBAS:'/abibas',
    // MODEL:'/model',
    ADIDAS_MODEL: '/adidas/:id',
    PUMA_MODEL: '/puma/:id',
    ABIBAS_MODEL: '/abibas/:id'
} as const

function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.ADIDAS}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PUMA}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.ABIBAS}>Abibas</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <Routes>
                        <Route path={PATH.INITPATH} element={<Navigate to={PATH.ADIDAS}/>}/>
                        <Route path={PATH.ADIDAS} element={<Adidas/>}/>
                        <Route path={PATH.PUMA} element={<Puma/>}/>
                        <Route path={PATH.ABIBAS} element={<Abibas/>}/>

                        <Route path={'/error404'} element={<Error404/>}/>
                        <Route path={'/*'} element={<Navigate to={'/error404'}/>} />

                        <Route path={PATH.ADIDAS_MODEL} element={<Model models={adidasArr}/>}/>

                        <Route path={PATH.PUMA_MODEL} element={<Model models={pumaArr}/>}/>
                        <Route path={PATH.ABIBAS_MODEL} element={<Model models={abibasArr}/>}/>
                    </Routes>

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}



export default App;

