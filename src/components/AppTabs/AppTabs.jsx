import { useEffect, useState } from "react";
import "./AppTabs.css";

function AppTabs({ onClick, options = [] }) {
  const [tabOptions, _] = useState(options);
  const [activeTab, setActiveTab] = useState(options.length && options[0]);

  function handleTabClick(index) {
    const selectedTab = tabOptions[index]
    setActiveTab(selectedTab)
    onClick(selectedTab);
  }

  useEffect(() => {
    setActiveTab(options[0])
    onClick(options[0])
  }, [])

  return (
    <div className="tab-container">
      {tabOptions?.map((option, index) => {
        return <p key={index} className={`tab-item ${option == activeTab ? 'active' : ''}`} onClick={() => handleTabClick(index)}>{
          option
        }</p>
      })}
    </div>
  )
}

export default AppTabs;