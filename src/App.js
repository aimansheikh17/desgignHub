import React from 'react'

import NavbarPage from './components/NavbarPage'
import HomePage from './components/HomePage'

import Services from './components/Services'

 

import Contact from './components/Contact'
import Footer from './components/Footer'
import SolutionsSection from './components/Solution'
import AboutUs from './components/AboutUs'
import OurWorks from './components/OurWorks'
import VisionSection from './components/VisionSection'
import WhyChooseUs from './components/WhyChooseUs'



export default function App() {
  return (
    <div>
      <NavbarPage/>
      <HomePage/>
      <AboutUs/>
      <Services/>
      <SolutionsSection/>
       <OurWorks/>
       <VisionSection/>
      <Contact/>
      <WhyChooseUs/>
      <Footer/>
    </div>
  )
}

