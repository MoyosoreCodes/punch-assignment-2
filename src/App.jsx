import './App.css';
import AppFooter from './components/app-footer/AppFooter';
import AppHeader from './components/app-header/AppHeader';
import FAQ from './sections/FAQ';
import HeroSection from './sections/hero-section';
import Testimonal from './sections/Testimonial';
import Services from './sections/Services';
import OurProcess from './sections/our-process';
import JoinNow from './sections/join-now';
import WhyChooseUs from './sections/why-choose-us/WhyChooseUs';

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
      <WhyChooseUs />
      <FAQ />
      <AppFooter />
    </>
  )
}

export default App
