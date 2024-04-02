import './App.css';
import AppFooter from './components/app-footer/AppFooter';
import AppHeader from './components/app-header/AppHeader';
import FAQ from './sections/faq/FAQ';
import HeroSection from './sections/hero-section/HeroSection';
import Testimonal from './sections/testimonial/Testimonal';
import Services from './sections/services/Services';
import OurProcess from './sections/our-process/OurProcess';
import JoinNow from './sections/join-now/JoinNow';

function App() {
  return (
    <>
      <div className='website-container'>
        <AppHeader />
        <HeroSection />
      </div>
      <Services /> 
      <Testimonal />
      <OurProcess />
      <JoinNow />
      <FAQ />
      <AppFooter />
    </>
  )
}

export default App
