import React from "react";
import "./BlankPage.scss"

const BlankPage = ({data}) => {
  return (
    <div className="blank-page my-4">
        <h3 className="blank-text">{data}</h3>
    </div>
  )
};

export default BlankPage;
