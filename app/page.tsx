import Image from "next/image";
import Header from "@/components/Header";

// Placeholder contact details: replace once confirmed.
const CONTACT_EMAIL = "info@kinsmenredimix.ca";
const CONTACT_PHONE = "(403) 471-0022";
const SISTER_SITE = "https://www.kinsmenconsulting.ca/";

const stats = [
  { value: "30+", label: "Years of experience" },
  { value: "AB", label: "Province-wide supply" },
  { value: "365", label: "Days a year, winter-ready" },
];

// Böhringer B120 details from dealer listings: confirm against the official spec sheet.
const plantSpecs = [
  { label: "Setup time", value: "About 1 hour" },
  { label: "Foundations required", value: "None" },
  { label: "Cement storage", value: "Onboard silo" },
  { label: "Aggregate bins", value: "3 compartments" },
  { label: "Batch cycle", value: "2–3 minutes" },
  { label: "Feed", value: "Front-end loader" },
];

const fullService = [
  { n: "01", title: "The Plant", body: "Our Böhringer B120 mobile batch plant is set up on or near your site, so concrete is batched fresh where you need it." },
  { n: "02", title: "The Trucks", body: "We supply our own mixer trucks to deliver every load from the plant to the pour, on your schedule." },
  { n: "03", title: "The Crew", body: "Experienced operators, drivers and support crew run the operation start to finish. You focus on the build." },
];

const whyKrm = [
  {
    title: "Why Choose Kinsmen Redi-Mix",
    subtitle: "Concrete Supply You Can Count On",
    body: "We bring the plant, trucks and crew to your project, so you aren't waiting on a fixed yard hours away. Backed by more than 30 years in Alberta concrete, we know what a good pour needs and we show up ready to deliver it.",
  },
  {
    title: "What Makes Us Different",
    subtitle: "Supplier and Contractor Under One Name",
    body: "Most suppliers only sell concrete. Through our sister company, Kinsmen Consulting, our people also place and finish it, so we understand the job from batch to finished slab. That field experience shapes every mix we deliver.",
  },
  {
    title: "Our Goals & Vision",
    subtitle: "Reliable Concrete for Every Community",
    body: "Our goal is to become the go-to concrete supplier for towns and cities across Alberta that have been underserved by fixed plants, then grow beyond the province, starting with Churchill, Manitoba.",
  },
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
            src="/hero-b120.webp"
            alt="Böhringer B120 mobile batch plant on its trailer"
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

        <section id="plant" className="section plant">
          <div className="container split">
            <div>
              <p className="eyebrow">Our Plant</p>
              <h2 className="section-title">Böhringer B120 Mobile Batch Plant</h2>
              <div className="plant-photo">
                <Image
                  src="/plant-highway.webp"
                  alt="Böhringer B120 mobile batch plant being hauled on a highway"
                  fill
                  sizes="(max-width: 900px) 100vw, 480px"
                  className="plant-photo-img"
                />
              </div>
            </div>
            <div className="lead-text plant-text">
              <p>
                The B120 is a fully mobile concrete batch plant that travels by road and
                sets up in about an hour, with no permanent foundations. It carries its
                own cement silo and aggregate bins and batches concrete on site.
              </p>
              <p className="quote">
                Fresh concrete, made where the job is. That means shorter haul times,
                consistent quality and supply for remote sites that a fixed plant can&apos;t reach.
              </p>
            </div>
          </div>
          <div className="container specs">
            {plantSpecs.map((s) => (
              <div key={s.label} className="spec">
                <span>{s.label}</span>
                <strong>{s.value}</strong>
              </div>
            ))}
          </div>
        </section>

        <section id="full-service" className="section">
          <div className="container">
            <h2 className="section-title">Full-Service Supply</h2>
            <p className="muted wide">
              Kinsmen Redi-Mix doesn&apos;t just rent out a plant. We bring the plant,
              the trucks and a full crew, so you get a complete concrete supply operation
              on your project.
            </p>
            <div className="service-grid">
              {fullService.map((f) => (
                <div key={f.n} className="service">
                  <span className="service-n">{f.n}</span>
                  <h3>{f.title}</h3>
                  <p>{f.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why-krm" className="section why">
          <div className="container">
            <h2 className="why-heading">
              <span className="accent">The Kinsmen Difference</span> in Practice
            </h2>
            <p className="why-intro">
              Our crews have spent decades pouring concrete across Southern Alberta. That
              experience on the receiving end of the truck is what Kinsmen Redi-Mix is
              built on.
            </p>
            <div className="why-grid">
              <div className="why-photo">
                <Image
                  src="/crew-concrete-work.avif"
                  alt="Kinsmen crew placing and finishing concrete on site"
                  fill
                  sizes="(max-width: 900px) 100vw, 560px"
                  className="why-photo-img"
                />
              </div>
              <div className="why-items">
                {whyKrm.map((w) => (
                  <div key={w.title} className="why-item">
                    <h3>
                      <span className="accent">{w.title}</span>
                      <br />
                      {w.subtitle}
                    </h3>
                    <p>{w.body}</p>
                  </div>
                ))}
                <a href="#contact" className="text-link">
                  Talk to us about your project →
                </a>
              </div>
            </div>
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

        <section id="founder" className="section">
          <div className="container founder">
            <div className="founder-photo">
              <Image
                src="/terry-jensen.avif"
                alt="Terry Jensen, founder of Kinsmen Redi-Mix and Kinsmen Consulting"
                fill
                sizes="(max-width: 900px) 100vw, 480px"
                className="founder-photo-img"
              />
            </div>
            <div>
              <p className="eyebrow">About the Founder</p>
              <h2 className="section-title">Terry Jensen</h2>
              <p className="founder-role">President &amp; Founder</p>
              <div className="lead-text founder-text">
                <p>
                  Terry Jensen is a veteran of the Southern Alberta construction sector
                  with three decades of craftsmanship and operational leadership. Rising
                  from hands-on finisher to master contractor, Terry built a deep
                  understanding of concrete science and large-scale project logistics.
                </p>
                <p>
                  After founding Kinsmen Consulting, Terry saw first-hand how often
                  projects across Alberta are held back by concrete supply. Kinsmen
                  Redi-Mix is the answer: a mobile plant, trucks and crews that bring
                  reliable ready-mix to the job, wherever it is.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="kinsmen-family" className="section family">
          <div className="container">
            <a
              href={SISTER_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="family-logo"
              aria-label="Visit Kinsmen Consulting Ltd."
            >
              <Image
                src="/kinsmen-consulting-logo.jpg"
                alt="Kinsmen Consulting Limited"
                width={2000}
                height={664}
                sizes="360px"
              />
            </a>
            <div className="split family-split">
              <h2 className="section-title">Two Companies, One Kinsmen Standard</h2>
              <div className="lead-text">
                <p>
                  Kinsmen Redi-Mix and our sister company, Kinsmen Consulting Ltd., work
                  together to deliver complete concrete services for commercial and
                  residential projects.
                </p>
                <p className="quote">
                  Kinsmen Redi-Mix supplies the concrete. Kinsmen Consulting places and
                  finishes it, from commercial foundations and industrial slabs to
                  driveways and backyard projects. One family, one point of contact, from
                  batch to finished pour.
                </p>
              </div>
            </div>
            <ul className="rows family-rows">
              <li>
                <a href="#contact">
                  <span>Concrete Supply <small>Kinsmen Redi-Mix</small></span>
                  <Arrow />
                </a>
              </li>
              <li>
                <a href={SISTER_SITE} target="_blank" rel="noopener noreferrer">
                  <span>Placing &amp; Finishing <small>Kinsmen Consulting</small></span>
                  <Arrow />
                </a>
              </li>
            </ul>
            <div className="community">
              <p className="eyebrow">Community &amp; Diversity</p>
              <p>
                Kinsmen Redi-Mix and Kinsmen Consulting actively recruit First Nations
                people as part of our belief in a diverse workforce. We&apos;re proud to
                employ members of{" "}
                <a href="https://siksikanation.com/" target="_blank" rel="noopener noreferrer">
                  Siksika Nation
                </a>{" "}
                on our crews.
              </p>
            </div>
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
              <p><a href="tel:+14034710022">T: {CONTACT_PHONE}</a></p>
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
