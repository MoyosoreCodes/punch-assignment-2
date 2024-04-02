import './App.css';
import AppFooter from './components/AppFooter/AppFooter';
import AppHeader from './components/AppHeader/AppHeader';
import FAQ from './sections/FAQ/FAQ';
import HeroSection from './sections/HeroSection/HeroSection';

function App() {

  return (
    <>
      <div className='website-container'>
        <AppHeader />
        <HeroSection />
      </div>
      <FAQ />
      <AppFooter />
    </>
  )
}

export default App
