import './WhyChooseUs.css';
import AppAction from '../../components/app-action/AppAction';
import bullet1 from "../../assets/bullet-point1.svg";
import bullet2 from "../../assets/bullet-point2.svg";
import bullet3 from "../../assets/bullet-point3.svg";
// import useCustomScroll from '../../hooks/useCustomScroll';
import { useEffect, useRef, useState } from 'react';

export default function () {
  const containerRef = useRef(null);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        setScrollLeft(containerRef.current.scrollLeft);
      }
      
    };

    const container = containerRef.current;
    container.addEventListener('scroll', handleScroll);

    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <section className="why-section-container">
    <section className="why-section">
      <section className="left">
        <h1 className="title">Why choose Zwilt?</h1>
        <p className="subtext">We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.</p>
      </section>
      <section className="right">
        <div className="items first">
          <div className="left-section">
            <h3 className="heading">Onboard without the risk.</h3>
            <ul className='sub-items'>
              <li>
                <img src={bullet1} />
                We pick the best for you to select
              </li>
              <li>
                <img src={bullet1} />
                Thousands of vetted candidates in dozens of categories
              </li>
              <li>
                <img src={bullet1} />
                Risk-free resource swapping for the best fit.
              </li>
            </ul>
            <AppAction label="Learn More" />
          </div>
        </div>
        <div className="items second">
          <div className="left-section">
            <h3 className="heading">An open book.</h3>
            <ul className='sub-items'>
              <li>
                <img src={bullet2} />
                Easy and transparent one-to-one chat with candidates.
              </li>
              <li>
                <img src={bullet2} />
                Simple and convenient payment methods.
              </li>
              <li>
                <img src={bullet2} />
                Review past ratings.
              </li>
            </ul>
            <AppAction label="Learn More" />
          </div>
        </div>
        <div className="items third">
          <div className="left-section">
            <h3 className="heading">Stay in the loop.</h3>
            <ul className='sub-items'>
              <li>
                <img src={bullet3} />
                Track your staff activity down to every minute with screenshots.
              </li>
              <li>
                <img src={bullet3} />
                Comprehensive timesheet data to process payments.
              </li>
              <li>
                <img src={bullet3} />
                Create projects to organize and assign tasks more effectively.
              </li>
            </ul>
            <AppAction label="Learn More" />
          </div>
        </div>
      </section>
    </section>

    <div className="scrollbar-container">
      <div className="scrollbar" ref={containerRef}>
        <div className="scroll" style={{ left: `${scrollLeft}px` }}></div>
      </div>
    </div>
  </section>
}