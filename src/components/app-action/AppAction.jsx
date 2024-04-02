import "./AppAction.css"
import appIcon from "../../assets/app-icon.svg"

export default function ({ label }) {
  return <div className="app-action">
    <div className="icon">
      <img src={appIcon} />
    </div>
    <span className="label">{label}</span>
  </div>
}