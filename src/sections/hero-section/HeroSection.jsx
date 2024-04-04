import { useState } from "react";
import AppTabs from "../../components/app-tabs/AppTabs";
import "./HeroSection.css";
import jason from '../../assets/jason.svg'
import purple from '../../assets/purple.svg'
import heroInput from '../../assets/hero-input.svg';

function HeroSection() {

  const [selectedTab, setSelectedTab] = useState(null);
  const ITServices = ["Python Developer", "Data Scientist", "Shopify Developer", "Shopify Developer", "Front End Developer", "Python Developer", "MERN Stack Developer", "Shopify Developer", "Full Stack Developer", "Full Stack Developer", "Python Developer", "Explore More"];
  const DesignServices = ["Branding", "Email design", "Mobile Design", "Photography", "Email design", "Unreal Engine", "Illustration Artist", "Photography", "Product design", "Unreal Engine", "Websites and web-apps", "Explore More"]

  const options = ["IT & Development", "Design and Creative"];
  const tabContent = {
    "Design and Creative": <>
      {DesignServices?.map((option, index) => (
        <p key={index} > {option}</p>
      ))
      }
    </>,
    "IT & Development": <>
      {ITServices?.map((option, index) => (
        <p key={index} > {option}</p>
      ))
      }
    </>
  }

  return (
    <section className="hero-section">
      <section className="main">
        <h1 className="title">Finding the right fit{' '}
          <div className="image-slider">
            <img src={purple} alt="purple" />
            <img src={jason} alt="jason" />
            <img src="" alt="yellow" />
          </div>
          {" "}has never been easier.</h1>
        <p className="subtext">With our rigorous pre-vetting process, you'll never have to worry about finding the ideal candidate ever again.</p>
        <div className="heroInput-container">
          <input type="text" name="heroInput" id="heroInput" placeholder='design |' />
          <div type='button'>
            <img src={heroInput} alt="Input button" />
          </div>
        </div>
      </section>
      <section className="services">
        <AppTabs options={options} onClick={(tab) => setSelectedTab(tab)} />
        <div className="content">
          {tabContent[selectedTab]}
        </div>
      </section>
    </section>
  );
}

export default HeroSection;