import React from "react";
import "./FrontPage.scss"
import LoginForm from "../components/LoginForm";
import OfferingBox from "../components/OfferingBox";
import SideSectionItem from "../components/SideSectionItem";

const FrontPage = () => {
  return (<>
      <div className="container">
      <div className="main-hero-section home-padding">
          <div className="left-home">
            <h1 className="hmain-heading">Trade Finance & Working Capital Solutions </h1>
            <p className="hmain-desc">Empower trade and enhance working capital needs offering instant cash without the need for collateral. We go beyond financial services – we embody your company's enduring vision.</p>
          <div className="below-service">
            <p className="head-two fw-700">Popular:</p>
            <p className="head-two">Trade Finance</p> 
            <p className="head-two">Invoice Finance</p>
            <p className="head-two">Open Account Financeing</p>
            <p className="head-two">Recievable Financeing</p>
          </div>
          </div>
          <div className="right-home">
              <LoginForm />
          </div>
      </div>
      </div>
    {/* key offer */}
    <section className="bg-theme">
    <div className="container">
      <div className="key-offer home-section-padding">
        <h1 className="hmain-heading text-w">Key Offerings</h1>
        <div className="offering-main-box">
            <OfferingBox icon={ <i class="fa-solid fa-earth-americas"></i>} heading={`Import Financing`} />
            <OfferingBox icon={ <i class="fa-solid fa-plane"></i>} heading="Export Financing" />
            <OfferingBox icon={ <i class="fa-solid fa-globe"></i>} heading="Domestic Trade Financing" />
        
        </div>
      </div>
      </div>
      </section>

      {/* seam  less section */}
      <section className="container ">
        <div className="seamless-box home-section-padding">
          <div>
          <h1 className="hmain-heading">Seamless Access to  Liquidity</h1>
            <p className="hmain-desc my-4">Bringing Global Financial Expertise to Solve Trader’s Financing Challenges. Your Trusted Partner in Empowering Business Growth with Innovative and Efficient Trade Financing Solutions!</p>
            <button className="home-submit-btn">Apply for Invoice Factoring</button>        
          </div>
          <div className="seamless-right">
            <SideSectionItem icon ={<i class="fa-solid fa-martini-glass-empty"></i>} heading="Collateral free finance" para="Our quick access to funds enables businesses to manage their cash flow and meet their working capital needs on a need basis"/>
            
            <SideSectionItem icon ={<i class="fa-solid fa-venus-mars"></i>} heading="Quick Funds Access" para="This enables your businesses to manage cash flow and continue operations without the need for additional security"/>
            
            <SideSectionItem icon ={<i class="fa-solid fa-inbox"></i>} heading="Minimal paperwork" para="Our quick access to funds enables businesses to manage their cash flow and meet their working capital needs on a need basis"/>
            
            <SideSectionItem icon ={<i class="fa-solid fa-shop"></i>} heading="A Groundbreaking Win-Win Strategy" para="Our unique approach to dynamic discounting and supplier finance keeps cash flowing for suppliers and improves key financial metrics for buyers with more flexibility and speed"/>
          </div>
        </div>
      </section>
  </>
  )
};

export default FrontPage;
