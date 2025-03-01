import React from 'react'

import NavbarPage from './components/NavbarPage'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import Services from './components/Services'
import Solution from './components/Solution'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'


export default function App() {
  return (
    <div>
      <NavbarPage/>
      <HomePage/>
      <AboutPage/>
      <Services/>
      <Solution/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

