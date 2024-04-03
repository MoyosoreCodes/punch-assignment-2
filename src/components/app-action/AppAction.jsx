import "./AppAction.css";
import appIcon from "../../assets/app-icon.svg";

export default function AppAction({ label, imgSize }) {
  const style = {
    height: imgSize ? imgSize + 'px' : '52px'
  };

  return (
    <div className="app-action" style={style}>
      <div className="icon" style={style}>
        <svg width={style.height} height={style.height} viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect y="0.5" width="49.793" height="49.793" rx="20.1863" fill="#202229" />
          <path d="M25.8108 25.06C25.8108 27.4393 23.7986 29.3681 21.3164 29.3681C18.8342 29.3681 16.8219 27.4393 16.8219 25.06C16.8219 22.6807 18.8342 20.752 21.3164 20.752C23.7986 20.752 25.8108 22.6807 25.8108 25.06Z" fill="#EDEFFF" />
          <path d="M24.6551 30.1066L24.6551 20.0134L33.6439 25.06L24.6551 30.1066Z" fill="#EDEFFF" />
        </svg>
      </div>
      <span className="label">{label}</span>
    </div>
  );
}
