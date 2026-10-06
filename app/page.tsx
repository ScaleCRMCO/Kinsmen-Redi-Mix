import Image from "next/image";

// Placeholder contact details: replace once confirmed.
const CONTACT_EMAIL = "info@kinsmenredimix.ca";
const SISTER_SITE = "https://www.kinsmenconsulting.ca/";

const products = [
  { name: "Structural Mixes", spec: "25 – 40 MPa", body: "Engineered mixes for footings, foundations, walls and suspended slabs." },
  { name: "Flatwork & Exterior", spec: "Air-entrained", body: "Freeze-thaw resistant mixes for driveways, sidewalks and patios." },
  { name: "Winter Concrete", spec: "Heated / accelerated", body: "Hot-water batching and accelerators for year-round pours in Canadian winters." },
  { name: "Specialty Mixes", spec: "Fibre · Flowable fill", body: "Fibre-reinforced, flowable fill and custom designs to your spec." },
];

const locations = [
  { city: "Calgary", region: "Alberta", status: "First plant", active: true },
  { city: "Churchill", region: "Manitoba", status: "Planned", active: false },
  { city: "Across Canada", region: "Coast to coast", status: "Future", active: false },
];

const pillars = [
  { n: "01", title: "Built by contractors", body: "Backed by the field experience of Kinsmen Consulting, so we know what a good pour needs." },
  { n: "02", title: "Consistent quality", body: "Tested and batched to spec so every load arrives the same as the last." },
  { n: "03", title: "On-time delivery", body: "Reliable dispatch so your crew isn't left waiting for the truck." },
];

export default function Home() {
  return (
    <>
      <header className="nav">
        <div className="container nav-inner">
          <Image src="/logo.svg" alt="Kinsmen Redi-Mix" width={120} height={90} priority className="nav-logo" />
          <nav className="nav-links">
            <a href="#products">Products</a>
            <a href="#locations">Locations</a>
            <a href="#about">About</a>
            <a href="#contact" className="btn btn-sm">Get a Quote</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-grain" aria-hidden />
          <div className="container hero-inner">
            <p className="eyebrow"><span className="dot" /> Now building in Calgary, Alberta</p>
            <h1>
              Ready-mix concrete,<br />
              <span className="accent">poured right.</span>
            </h1>
            <p className="lead">
              Kinsmen Redi-Mix is a new Canadian concrete supplier delivering consistent,
              high-quality ready-mix to contractors and builders, starting in Calgary
              and growing across the country.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn">Request a Quote</a>
              <a href="#products" className="btn btn-ghost">Our Products →</a>
            </div>
          </div>
          <div className="container stats">
            <div><strong>25–40</strong><span>MPa mix range</span></div>
            <div><strong>Year-round</strong><span>Winter-ready batching</span></div>
            <div><strong>Canada</strong><span>Built to expand</span></div>
          </div>
        </section>

        <section id="products" className="section">
          <div className="container">
            <p className="kicker">Products</p>
            <h2>Mixes for every pour.</h2>
            <div className="grid-4">
              {products.map((p) => (
                <article key={p.name} className="card">
                  <span className="card-spec">{p.spec}</span>
                  <h3>{p.name}</h3>
                  <p>{p.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="locations" className="section section-alt">
          <div className="container split">
            <div>
              <p className="kicker">Locations</p>
              <h2>Starting in Calgary.<br />Built for Canada.</h2>
              <p className="muted">
                Our first batch plant is coming to Calgary, with plans to bring
                Kinsmen Redi-Mix to Churchill, Manitoba and communities across Canada.
              </p>
            </div>
            <ul className="locations">
              {locations.map((l) => (
                <li key={l.city} className={l.active ? "active" : ""}>
                  <div>
                    <strong>{l.city}</strong>
                    <span>{l.region}</span>
                  </div>
                  <em>{l.status}</em>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <p className="kicker">Why Kinsmen</p>
            <h2>A family name you can build on.</h2>
            <div className="grid-3">
              {pillars.map((p) => (
                <div key={p.n} className="pillar">
                  <span className="pillar-n">{p.n}</span>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              ))}
            </div>
            <div className="sister">
              <div>
                <p className="kicker">Part of the Kinsmen family</p>
                <p className="sister-text">
                  Need the concrete placed too? Our sister company, Kinsmen Consulting,
                  handles residential and commercial concrete work in Calgary.
                </p>
              </div>
              <a href={SISTER_SITE} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
                Visit Kinsmen Consulting ↗
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="section cta">
          <div className="container cta-inner">
            <h2>Let&apos;s talk about your next pour.</h2>
            <p className="muted">
              We&apos;re just getting started. Reach out for pricing, supply partnerships or
              to be first in line when the plant opens.
            </p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="btn">{CONTACT_EMAIL}</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <Image src="/logo.svg" alt="Kinsmen Redi-Mix" width={80} height={60} />
          <p>© {new Date().getFullYear()} Kinsmen Redi-Mix. Calgary, Alberta, Canada.</p>
        </div>
      </footer>
    </>
  );
}
