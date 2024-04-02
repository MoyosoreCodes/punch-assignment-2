import './App.css';
import AppFooter from './components/AppFooter/AppFooter';
import AppHeader from './components/AppHeader/AppHeader';
import FAQ from './sections/FAQ/FAQ';
import HeroSection from './sections/HeroSection/HeroSection';
import Testimonal from './sections/Testimonal/Testimonal';
import Services from './sections/Services/Services';

function App() {

  return (
    <>
      <div className='website-container'>
        <AppHeader />
        <HeroSection />
      </div>
      <Services /> 
      <Testimonal />
      <FAQ />
      <AppFooter />
    </>
  )
}

export default App
