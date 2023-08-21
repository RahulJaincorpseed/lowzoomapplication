import React from "react"
import "./FrontPage.scss"
import LoginForm from "../components/LoginForm"
import OfferingBox from "../components/OfferingBox"
import SideSectionItem from "../components/SideSectionItem"

const FrontPage = () => {
  return (
    <>
      <div className="container">
        <div className="main-hero-section home-padding">
          <div className="left-home">
            <h1 className="hmain-heading">
              Trade Finance & Working Capital Solutions{" "}
            </h1>
            <p className="hmain-desc">
              Empower trade and enhance working capital needs offering instant
              cash without the need for collateral. We go beyond financial
              services – we embody your company's enduring vision.
            </p>
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
            <h1 className="hmain-heading text-w">
              Key <br className="how-get" /> Offerings
            </h1>
            <div className="offering-main-box">
              <OfferingBox
                icon={<i className="fa-solid fa-earth-americas"></i>}
                heading={`Import Financing`}
              />
              <OfferingBox
                icon={<i className="fa-solid fa-plane"></i>}
                heading="Export Financing"
              />
              <OfferingBox
                icon={<i className="fa-solid fa-globe"></i>}
                heading="Domestic Trade Financing"
              />
            </div>
          </div>
        </div>
      </section>

      {/* seam  less section */}
      <section className="container ">
        <div className="seamless-box home-section-padding">
          <div>
            <h1 className="hmain-heading">Seamless Access to Liquidity</h1>
            <p className="hmain-desc my-4">
              Bringing Global Financial Expertise to Solve Trader’s Financing
              Challenges. Your Trusted Partner in Empowering Business Growth
              with Innovative and Efficient Trade Financing Solutions!
            </p>
            <button className="home-submit-btn">
              Apply for Invoice Factoring
            </button>
          </div>
          <div className="seamless-right">
            <SideSectionItem
              icon={<i className="fa-solid fa-martini-glass-empty"></i>}
              heading="Collateral free finance"
              para="Our quick access to funds enables businesses to manage their cash flow and meet their working capital needs on a need basis"
            />

            <SideSectionItem
              icon={<i className="fa-solid fa-venus-mars"></i>}
              heading="Quick Funds Access"
              para="This enables your businesses to manage cash flow and continue operations without the need for additional security"
            />

            <SideSectionItem
              icon={<i className="fa-solid fa-inbox"></i>}
              heading="Minimal paperwork"
              para="Our quick access to funds enables businesses to manage their cash flow and meet their working capital needs on a need basis"
            />

            <SideSectionItem
              icon={<i className="fa-solid fa-shop"></i>}
              heading="A Groundbreaking Win-Win Strategy"
              para="Our unique approach to dynamic discounting and supplier finance keeps cash flowing for suppliers and improves key financial metrics for buyers with more flexibility and speed"
            />
          </div>
        </div>
      </section>

      {/* get in touch */}
      {/* key offer */}
      <section className="bg-theme">
        <div className="container">
          <div className="key-offer home-section-padding">
            <h1 className="hmain-heading text-w">
              Get in Touch The <br /> Way You Like
            </h1>
            <div className="offering-main-box my-5">
              <button className="white-home-btn w-300">
                Schedule a Callback
              </button>
              <button className="white-home-btn w-300">Enquire Now</button>
              <button className="white-home-btn w-300">Chat</button>
            </div>
          </div>
        </div>
      </section>

      {/* application section */}
      <section className="container ">
        <div className="seamless-box home-section-padding">
          <div className="seamless-left">
            <h1 className="hmain-heading">Application Process</h1>
            <p className="hmain-desc my-4">
              Apply now to avail finance by Simple 4-step customer on boarding
              process
            </p>
            <button className="home-submit-btn">
              Apply for Invoice Factoring
            </button>
          </div>
          <div className="seamless-right">
            <SideSectionItem
              icon={<i className="fa-solid fa-martini-glass-empty"></i>}
              heading="Apply Online"
              para="To apply for our services, simply go to our website and fill out some basic information about your business through our online form."
            />

            <SideSectionItem
              icon={<i className="fa-solid fa-venus-mars"></i>}
              heading="Credit assessment"
              para="Following a credit assessment, upon completion of credit checks, receive an offer."
            />

            <SideSectionItem
              icon={<i className="fa-solid fa-inbox"></i>}
              heading="Complete the KYC and Submit Invoice"
              para="Our dashboard allows you to easily upload your invoice and track the status of your payment. Once your invoice is uploaded, our team will promptly process your payment, ensuring that you receive your funds as quickly as possible."
            />

            <SideSectionItem
              icon={<i className="fa-solid fa-shop"></i>}
              heading="72 Hour Disbursements"
              para="Our fast and convenient service allows you to receive payments directly to your account, without any hassle or delay. Sign up today and start enjoying the benefits of 72 Hour Disbursements!"
            />
          </div>
        </div>
      </section>
      {/* financed section */}
      <section className="bg-theme">
        <div className="container">
          <div className="key-offer home-section-padding">
            <h1 className="hmain-heading text-w">
              How Do <br className="how-get" /> I Get <br />
              Financed?
            </h1>
            <div className="finance-steps">
              <div className="steps-count">
                <div className="counting">
                  <div className="count">1</div>
                </div>
                <h3 className="finance-heading">Uploads Invoice</h3>
                <p className="finance-desc">
                  Upon raising an invoice to your client within the credit limit
                  offered, uploads the invoice onto Tradbee® system.
                </p>
              </div>
              <div className="steps-count">
                <div className="counting">
                  <div className="count">2</div>
                </div>
                <h3 className="finance-heading">Sign Agreement</h3>
                <p className="finance-desc">
                  Sign the Debt Purchase Agreement digitally on our Tradbee
                  System{" "}
                </p>
              </div>
              <div className="steps-count">
                <div className="counting">
                  <div className="count">3</div>
                </div>
                <h3 className="finance-heading">Quick Disbursements</h3>
                <p className="finance-desc">
                  Upon Acceptance from the buyer, our lending partner pays
                  80-90% immediately
                </p>
              </div>
              <div className="steps-count">
                <div className="counting">
                  <div className="count last-count">4</div>
                </div>
                <h3 className="finance-heading">Remaining Amount </h3>
                <p className="finance-desc">
                  Payments are collected on due date and Balance amount is paid
                  to you
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* about page */}
      {/* financed section */}
      <section className="container">
        <div className="about-section home-section-padding">
          <div>
            <h2 className="abt-head">About LowZoom</h2>
            <p className="abt-desc">
              Tradbee® is a fintech platform specialized in Collateral-Free
              Trade Financing solutions. Through our network of lending partners
              worldwide, we offer exclusive financial services to importers,
              exporters and domestic trade. Our primary focus is to assist
              businesses in meeting their working capital requirements whilst
              waiting for payment from their buyers. With our innovative
              financing solutions, business can effectively manage their cash
              flow needs and ensure smooth business operations.
              <br />
              <br />
              At Tradbee®, we are committed to offer affordable and convenient
              trade finance solutions.
            </p>
          </div>
          <div className="abt-form">
            <LoginForm />
          </div>
        </div>
      </section>

      <section className="bg-theme">
        <div className="container">
          <div className="user-guide home-section-padding">
            <div className="user-guidenes">
              <h1 className="hmain-heading text-w">Download User Guide</h1>
              <i className="fa-solid user-icon fa-file-pdf"></i>
            </div>
            <div className="user-guidenes">
              <h1 className="hmain-heading text-w">Become Partner</h1>
              <button className="white-home-btn">Invester</button>
              <button className="white-home-btn">Channnel Partner</button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default FrontPage
