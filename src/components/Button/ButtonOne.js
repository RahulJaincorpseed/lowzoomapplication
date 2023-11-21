import React from "react";

const ButtonOne = ({
    data,
    className = "", 
    ...props
}) => {
  return <button className={`btn  ${className}`} {...props}>{data}</button>;
};

export default ButtonOne;
