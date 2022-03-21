import React, { useState, useEffect } from "react";
import styles from "./tabs.module.css";
import { useRouter } from "next/router";
import { slugify } from "../../utils/slugify";

const Tabs = ({ children, initialTab }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);
  const router = useRouter();

  useEffect(() => {
    router.push(`${router.pathname}?path=${slugify(activeTab)}`, undefined, {
      shallow: true,
    });
  }, [activeTab]);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, []);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(slugify(newActiveTab));
  };

  return (
    <div>
      <ul className={styles.tabs}>
        {children.map((tab) => {
          const label = tab.props.label;
          return (
            <li
              className={slugify(label) === activeTab ? styles.current : ""}
              key={label}
            >
              <a href="#" onClick={(e) => handleClick(e, label)}>
                {label}
              </a>
            </li>
          );
        })}
      </ul>
      {children.map((one) => {
        if (slugify(one.props.label) === activeTab) {
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
