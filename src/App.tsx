import React,{useState, useEffect} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import Home from "./pages";
import {Route, Switch} from "react-router-dom";
import About from "./pages/about";
import Portfolio from "./pages/portfolio";
import Contact from "./pages/contact";
import Dropdown from "./components/Dropdown";

function App() {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    };
    useEffect(()=>{
        const hideMenu = ()=> {
            if (window.innerWidth > 768 && isOpen) {
                setIsOpen(false);
                console.log('window resized')
            }
        };

        window.addEventListener('resize',hideMenu);

        return () => {
            window.removeEventListener('resize', hideMenu);
        };

    });
  return (
    <>
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle}/>
        <Switch>
            <Route  path='/' exact component = {Home} />
            <Route  path='/about' exact component = {About} />
            <Route  path='/portfolio' exact component = {Portfolio} />
            <Route  path='/contact' exact component = {Contact} />
        </Switch>
        <Footer />
    </>

  );
}

export default App;
