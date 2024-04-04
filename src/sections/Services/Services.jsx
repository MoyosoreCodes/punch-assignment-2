
import "./Services.css"
import designServices from "../../assets/design-services.svg"
import itServices from "../../assets/it-services.svg"
import award from "../../assets/award.svg"
import categories from "../../assets/categories.svg"
import profiles from "../../assets/profiles.svg"
import appIcon from '../../assets/app-icon.svg'
import AppAction from "../../components/app-action/AppAction"

export default function Services() {
  return (
    <section className="services-section diagonal">
      <p className="title">Your one-stop marketplace for finding the talent your business needs.</p>
      <div className="content">
        <div className="item">
          <div className="left">
            <p className="label">
              Find Dev and IT professionals to scale your business.
            </p>
            <div className="sub">
              <div className="sub-item">
                <img src={award} loading="lazy" />
                <span>989 Skills</span>
              </div>
              <div className="sub-item">
                <img src={categories} loading="lazy" />
                <span>45 Sub-Categories</span>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={itServices} loading="lazy" />
          </div>
        </div>
        <div className="item">
          <div className="left">
            <p className="label">
              Explore Creative individuals with a keen eye for detail.
            </p>
            <div className="sub">
              <div className="sub-item">
                <img src={award} loading="lazy" />
                <span>989 Skills</span>
              </div>
              <div className="sub-item">
                <img src={categories} loading="lazy" />
                <span>45 Sub-Categories</span>
              </div>
              <div className="sub-item">
                <img src={profiles} loading="lazy" />
                <span>1011 Profiles</span>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={designServices} loading="lazy" />
          </div>
        </div>
        <div className="item">
          <div className="left">
            <AppAction label={'Explore More'} />
          </div>
          <div className="right">
            <p>
              <span className="more">30 more </span>
              to explore
            </p>
          </div>
        </div>
      </div>
    </section>
  )
};