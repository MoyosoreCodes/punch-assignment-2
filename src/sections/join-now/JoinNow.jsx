import AppAction from '../../components/app-action/AppAction'
import './JoinNow.css'
import one from "../../assets/1.svg"
import two from "../../assets/2.svg"
import three from "../../assets/3.svg"

export default function () {
  return <section className="join-container">
    <p className="title">
      Start your journey today
    </p>

    <div className="items">
      <div className="step1 diagonal">
        <div className="count">
          <img src={one} />
        </div>
        <div className="content">
          <div className="heading">Find your next star performer.</div>
          <div className="subtext">Explore the vast Zwilt marketplace to find the candidate that meets your needs.</div>
          <div className="action">
            <AppAction label={"Join Now"} />
          </div>
        </div>
      </div>
      <div className="step2 diagonal">
        <div className="count">
          <img src={two} />
        </div>
        <div className="content">
          <div className="heading">Evaluate to your heart's content.</div>
          <div className="subtext">Assess the candidate through work history, transparent tests and video interviews.</div>
          <div className="action">
            <AppAction label={"Browse More"} />
          </div>
        </div>
      </div>
      <div className="step3 diagonal">
        <div className="count">
          <img src={three} />
        </div>
        <div className="content">
          <div className="heading">Evaluate to your heart's content.</div>
          <div className="subtext">Assess the candidate through work history, transparent tests and video interviews.</div>
          <div className="action">
            <AppAction label={"Join Now"} />
          </div>
        </div>
      </div>
    </div>
  </section>
}