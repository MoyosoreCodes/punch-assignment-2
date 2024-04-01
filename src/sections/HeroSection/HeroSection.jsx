import { useState } from "react";
import AppTabs from "../../components/AppTabs/AppTabs";
import "./HeroSection.css";

function HeroSection() {

  const [selectedTab, setSelectedTab] = useState(null);
  const ITServices = ["Python Developer", "Data Scientist", "Shopify Developer", "Shopify Developer", "Front End Developer", "Python Developer", "MERN Stack Developer", "Shopify Developer", "Full Stack Developer","Full Stack Developer", "Python Developer", "Explore More"];
  const DesignServices = ["Branding", "Email design", "Mobile Design", "Motion graphics and Animation", "Photography", "Product design", "User interface and user experience", "Websites and web-apps", "Explore More"]

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
      <div className="main">
        <p className="title">Finding the right fit has never been easier.</p>
        <p className="subtext ">With our rigorous pre-vetting process, you'll never have to worry about finding the ideal candidate ever again.</p>
        {/* AppInput here */}
      </div>
      <div className="services">
        <AppTabs options={options} onClick={(tab) => setSelectedTab(tab)} />
        <div className="content">
          {tabContent[selectedTab]}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;