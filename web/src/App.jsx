import Header from './header/Header.jsx'
import Hero from './hero/Hero.jsx'
import Ad from './ad/Ad.jsx'
import About from './about/About.jsx'
import Projects from './projects/Projects.jsx'
import Footer from './footer/Footer.jsx'

import mainClass from './app.module.css'


function App() {

  return (
    <>
      <Header />
      <main className={mainClass.main}>
        <Hero />
        <Ad />
        <About />
        <Projects />
        <Footer />
      </main>
    </>
  )
}

export default App
