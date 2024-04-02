import "./OurProcess.css"
import ourProcess from "../../assets/our-process.svg"
import ProcessStep from "../../components/process-step/ProcessStep"

export default function () {
  return (
    <section className="how-section-container">
      <div className="how-section">
        <div className="top">
          <div className="title">
            How we ensure you're in good hands.
          </div>
          <p className="subtext">
            With our comprehensive screening process, we hand-pick highly skilled candidates so you can onboard them in a matter of days.
          </p>
        </div>
        <div className="bottom">
          <div className="left">
            <ProcessStep label={<p><span className="step">Step 1: </span> Resume Screening</p>} />
            <ProcessStep open label={<p><span className="step">Step 2: </span> Video Interview</p>} >
              <p className="step-content">Candidates are assessed through skill based questions in a virtual setting. Allowing you to gauge personality and cultural fit.</p>
            </ProcessStep>
            <ProcessStep label={<p><span className="step">Step 3: </span> Technical Evaluation</p>} />
            <ProcessStep label={<p><span className="step">Step 4: </span> Application Review</p>} />
            <ProcessStep label={<p><span className="step">Step 5: </span> Lets get to work </p>} />
          </div>
          <div className="right">
            <img src={ourProcess} />
          </div>
        </div>
      </div>
    </section>
  )
}