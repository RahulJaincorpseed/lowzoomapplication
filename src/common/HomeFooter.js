import React from "react"
import "./HomeFooter.scss"
import logo from "../images/lowZoom.png"
import { Link } from "react-router-dom"

const HomeFooter = () => {
  return (
    <footer className="container">
      <div className="home-footer home-section-padding">
        <div className="logo-part">
          <div className="main-logo">
            <img src={logo} />
          </div>
          <div className="footer-links-flex">
            <p className="footer-links">Finleit Financial Advisors Pvt Ltd.</p>
            <p className="footer-links">
              2nd Floor, A-154A, A Block, Sector 63, Noida, Uttar Pradesh, India
              - 201301
            </p>
            <p className="footer-links">Email: Info@tradbee.com</p>
          </div>
        </div>
        <div className="product-part">
          <h2 className="footer-heading">Products</h2>
          <div className="footer-links-flex">
            <Link className="footer-links">Products Import Financing</Link>
            <Link className="footer-links">Export Financing</Link>
            <Link className="footer-links">Domestic Trade Financing</Link>
          </div>
        </div>
        <div className="product-part">
        <h2 className="footer-heading">Explore</h2>
          <div className="footer-links-flex-two">
            <Link className="footer-links">Exporters</Link>
            <Link className="footer-links"> Importer</Link>
            <Link className="footer-links"> Domestic</Link>
            <Link className="footer-links">Investors</Link>
            <Link className="footer-links">  Partner with us</Link>
          </div>
        </div>
        <div className="product-part">
        <h2 className="footer-heading">Company</h2>
          <div className="footer-links-flex-two">
            <Link className="footer-links">About us</Link>
            <Link className="footer-links">Contact</Link>
            <Link className="footer-links">Careers</Link>
            <Link className="footer-links">Knowledge Center</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default HomeFooter
