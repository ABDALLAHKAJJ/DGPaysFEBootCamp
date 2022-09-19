import React from 'react'
import AboutSection from './AboutSection'
import ContactSection from './ContactSection'
import Navbar from './Navbar'
import PageContent from './PageContent'
import Footer from './Footer'
import "./Template.css"
function Template() {
  return (
    <>
    
    <Navbar/>
    <PageContent/>
    <AboutSection/>
    <ContactSection/>
    <Footer/>
    </>
  )
}

export default Template