import React, { useState } from "react";
import "./CreateTaskComp.scss"

const CreateTaskComp = () => {
  const [open, setOpen] = useState(false);
  return (
  <div className="calender-box">
    <div className="calender-btn">
    <i class="fa-solid fa-calendar-days"></i>
    <button onClick={()=> setOpen((prev) => !(prev))} > set Reminder</button>
    </div>
    <div className={`calender-body ${open ? "": "d-none"}`}>
      i am body
    </div>
  
  </div>
  )
};

export default CreateTaskComp;
