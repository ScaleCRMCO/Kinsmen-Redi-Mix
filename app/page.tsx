import Image from "next/image";
import Header from "@/components/Header";

// Placeholder contact details: replace once confirmed.
const CONTACT_EMAIL = "info@kinsmenredimix.ca";
const CONTACT_PHONE = "(403) 000-0000";
const SISTER_SITE = "https://www.kinsmenconsulting.ca/";

const stats = [
  { value: "100%", label: "Mobile batch plant" },
  { value: "AB", label: "Province-wide supply" },
  { value: "365", label: "Days a year, winter-ready" },
];

const products = [
  "Structural Concrete",
  "Foundations & Footings",
  "Flatwork & Paving",
  "Winter / Heated Mixes",
  "Fibre-Reinforced Concrete",
  "Flowable Fill",
  "Remote & Industrial Projects",
  "Custom Mix Designs",
];

const areas = [
  { name: "Calgary & Area", note: "Home base" },
  { name: "Southern Alberta", note: "Serving now" },
  { name: "Central Alberta", note: "Serving now" },
  { name: "Northern Alberta", note: "Serving now" },
  { name: "Rural & Remote Sites", note: "On request" },
  { name: "Churchill, Manitoba", note: "Future development" },
];

function Arrow() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <Header />

      <main id="top">
        {/* Hero: stock photo placeholder until we have our own plant photos */}
        <section className="hero">
          <Image
            src="/hero-mobile-plant.jpg"
            alt="Mobile concrete batch plant on site"
            fill
            priority
            sizes="100vw"
            className="hero-img"
          />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <h1>
              Kinsmen Redi-Mix: Mobile Ready-Mix Concrete Supply Across Alberta
            </h1>
          </div>
          <div className="hero-tag">
            <span className="hero-tag-label">Mobile Batch Plant</span>
            <a href="#contact">
              Get a Quote <Arrow />
            </a>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container split">
            <h2 className="section-title">About Us</h2>
            <div className="lead-text">
              <p>
                Kinsmen Redi-Mix is a mobile ready-mix concrete supplier built to bring
                the plant to the project. Instead of hauling concrete hours from a fixed
                yard, we set up where the work is.
              </p>
              <p>
                From Calgary to communities across Alberta, our goal is to be the
                dependable concrete supplier for towns, contractors and industry that
                have been underserved for too long.
              </p>
              <p className="quote">
                &ldquo;Good concrete starts with showing up. We bring the plant, the
                people and the quality, wherever the job is.&rdquo;
              </p>
            </div>
          </div>

          <div className="container stats">
            {stats.map((s) => (
              <div key={s.label} className="stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="section section-tight">
          <div className="container">
            <h2 className="section-title">Products &amp; Services</h2>
            <ul className="rows">
              {products.map((p) => (
                <li key={p}>
                  <a href="#contact">
                    <span>{p}</span>
                    <Arrow />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="service-area" className="section section-grey">
          <div className="container split">
            <div>
              <h2 className="section-title">Service Area</h2>
              <p className="muted">
                Because our plant is mobile, our service area grows with demand.
                We&apos;re focused on Alberta first, with Churchill, Manitoba planned as
                a future development.
              </p>
            </div>
            <ul className="areas">
              {areas.map((a) => (
                <li key={a.name} className={a.note === "Future development" ? "future" : ""}>
                  <span>{a.name}</span>
                  <em>{a.note}</em>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section section-tight">
          <div className="container sister">
            <div>
              <p className="eyebrow">Part of the Kinsmen family</p>
              <p className="sister-text">
                Need the concrete placed too? Our sister company, Kinsmen Consulting,
                delivers residential and commercial concrete work in Calgary.
              </p>
            </div>
            <a href={SISTER_SITE} target="_blank" rel="noopener noreferrer" className="link-arrow">
              Visit Kinsmen Consulting <Arrow />
            </a>
          </div>
        </section>
      </main>

      <footer id="contact" className="footer">
        <div className="container">
          <a href="/" aria-label="Kinsmen Redi-Mix home" className="footer-logo-link">
            <Image src="/logo.svg" alt="Kinsmen Redi-Mix" width={160} height={120} className="footer-logo" />
          </a>
          <div className="footer-grid">
            <div>
              <h3>Quick Links</h3>
              <a href="#about">About</a>
              <a href="#products">Products</a>
              <a href="#service-area">Service Area</a>
              <a href={SISTER_SITE} target="_blank" rel="noopener noreferrer">Kinsmen Consulting</a>
            </div>
            <div>
              <h3>Calgary</h3>
              <p>Calgary, Alberta</p>
              <p>T: {CONTACT_PHONE}</p>
              <p><a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
            </div>
            <div>
              <h3>Future Developments</h3>
              <p>Churchill, Manitoba</p>
              <p>More communities to come</p>
            </div>
            <div>
              <h3>Get a Quote</h3>
              <p>Tell us about your project and location.</p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="btn">Contact Us</a>
            </div>
          </div>
          <p className="copyright">© {new Date().getFullYear()} Kinsmen Redi-Mix. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
