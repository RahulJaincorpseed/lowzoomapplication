import React from "react"
import "./DocumentRequiredTab.scss"

const DocumentRequiredTab = () => {
  return (
    <div className="doc-tab">
      <div className="inhouse-team">
          <h4 className="document-head">Documents list for inhouse team</h4>
          <p className="document-para">Create a document list that are need to be uploaded by the client for the relevant product. Minumum document list is need to be added to complete the delivery.</p>
          <div className="add-document">
          <input className="upload-file" type="file" />      
      

          </div>
      </div>
      <div className="inhouse-team">
          <h4 className="document-head">Document list for external agency</h4>
          <p className="document-para">Create document list for the agent which are need to be uploaded for product history/ records. ( Visibility of internal documents can be hide)</p>
          <div className="add-document">
          <input className="upload-file" type="file" />      
      

          </div>
      </div>
      <h1>Document required</h1>
    </div>
  )
}

export default DocumentRequiredTab
