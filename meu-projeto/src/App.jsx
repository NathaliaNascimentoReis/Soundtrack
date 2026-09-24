import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Catalog from './components/Catalog'
import Formulario from './components/Formulario' // <--- Importe aqui

function App() {
  return (
      <div className="min-h-screen bg-slate-50 font-sans">
        <Header />
        <main>
          <Hero />
          <Catalog />
          <Formulario /> {/* <--- Adicionado na Home */}
        </main>
        <Footer />
      </div>
  )
}

export default App