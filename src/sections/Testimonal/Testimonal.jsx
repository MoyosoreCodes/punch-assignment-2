import "./Testimonal.css";
import grooveHQ from "../../assets/groovehq.svg"
import grooveHQ2 from "../../assets/groovehq2.svg"

export default function () {
  return (
    <section className="how-section-container diagonal">
      <div className="how-section">
        <div className="left">
          <div className="title">
            How it worked for Jason at
            <img src={grooveHQ} loading="lazy" />
          </div>
          <p className="subtext">
            Zwilt enabled us to deliver on time and they've been heavy hitters in our corner since.
          </p>
          <div className="actions">
            <div className="first"></div>
            <div className="second"></div>
          </div>
        </div>
        <div className="right">
          <div className="user">
            <img src={grooveHQ2} loading="lazy" />
            <div className="details">
              <p className="name">Jason Makki</p>
              <p className="position">Engineer at <span className="company">GROOVE</span></p>
              <p className="location">San Francisco</p>
            </div>
          </div>
          <p className="subtext">
            Zwilt enabled us to deliver on time and they've been heavy hitters in our corner since. Zwilt enabled us to deliver on time and they've been heavy hitters in our corner since.Zwilt enabled us to deliver on time and they've been heavy hitters.
          </p>
        </div>
      </div>
      <div className="separator">

      </div>
    </section>
  )
}