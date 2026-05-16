import React from 'react'
import Hero from './components/Hero'
import Details from './components/Details'
import Teacher from './components/Teacher'
import Gallery from './components/Gallery'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 selection:bg-neon-blue selection:text-black">
      {/* Background decoration */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-neon-blue/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-neon-purple/10 blur-[120px]" />
      </div>

      <main className="relative z-10">
        <Hero />
        <Details />
        <Teacher />
        <Gallery />
      </main>

      <footer className="py-12 text-center text-slate-500 border-t border-slate-900 glass mt-20">
        <p className="text-sm">© 2026 Ախուրյանի թիվ 1 հիմնական դպրոց • 9Բ Դասարան</p>
      </footer>
    </div>
  )
}

export default App
