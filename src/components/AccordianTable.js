import React, { useState } from "react";
import "./AccordianTable.scss"

const AccordianTable = () => {
    const [collpaseState, setCollapseState] = useState(false);
  return (
    <div>
        <div id="accordion" className="tab-data table-responsive">
  <div className="card">
    <div className="data-center" id="headingOne">
        <p>ROC</p>
        <p>Company Annual Compliences</p>
        <p>Apply Now</p>
        <p>already Done</p>
        <p>Note Applicable</p>
        <p>LifeTime</p>
        <p>LifeTime</p>
        <p>LifeTime</p>
      <h5 className="mb-0">
        <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <i className="fa-solid fa-angle-down"></i>
        </button>
      </h5>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div className="card-box">
        <div className="milestone">
        <p className="mt-0">ROC</p>
        <p className="min-des">Company Annual Compliences</p>
        <p className="mt-0">LifeTime</p>
        <p className="mt-0">LifeTime</p>
        <p className="mt-0">LifeTime</p>
        <p className="mt-0">ROC</p>
        <p className="mt-0">LifeTime</p>
        <p className="mt-0">LifeTime</p>
        <p className="mt-0">LifeTime</p>
        <p className="mt-0">ROC</p>
        <p className="mt-0">LifeTime</p>
        <p className="mt-0">LifeTime</p>
        <p className="mt-0">LifeTime</p>
        </div>
        <div className="add-milestone">
        <input type="text" placeholder="Add New task" />
        <button>Add</button>
        </div>
      </div>
    </div>
  </div>
  <div className="card">
    <div className="data-center" id="headingTwo">
    <p>ROC</p>
        <p>Company Annual Compliences</p>
        <p>LifeTime</p>
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        <i className="fa-solid fa-angle-down"></i>
        </button>
      </h5>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div className="card">
    <div className="data-center" id="headingThree">
    <p>ROC</p>
        <p>Company Annual Compliences</p>
        <p>LifeTime</p>
      <h5 className="mb-0">
        <button className="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        <i className="fa-solid fa-angle-down"></i>
        </button>
      </h5>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div className="card-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
    </div>
  )
};

export default AccordianTable;
