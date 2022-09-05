import React from "react";
import { Route, Routes, Link, useLocation } from "react-router-dom";

const Home = () => <div>Esta es la página Inicio</div>
const About = () => <div>Esta es la página Nosotros</div>
const Footer = () => <div>Esta es la sección Pié de Página</div>

const Navigator = () => {
    return (
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
    </ul>
    );
}

const Content = () => {

    const location = useLocation()

    return (
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
        </Routes>
    )
}

const BaseLayout = () => {
    // Deberá renderizar los componentes en conjunto.
    return (
        <div>
            <Navigator />
            <Content />
            <Footer />
        </div>
    );
}

export { BaseLayout, Navigator }