import "./Testimonal.css";
import grooveHQ from "../../assets/groovehq.svg"
import grooveHQ2 from "../../assets/groovehq2.svg"
import testimonalIcons from "../../assets/testimonial-icons.svg"
import jason from "../../assets/jason.svg"

export default function () {
  return (
    <section className="testimonial-section-container diagonal">
      <div className="testimonial-section">
        <div className="left">
          <div className="title">
            How it worked for Jason <img src={jason} className="user-profile" /> at
            <img src={grooveHQ} loading="lazy" className="user-profile" />
          </div>
          <p className="subtext">
            Zwilt enabled us to deliver on time and they've been heavy hitters in our corner since.
          </p>
          <div className="actions">
            <div className="first">
              <img src={testimonalIcons} />
            </div>
            <div className="second">
              <img src={testimonalIcons} />
            </div>
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