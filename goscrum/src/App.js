import {Route, Routes, Navigate, useLocation} from 'react-router-dom'

import './App.css';
import { Tasks } from './components/views/Tasks/Tasks';
import { Login } from './components/views/auth/Login/Login';
import { Register } from './components/views/auth/Register/Register';
import { AnimatePresence, motion } from 'framer-motion';
import { lazy, Suspense } from 'react';

const Error404 = lazy(() => import("./components/views/Error404/Error404"))


const RequiredAuth = ({ children }) => {

    if (!localStorage.getItem("logged")) {
        return <Navigate to="/login" replace={true}/>
    }

    return children
}

const PageTransition = {
    in: {
        opacity: 1,
    },
    out: {
        opacity: 0,
    }
}

export const App = () => {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route
                    path='/'
                    element={
                        <RequiredAuth>
                            <motion.div
                                className='page'
                                initial="out"
                                animate="in"
                                exit="out" 
                                variants={PageTransition}
                            >
                                <Tasks />
                            </motion.div> 
                        </RequiredAuth>
                    }
                    />
                <Route
                    path='/login'
                    element={
                        <motion.div
                            className='page'
                            initial="out"
                            animate="in"
                            exit="out" 
                            variants={PageTransition}
                        >
                            <Login />
                        </motion.div> } />
                <Route
                    path='/*'
                    element={
                        <motion.div
                            className='page'
                            initial="out"
                            animate="in"
                            exit="out" 
                            variants={PageTransition}
                        >   
                            <Suspense fallback={<>...</>}>
                                <Error404 />
                            </Suspense>
                        </motion.div> } />
                <Route
                    path='/register'
                    element={
                        <motion.div
                            className='page'
                            initial="out"
                            animate="in"
                            exit="out" 
                            variants={PageTransition}
                        >
                            <Register />
                        </motion.div> } />
            </Routes>
        </AnimatePresence>
    )
};

