import './App.css';
import AppFooter from './components/app-footer/AppFooter';
import AppHeader from './components/app-header/AppHeader';
import FAQ from './sections/FAQ/FAQ';
import HeroSection from './sections/HeroSection/HeroSection';
import Testimonal from './sections/Testimonial/Testimonal';
import Services from './sections/Services/Services';
import OurProcess from './sections/OurProcess/OurProcess';
import JoinNow from './sections/JoinNow/JoinNow';
import WhyChooseUs from './sections/WhyChooseUs/WhyChooseUs';

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
