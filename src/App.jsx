//import { useState } from 'react'
//import { Route, Routes } from 'react-router-dom'
import './App.css'
import Community from './components/Community'
import Footer from './components/Footer'
import Header from './components/Header'
import Quote from './components/Quote'
import Report from './components/Report'
import Reviews from './components/Reviews'
import Work from './components/Work'
import Hero from './components/Hero'
import { useEffect } from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
 
  useEffect(() => {
    Aos.init({
         duration: 800,
         once: false,
       })
 }, [])

  return (
    <>
     <Header/> 
    <Hero/>
    <Quote />
    <Community />
    <Report />
    <Reviews />
    <Work />
    <Footer/>
    </>
  )
}

export default App
