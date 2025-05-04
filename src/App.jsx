import Hero from './components/Hero'
import Scheme from './components/Scheme'
import Calendar from './components/Calendar'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#1b1b1b] text-white font-sans">
      <Hero />
      <Scheme />
      <Calendar />
      <Footer />
    </div>
  )
}

export default App