import React from "react"
import logoImage from "../images/lowZoom.png"
import "./Homenavbar.scss"
import { Link } from "react-router-dom"
import NavTabItem from "../components/NavTabItem"

const HomeNavbar = () => {
  return (
    <div className="container">
      <div className="home-nav">
        <div className="bar-icon">
        <i class="fa-solid fa-bars"></i>
        </div>
        <div className="main-logo">
          <img src={logoImage} />
        </div>
        <div className="home-links">
          <div className="link-box">
            <Link to="/services" className="link-itemsss">
              Services<i className="fa-solid ml-1 fa-chevron-down"></i>
            </Link>
            <div className="link-item">
              <div className="serviecs">
                <NavTabItem
                  icon={<i class="fa-solid fa-earth-americas"></i>}
                  heading="Import Financing"
                  description="Engages in importing goods from international markets, we can extend credit limits without requiring collateral, allowing you up to 120 days of credit."
                />
                <NavTabItem
                  icon={<i class="fa-solid fa-map-location"></i>}
                  heading="Export Financing"
                  description="Export Financing For credit-based sales to buyers, we cover the credit period and safeguard you against any potential payment defaults by the buyer."
                />
                <NavTabItem
                  icon={<i class="fa-solid fa-paperclip"></i>}
                  heading="Domestic Trade Financing"
                  description="Domestic Trade Financing Engaging in domestic credit-based sales? Our financing solutions ensure your credit period is covered, mitigating risks of buyer payment defaults "
                />
                <NavTabItem
                  icon={<i class="fa-solid fa-hand-holding-dollar"></i>}
                  heading="Working Capital Financing"
                  description="Working Capital Financing immediate funds to manage your inventory, cover payroll, make supplier payments, and handle other operational expenses. "
                />
              </div>
            </div>
          </div>
          <div className="link-box">
            <Link to="/services" className="link-itemsss">
              Partner<i className="fa-solid ml-1 fa-chevron-down"></i>
            </Link>
            <div className="link-item">
              <div className="serviecs">
                <NavTabItem
                  icon={<i class="fa-solid fa-earth-americas"></i>}
                  heading="Become Investor"
                  description="Broaden your investment portfolio with trade finance opportunities at an institutional level"
                />
                <NavTabItem
                  icon={<i class="fa-solid fa-map-location"></i>}
                  heading="Become Channel Partner"
                  description="Become Channel Partner Capitalize your connections with exporters by enrolling in our Channel Partnership Program "
                />
              </div>
            </div>
          </div>
          <div className="link-box">
            <Link to="/services" className="link-itemsss">
              Company<i className="fa-solid ml-1 fa-chevron-down"></i>
            </Link>
            <div className="link-item">
              <div className="serviecs">
                <NavTabItem
                  icon={<i class="fa-solid fa-earth-americas"></i>}
                  heading="About Company"
                  description="At Tradbee®, we are committed to offer affordable and convenient trade finance solutions."
                />
                <NavTabItem
                  icon={<i class="fa-solid fa-map-location"></i>}
                  heading="Contact"
                  description="Still seeking clarity on our process? engage with our Export Finance Advisor "
                />
                <NavTabItem
                  icon={<i class="fa-solid fa-paperclip"></i>}
                  heading="Careers"
                  description="Work with Tradbee, we invest in the power of people to move the world forward.1"
                />
                <NavTabItem
                  icon={<i class="fa-solid fa-hand-holding-dollar"></i>}
                  heading="Knowledge Center"
                  description="Elevate your product understanding with comprehensive feature overviews and insights."
                />
              </div>
              <div className="policies-box">
                <h4 className="policy-text">Privacy Policy</h4>
                <h4 className="policy-text">Terms of use and cookie policy</h4>
                <h4 className="policy-text">Cookie Setting</h4>
              </div>
            </div>
          </div>
          <div className="link-box">
            <Link to="/login" className="link-itemsss fw-600">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeNavbar
