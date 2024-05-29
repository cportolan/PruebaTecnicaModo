import Clients from './components/Clients'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/Services'
import Technology from './components/Technology'

export default function App() {
  return(
    <div className="App" id='home'>
      <Header />
      <Home />
      <Services />
      <Technology />
      <Clients />
      <Footer />
    </div>
  )
}