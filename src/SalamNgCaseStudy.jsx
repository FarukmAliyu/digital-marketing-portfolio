import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

import salamngHome from "./assets/salamng/Screenshot 2026-07-19 at 09.42.03.png";

import whatsappOrderFlow from "./assets/salamng/v9iWd3lIWQXidzMmSBvFXLxvKL9c8lGfIQzj3Xinu9oQLfu9aoV4VSt2BjEOvQexXG4ck5EozXus1ZTAw-V6R4FmdO5JdncFJ3TJbQ9lRcDNYy9FQJw4TOkf94wwfDCgBO-01vVCW5O5lU_dFGtBH_Wwzo47hlADzObJtT7Bnf99I6oM7oekq-uVoKL4n0mb.jpeg";

function SalamNgCaseStudy() {
  const objectives = [
    "Increase digital visibility and brand awareness",
    "Create a clearer customer journey",
    "Generate more customer enquiries through WhatsApp",
    "Improve the website experience for ready-to-wear customers",
    "Create a structured consultation flow for bespoke customers",
  ];

  const strategies = [
    {
      number: "01",
      title: "Social Media to Website Funnel",
      description:
        "Use social media content to attract potential customers and direct interested audiences to specific pages on the SalamNg website.",
    },
    {
      number: "02",
      title: "Shop & Order on WhatsApp",
      description:
        "Create a simple shopping journey where customers can browse products, select items and send their order directly through WhatsApp.",
    },
    {
      number: "03",
      title: "Bespoke Consultation Flow",
      description:
        "Create a dedicated consultation experience for customers who want custom-made outfits, allowing them to submit their requirements before continuing to WhatsApp.",
    },
    {
      number: "04",
      title: "Marketing Performance Tracking",
      description:
        "Track important customer actions such as website visits, product views, WhatsApp clicks and consultation requests.",
    },
  ];

  const kpis = [
    "Website Visitors",
    "Product Views",
    "WhatsApp Clicks",
    "Bespoke Consultation Requests",
    "Conversion Rate",
    "Customer Enquiries",
  ];

  return (
    <>
      <header className="case-navbar">
        <div className="container case-nav-container">
          <Link to="/" className="back-link">
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>

          <span className="case-brand">FARUK.</span>
        </div>
      </header>

      <main className="case-study">
        <section className="case-hero">
            <section className="case-visual">
  <div className="container">
    <div className="visual-header">
      <div>
        <p className="section-label">PROJECT SNAPSHOT</p>

        <h2>
          The existing SalamNg digital storefront.
        </h2>
      </div>

      <p>
        The website provides a central destination where potential customers
        can discover the SalamNg brand, explore products and move toward a
        purchase decision.
      </p>
    </div>

    <figure className="website-showcase">
      <img
        src={salamngHome}
        alt="SalamNg Clothing website homepage"
      />

      <figcaption>
        SalamNg website homepage — brand discovery and product exploration.
      </figcaption>
    </figure>
  </div>
</section>
          <div className="container">
            <p className="section-label">CASE STUDY / 01</p>

            <p className="case-category">
              Digital Strategy • Customer Journey • WhatsApp Marketing
            </p>

            <h1>
              SalamNg Digital
              <span> Growth Strategy.</span>
            </h1>

            <p className="case-intro">
              A self-initiated digital marketing case study exploring how a
              fashion brand can create a stronger customer journey connecting
              social media, its website, WhatsApp and bespoke consultations.
            </p>

            <a
              href="https://salamng.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="case-website-link"
            >
              Visit SalamNg Website
              <ArrowUpRight size={18} />
            </a>
          </div>
        </section>

        <section className="case-section">
          <div className="container case-grid">
            <p className="section-label">01 / OVERVIEW</p>

            <div>
              <h2>The opportunity</h2>

              <p>
                SalamNg is a fashion brand with an online presence and the
                opportunity to create a more structured digital journey for
                potential customers.
              </p>

              <p>
                The goal of this project was to explore how digital marketing,
                website experience and WhatsApp communication could work
                together to move customers from discovery to enquiry and
                eventually towards a purchase or bespoke consultation.
              </p>
            </div>
          </div>
        </section>
<section className="case-section whatsapp-case-section">
  <div className="container case-grid">
    
    <div>
      <p className="section-label">
        05 / WHATSAPP ORDERING
      </p>
    </div>

    <div>
      <p className="case-eyebrow">
        CUSTOMER CONVERSION FLOW
      </p>

      <h2>
        Turning product interest into a structured order.
      </h2>

      <p>
        One of the key opportunities explored in this project was using
        WhatsApp as a conversion channel rather than simply as a general
        communication tool.
      </p>

      <p>
        The ordering flow allows a customer to communicate directly with the
        business, confirm selected items, receive an order summary and proceed
        toward payment.
      </p>
    </div>
  </div>

  <div className="container whatsapp-visual-container">
    <div className="whatsapp-flow">
      
      <div className="flow-content">
        <span className="flow-number">01</span>

        <h3>Customer Enquiry</h3>

        <p>
          A potential customer contacts SalamNg through WhatsApp to ask about
          available products or place an order.
        </p>
      </div>

      <div className="flow-content">
        <span className="flow-number">02</span>

        <h3>Order Confirmation</h3>

        <p>
          Selected items, sizes and quantities are organized into a clear
          order summary.
        </p>
      </div>

      <div className="flow-content">
        <span className="flow-number">03</span>

        <h3>Payment</h3>

        <p>
          The customer receives a payment link to complete the transaction.
        </p>
      </div>

      <div className="flow-content">
        <span className="flow-number">04</span>

        <h3>Dispatch</h3>

        <p>
          Once payment is confirmed, the order can move into fulfilment and
          delivery.
        </p>
      </div>

    </div>

    <figure className="whatsapp-showcase">
      <div className="phone-label">
        REAL ORDER FLOW EXAMPLE
      </div>

      <img
        src={whatsappOrderFlow}
        alt="Example of SalamNg WhatsApp ordering and payment process"
      />

      <figcaption>
        Example customer conversation showing item selection, order
        confirmation and payment instructions.
      </figcaption>
    </figure>
  </div>
</section>
        <section className="case-section dark-section">
          <div className="container case-grid">
            <p className="section-label">02 / THE CHALLENGE</p>

            <div>
              <h2>Turning attention into action.</h2>

              <p>
                Having a website and social media presence does not
                automatically mean that interested visitors become customers.
              </p>

              <p>
                The challenge explored in this project was how to create a
                simple and clear customer journey that reduces friction and
                gives customers an easy way to move from discovering a product
                or service to contacting the business.
              </p>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="container case-grid">
            <p className="section-label">03 / OBJECTIVES</p>

            <div>
              <h2>What the strategy aims to achieve.</h2>

              <div className="objectives-list">
                {objectives.map((objective) => (
                  <div className="objective-item" key={objective}>
                    <CheckCircle2 size={20} />
                    <span>{objective}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="container">
            <p className="section-label">04 / CUSTOMER JOURNEY</p>

            <h2 className="case-section-title">
              From discovery to conversation.
            </h2>

            <div className="journey">
              <div className="journey-step">
                <span>01</span>
                <h3>Discovery</h3>
                <p>Social media, referrals and digital content.</p>
              </div>

              <div className="journey-arrow">→</div>

              <div className="journey-step">
                <span>02</span>
                <h3>Website</h3>
                <p>Customers explore products and services.</p>
              </div>

              <div className="journey-arrow">→</div>

              <div className="journey-step">
                <span>03</span>
                <h3>Action</h3>
                <p>Shop products or request a bespoke consultation.</p>
              </div>

              <div className="journey-arrow">→</div>

              <div className="journey-step">
                <span>04</span>
                <h3>WhatsApp</h3>
                <p>Customer starts a direct conversation with the business.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="case-section dark-section">
          <div className="container">
            <p className="section-label">05 / PROPOSED STRATEGY</p>

            <h2 className="case-section-title">
              Four connected growth opportunities.
            </h2>

            <div className="strategy-grid">
              {strategies.map((strategy) => (
                <article className="strategy-card" key={strategy.number}>
                  <span>{strategy.number}</span>

                  <h3>{strategy.title}</h3>

                  <p>{strategy.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="case-section">
          <div className="container case-grid">
            <p className="section-label">06 / MEASUREMENT</p>

            <div>
              <h2>How success could be measured.</h2>

              <p>
                Since this is a self-initiated case study, the following are
                proposed KPIs rather than reported campaign results.
              </p>

              <div className="kpi-list">
                {kpis.map((kpi) => (
                  <span key={kpi}>{kpi}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="case-section case-conclusion">
          <div className="container">
            <p className="section-label">07 / KEY TAKEAWAY</p>

            <h2>
              Digital marketing is not just about getting attention.
              <span> It is about creating a path for customers to act.</span>
            </h2>

            <Link to="/" className="btn btn-primary">
              Back to Portfolio
              <ArrowLeft size={18} />
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}

export default SalamNgCaseStudy;