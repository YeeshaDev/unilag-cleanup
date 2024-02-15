//import { useState } from 'react'
//import { Route, Routes } from 'react-router-dom'
import './App.css'
import Community from './components/Community'
import Header from './components/Header'
import Quote from './components/Quote'
import Report from './components/Report'
import Hero from './Hero'

function App() {
 

  return (
    <>
     <Header/> 
    <Hero/>
    <Quote />
    <Community />
    <Report />
    </>
  )
}

export default App
