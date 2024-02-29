import { useState } from "react";
import "./styles.css";

export default function Tabs({ tabsContent, onChange }) {
  console.log("<<<<", tabsContent);
  const [tabCurrentIndex, setTabCurrentIndex] = useState(0);

  function handleOnClick(getIndex) {
    setTabCurrentIndex(getIndex);
    onChange(getIndex);
  }
  return (
    <div className="container">
      <div className="tab-heading">
        {tabsContent.map((tabsContentItem, index) => (
          <div
            onClick={() => {
              handleOnClick(index);
            }}
            key={tabsContentItem.label}
          >
            <span
              className={`tab-heading-item ${
                tabCurrentIndex === index ? "active" : null
              }`}
            >
              {tabsContentItem.label}
            </span>
            {console.log("sss", tabsContentItem.label)}
          </div>
        ))}
      </div>
      <div className="tab-tabContent" style={{ color: "purple" }}>
        {tabsContent[tabCurrentIndex].content}
      </div>
    </div>
  );
}
