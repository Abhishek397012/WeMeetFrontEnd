import React from "react";
import { Link } from "react-router-dom";

const SummarySidebar = (props) => {
  return (
    <div className="dash_container">
      <div className="sidebar">
            
      </div>
      <div className="dash_content">{props.children}</div>
    </div>
  );
};

export default SummarySidebar;
