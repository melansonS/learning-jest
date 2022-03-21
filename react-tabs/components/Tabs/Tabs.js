import React, { useState } from "react";
import styles from "./tabs.module.css";

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div>
      <ul className={styles.tabs}>
        {children.map((tab) => (
          <li
            className={tab.props.label === activeTab ? styles.current : ""}
            key={tab.props.label}
          >
            <a href="#" onClick={(e) => handleClick(e, tab.props.label)}>
              {tab.props.label}
            </a>
          </li>
        ))}
      </ul>
      {children.map((one) => {
        if (one.props.label === activeTab) {
          return (
            <div className={styles.content} key={one.props.label}>
              {one.props.children}
            </div>
          );
        }
      })}
    </div>
  );
};

export default Tabs;
