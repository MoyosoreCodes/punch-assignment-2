import "./FAQ.css";

function FAQ() {
  return (
    <section className="faq-section">
      <p className="title">Frequently asked questions</p>
      <div className="faqs">
        <div className="item">
          <div className="left">General</div>
          <div className="right">
            <p>I want to work part-time, is that possible</p>
          </div>
        </div>
        <div className="item">
          <div></div>
          <div className="right">
            <p>How long are the average projects?</p>
          </div>
        </div>
        <div className="item">
          <div></div>
          <div className="right">
            <p> How does the payment works? </p>
          </div>
        </div>
        <div className="item">
          <div className="left inactive">
            <p>General</p>
          </div>
          <div className="left">
            <p>Joining Process</p>
          </div>
          <div className="right">
            <p>I want to work part-time, is that possible</p>
          </div>
        </div>
        <div className="item">
          <div></div>
          <div className="right">
            <p>How long are the average projects?</p>
          </div>
        </div>
        <div className="item">
          <div></div>
          <div className="right">
            <p> How does the payment works? </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ;