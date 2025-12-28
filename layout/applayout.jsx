import React from 'react'
import {Header} from '../components/header.jsx'
import {Hero} from '../pages/hero.jsx'
import { About } from '../pages/about.jsx'
import { Experience } from '../pages/experience.jsx'
import { Skills } from '../pages/skill.jsx'
import { Contact } from '../pages/contact.jsx'
import {Footer} from '../components/footer.jsx'

export const  Applayout= () => {
  return (
    <div>
      <Header />
      <div style={{height:"60px"}}></div>
      <Hero/>
      <About/>
      <Experience/>
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

