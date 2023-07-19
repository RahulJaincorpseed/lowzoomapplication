import React, { useState } from "react";

const TaskTabs = () => {
    const [selectedTab,  setSelectedTab] = useState(["#home1", "profile1"]);

    const tabChange = () =>{
        setSelectedTab(prev => prev +1)
    } 

  return (
    <section className="container py-4">
    <div className="row">
        <div className="col-md-12">
            <ul id="tabs" className="nav nav-tabs">
                <li className="nav-item"><a href="" data-target="#home1" data-toggle="tab" className="nav-link small text-uppercase">Home</a></li>
                <li className="nav-item"><a href="" data-target="#profile1" data-toggle="tab" className="nav-link small text-uppercase active">Profile</a></li>
                <li className="nav-item"><a href="" data-target="#messages1" data-toggle="tab" className="nav-link small text-uppercase">Messages</a></li>
                <li className="nav-item"><a href="" data-target="#messages2" data-toggle="tab" className="nav-link small text-uppercase">Messages</a></li>
            </ul>
            <div id="tabsContent" className="tab-content">
                <div id="home1" className="tab-pane fade">
                    <div className="list-group"><a href="" className="list-group-item d-inline-block"><span className="float-right badge badge-pill badge-dark">51</span> Home Link</a> <a href="" className="list-group-item d-inline-block"><span className="float-right badge badge-pill badge-dark">8</span> Link 2</a> <a href="" className="list-group-item d-inline-block"><span className="float-right badge badge-pill badge-dark">23</span> Link 3</a> <a href="" className="list-group-item d-inline-block text-muted">Link n..</a></div>
                </div>
                <div id="profile1" className="tab-pane fade active show">
                    <div className="row pb-2">
                        <div className="col-md-7">
                            <p>Tabs can be used to contain a variety of content &amp; elements. They are a good way to group <a href="" className="link">relevant content</a>. Display initial content in context to the user. Enable the user to flow through <a href="" className="link">more</a> information as needed. </p>
                        </div>
                        <div className="col-md-5">replace image</div>
                    </div>
                </div>
                <div id="messages1" className="tab-pane fade">
                    <div className="list-group"><a href="" className="list-group-item d-inline-block"><span className="float-right badge badge-pill badge-dark">44</span> Message 1</a> <a href="" className="list-group-item d-inline-block"><span className="float-right badge badge-pill badge-dark">8</span> Message 2</a> <a href="" className="list-group-item d-inline-block"><span className="float-right badge badge-pill badge-dark">23</span> Message 3</a> <a href="" className="list-group-item d-inline-block text-muted">Message n..</a></div>
                </div>
                <div id="messages2" className="tab-pane fade">
                    <div className="list-group"><a href="" className="list-group-item d-inline-block"><span className="float-right badge badge-pill badge-dark">44</span> Message 2</a> <a href="" className="list-group-item d-inline-block"><span className="float-right badge badge-pill badge-dark">8</span> Message 2</a> <a href="" className="list-group-item d-inline-block"><span className="float-right badge badge-pill badge-dark">23</span> Message 3</a> <a href="" className="list-group-item d-inline-block text-muted">Message n..</a></div>
                </div>
            </div>
        </div>
    </div>
    <button onClick={tabChange}>prev</button>
    <button>next</button>

</section>
  )
};

export default TaskTabs;
