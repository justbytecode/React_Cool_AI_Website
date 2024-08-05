import Button from './components/Button'
import Header from './components/Header'
import './index.css'
import ButtonGradient from "./assets/svg/ButtonGradient"
import Hero from './components/Hero'
import Collaboration from "./components/Collaboration";
import Benefits from './components/Benefits'
import Services from "./components/Services";
import Pricing from './components/Pricing'
import PricingList from './components/PricingList'
import Roadmap from './components/Roadmap'
import Footer from './components/Footer'


const App = () =>  {
  return (
    <>
    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
      <Header />
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
      <Pricing />
      <PricingList />
      <Roadmap />
      <Footer />
    </div>
    <ButtonGradient />
    </>
  )
}

export default App
