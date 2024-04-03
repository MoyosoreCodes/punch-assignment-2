import AppAction from '../../components/app-action/AppAction';
import './WhyChooseUs.css';
import bullet1 from "../../assets/bullet-point1.svg";
import bullet2 from "../../assets/bullet-point2.svg";
import bullet3 from "../../assets/bullet-point3.svg";

export default function () {
  return <section className="why-section">
    <div className="left">
      <div className="title">Why choose Zwilt?</div>
      <div className="subtext">We take complex hiring processes - and simplify them. Connecting you to the world’s highly qualified talent pool.</div>
    </div>
    <div className="right">
      <div className="items first">
        <div className="left-section">
          <p className="heading">Onboard without the risk.</p>
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
          <p className="heading">An open book.</p>
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
          <p className="heading">Stay in the loop.</p>
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
    </div>
  </section>
}