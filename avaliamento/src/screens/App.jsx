import { useState } from 'react'
import '../styles/App.css'
import Header from '../components/Header'
import Section from '../components/Section'
import Galeria from '../components/Galeria'
import Footer from '../components/Footer'

function App() {
  return (
    <main>
      <Header/>
      <Section/>
      <Galeria/>
      <Footer/>
    </main>
  )
}

export default App
