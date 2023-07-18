import React from "react"
import "./OrderHistory.scss"

const OrderHistory = () => {
  const companyData = [
    {
        companyName: "GPAY Private limited",
        orderNo: "221092870658",
        orderService: "pRIVATE COMPANY rEGISTRATION",
        ammount: "45000 inr",
        receipt: "recipt",
        orderDate: "Sep. 28, 2021",
        status: "COMPLETED" 
    },
    {
        companyName: "GPAY Private limited",
        orderNo: "221092870658",
        orderService: "pRIVATE COMPANY rEGISTRATION",
        ammount: "45000 inr",
        receipt: "recipt",
        orderDate: "Sep. 28, 2021",
        status: "COMPLETED" 
    },
    {
        companyName: "GPAY Private limited",
        orderNo: "221092870658",
        orderService: "pRIVATE COMPANY rEGISTRATION",
        ammount: "45000 inr",
        receipt: "recipt",
        orderDate: "Sep. 28, 2021",
        status: "COMPLETED" 
    },
    {
        companyName: "GPAY Private limited",
        orderNo: "221092870658",
        orderService: "pRIVATE COMPANY rEGISTRATION",
        ammount: "45000 inr",
        receipt: "recipt",
        orderDate: "Sep. 28, 2021",
        status: "COMPLETED" 
    },  
    {
        companyName: "GPAY Private limited",
        orderNo: "221092870658",
        orderService: "pRIVATE COMPANY rEGISTRATION",
        ammount: "45000 inr",
        receipt: "recipt",
        orderDate: "Sep. 28, 2021",
        status: "COMPLETED" 
    },  
    {
        companyName: "GPAY Private limited",
        orderNo: "221092870658",
        orderService: "pRIVATE COMPANY rEGISTRATION",
        ammount: "45000 inr",
        receipt: "recipt",
        orderDate: "Sep. 28, 2021",
        status: "COMPLETED" 
    },  
    {
        companyName: "GPAY Private limited",
        orderNo: "221092870658",
        orderService: "pRIVATE COMPANY rEGISTRATION",
        ammount: "45000 inr",
        receipt: "recipt",
        orderDate: "Sep. 28, 2021",
        status: "COMPLETED" 
    },  
    {
        companyName: "GPAY Private limited",
        orderNo: "221092870658",
        orderService: "pRIVATE COMPANY rEGISTRATION",
        ammount: "45000 inr",
        receipt: "recipt",
        orderDate: "Sep. 28, 2021",
        status: "COMPLETED" 
    },    
    {
        companyName: "GPAY Private limited",
        orderNo: "221092870658",
        orderService: "pRIVATE COMPANY rEGISTRATION",
        ammount: "45000 inr",
        receipt: "recipt",
        orderDate: "Sep. 28, 2021",
        status: "COMPLETED" 
    },  
    {
        companyName: "GPAY Private limited",
        orderNo: "221092870658",
        orderService: "pRIVATE COMPANY rEGISTRATION",
        ammount: "45000 inr",
        receipt: "recipt",
        orderDate: "Sep. 28, 2021",
        status: "COMPLETED" 
    },  
    {
        companyName: "GPAY Private limited",
        orderNo: "221092870658",
        orderService: "pRIVATE COMPANY rEGISTRATION",
        ammount: "45000 inr",
        receipt: "recipt",
        orderDate: "Sep. 28, 2021",
        status: "COMPLETED" 
    },  
    {
        companyName: "GPAY Private limited",
        orderNo: "221092870658",
        orderService: "pRIVATE COMPANY rEGISTRATION",
        ammount: "45000 inr",
        receipt: "recipt",
        orderDate: "Sep. 28, 2021",
        status: "COMPLETED" 
    },  

]

  return (
    <div className="order-history-table">
      <div className="table-responsive">
        <table className="table">
          <thead className="recipt-table-head">
            <tr>
              <th scope="col">company name</th>
              <th scope="col">order no.</th>
              <th scope="col">order SERVICE</th>
              <th scope="col">amount</th>
              <th scope="col">receipt</th>
              <th scope="col">order date</th>
              <th scope="col">status</th>
            </tr>
          </thead>
          <tbody className="recipt-table-body">
            {companyData.map((data, index) =>(
                <tr key={index}>
                <td>{data?.companyName}</td>
                <td>{data?.orderNo}</td>
                <td className="w-160">{data?.orderService}</td>
                <td>{data?.ammount}</td>
                <td>{data?.receipt}</td>
                <td className="w-120">{data?.orderDate}</td>
                <td>{data?.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default OrderHistory
