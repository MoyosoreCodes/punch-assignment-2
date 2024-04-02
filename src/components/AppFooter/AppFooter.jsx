import "./AppFooter.css";
import AppLogo from "../AppLogo/AppLogo";
import AppIcon from "../svgs/AppIcon";

function AppFooter() {
  const footerLinks = {
    platform: [
      "Find Work",
      "Find Talent",
      "Articles",
      "About Us"
    ],
    categories: ["Data Science", "IT & Networking", "Web & Mobile"],
    help: ["Contact Us"],
    "GET IN TOUCH @": ["Instagram", "LinkedIn", "Twitter"]
  }
  return (
    <>
      <footer>
        <div className="top-section">
          <div className="footer-content">
            <h1>Need a job done, and done well? Get started</h1>
            <div className="icon">
              <AppIcon />
            </div>
          </div>
        </div>
        <div className="items">
          <div className="left">
            <div className="top">
              <AppLogo />
              <p>We take complex hiring processes - and simplify them. Connecting you to the world's highly qualified talent pool.</p>
            </div>
            <div className="link">
              <h4>LINKS AND REDIRECTS</h4>
              <div className="buttons">
                <button>Hire now</button>
                <button>Apply now</button>
              </div>
            </div>
          </div>
          <div className="right">
            <h1>Connecting the right people to the right businesses.</h1>
            <div className="footer-links">
              {
                Object.entries(footerLinks).map((item, index) => {
                  return <div className="items" key={index}>
                    <h4 className="label">
                      {item[0].toUpperCase()}
                    </h4>
                    <div className="item">
                      {item[1]?.map((i, idx) => <p key={idx}>{i}</p>)}
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </div>

        <div className="bottom">
          <p>All rights reserved  by Zwilt</p>
          <div className="policy">
            <p>Privacy Policy</p>
            <p>Terms and Conditions</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default AppFooter;