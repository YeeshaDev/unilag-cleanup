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

function App() {
 

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
