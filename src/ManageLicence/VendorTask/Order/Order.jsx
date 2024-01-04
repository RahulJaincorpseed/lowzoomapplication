import React from "react"
import "./Order.scss"

const Order = () => {
  const data = [
    {
      serviceName: "CONSENT TO ESTABLISHMENT",
      action: "DOCUMENTS",
      orderNo: "221028704798",
      email: "abc@bharatpe.com",
      status: "IN PROGRESS",
    },
    {
      serviceName: "CONSENT TO ESTABLISHMENT",
      action: "DOCUMENTS",
      orderNo: "221028704798",
      email: "abc@bharatpe.com",
      status: "IN PROGRESS",
    },
    {
      serviceName: "CONSENT TO ESTABLISHMENT",
      action: "DOCUMENTS",
      orderNo: "221028704798",
      email: "abc@bharatpe.com",
      status: "IN PROGRESS",
    },
    {
      serviceName: "CONSENT TO ESTABLISHMENT",
      action: "DOCUMENTS",
      orderNo: "221028704798",
      email: "abc@bharatpe.com",
      status: "IN PROGRESS",
    },
    {
      serviceName: "CONSENT TO ESTABLISHMENT",
      action: "DOCUMENTS",
      orderNo: "221028704798",
      email: "abc@bharatpe.com",
      status: "IN PROGRESS",
    },
    {
      serviceName: "CONSENT TO ESTABLISHMENT",
      action: "DOCUMENTS",
      orderNo: "221028704798",
      email: "abc@bharatpe.com",
      status: "IN PROGRESS",
    },
    {
      serviceName: "CONSENT TO ESTABLISHMENT",
      action: "DOCUMENTS",
      orderNo: "221028704798",
      email: "abc@bharatpe.com",
      status: "IN PROGRESS",
    },
  ]
  return (
    <div className="your-order-list">
      <h2 className="vendor-heading">
        <i className="fa-solid mr-2 fa-circle-exclamation"></i> Vendor
        Outsourced Task
      </h2>

      <div className="vender-order-table table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">SERVICE NAME</th>
              <th scope="col">ACTION</th>
              <th scope="col">Order No.</th>
              <th scope="col">Email Address</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map((d, index) => (
              <tr key={index}>
                <td>{d.serviceName}</td>
                <td>{d.action}</td>
                <td>{d.orderNo}</td>
                <td>{d.email}</td>
                <td>{d.status}</td>
                <td>
                  <button className="vender-doc-btn">Documents</button>
                </td>
                <td>
                  <button className="vender-chat-btn">Chat</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Order
