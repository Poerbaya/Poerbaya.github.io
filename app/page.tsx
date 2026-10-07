import {
  ArrowUpRight,
  MapPin,
  MoveDown,
  ShieldCheck,
  Compass,
  Sparkles,
  Leaf,
  Handshake,
  Zap,
} from "lucide-react";
import { companyProfile } from "@/lib/profile";
const principleDetails: Record<string, string> = {
  Safety: "People and safety at the heart of our decisions.",
  Integrity: "Honest communication and accountable conduct.",
  Reliability: "A foundation of discipline and dependable thinking.",
  Innovation: "New perspectives on complex energy challenges.",
  Sustainability: "Responsibility to the environment and future generations.",
  Partnership: "Progress through collaboration and shared purpose.",
};
const principleIcons = [ShieldCheck, Compass, Zap, Sparkles, Leaf, Handshake];
export default async function Home() {
  const profile = await companyProfile();
  return (
    <>
      <section
        id="executive-summary"
        aria-labelledby="summary-heading"
        className="executive-section"
      >
        <div className="hero">
          <div
            className="hero-art"
            role="img"
            aria-label="Conceptual illustration of wind turbines across green hills; not an Ojasvi facility"
          />
          <div className="hero-content">
            <div className="hero-label">
              <span /> 01 / EXECUTIVE SUMMARY
            </div>
            <h1 id="summary-heading">
              {profile.proposition.split(". ").map((line, i) => (
                <span key={i} className={i ? "headline-accent" : ""}>
                  {line}
                  {i === 0 ? "." : ""}
                  {i === 0 && <br />}
                </span>
              ))}
            </h1>
            <p>
              A new perspective on energy.
              <br />A shared responsibility for what comes next.
            </p>
            <a className="button lime" href="#company-positioning">
              Discover who we are <ArrowUpRight size={19} />
            </a>
          </div>
          <div className="hero-bottom">
            <span>
              <MapPin size={15} /> Pekajangan, Central Java, Indonesia
            </span>
            <a href="#our-perspective">
              OUR PERSPECTIVE <MoveDown size={16} />
            </a>
          </div>
          <span className="image-caption">Conceptual energy landscape</span>
        </div>
        <div className="intro-strip">
          <span>
            <i /> ENERGY WITH PURPOSE
          </span>
          <p>Global ambition. Responsible progress. Long-term thinking.</p>
        </div>
        <div className="section introduction" id="our-perspective">
          <div>
            <div className="section-label">A COMPANY TAKING SHAPE</div>
            <h2>
              Rooted in Indonesia.
              <br />
              Looking to the world.
            </h2>
          </div>
          <div>
            <p className="lead">Building the next chapter of energy.</p>
            <p>{profile.executiveSummary}</p>
            <p>
              Our ambition is to help shape the future of energy with clarity,
              technical credibility, and an original Ojasvi identity.
            </p>
          </div>
        </div>
        <div className="summary-directions">
          {[
            {
              number: "01",
              title: "A global ambition",
              text: "Building a diversified energy company with a powerful, long-term vision.",
            },
            {
              number: "02",
              title: "A future-facing perspective",
              text: "Looking at how infrastructure, technology, and investment can shape the next era of energy.",
            },
            {
              number: "03",
              title: "Responsible foundations",
              text: "Grounded in responsibility, transparency, and long-term thinking.",
            },
          ].map((c) => (
            <div key={c.number}>
              <span>{c.number}</span>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
        <div className="section audience-block">
          <div>
            <span className="section-label">A SHARED ENERGY FUTURE</span>
            <h2>
              Many perspectives.
              <br />
              One conversation.
            </h2>
            <p>
              Our public platform is designed to serve the people and
              organizations connected to the energy sector.
            </p>
          </div>
          <ul className="audience-list">
            {profile.audiences.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </div>
      </section>
      <section
        id="company-positioning"
        aria-labelledby="positioning-heading"
        className="positioning-section"
      >
        <div className="section positioning-intro">
          <div className="section-label">02 / COMPANY POSITIONING</div>
          <h2 id="positioning-heading">
            An integrated perspective.
            <br />A purposeful direction.
          </h2>
          <p className="positioning-statement">{profile.positioning}</p>
          <p className="positioning-note">
            This describes our corporate direction and ambition. It does not
            imply an existing operating portfolio or verified achievements.
          </p>
        </div>
        <div className="mission-vision">
          <div>
            <span className="section-label">OUR MISSION</span>
            <h3>
              Reliable energy.
              <br />
              Responsible progress.
            </h3>
            <p>{profile.mission}</p>
          </div>
          <div>
            <span className="section-label">OUR VISION</span>
            <h3>
              Trusted globally.
              <br />
              Thinking beyond today.
            </h3>
            <p>{profile.vision}</p>
          </div>
        </div>
        <div className="section principles">
          <div className="section-heading">
            <div>
              <span className="section-label">OUR CORE PRINCIPLES</span>
              <h2>
                The foundations
                <br />
                of our ambition.
              </h2>
            </div>
            <p>
              Six principles guide the company
              <br />
              we aspire to build.
            </p>
          </div>
          <div className="principle-grid">
            {profile.principles.map((p, i) => {
              const Icon = principleIcons[i % principleIcons.length];
              return (
                <div className="principle-card" key={p}>
                  <div className="card-top">
                    <Icon size={28} strokeWidth={1.4} />
                    <span>0{i + 1}</span>
                  </div>
                  <h3>{p}</h3>
                  <p>
                    {principleDetails[p] ||
                      "A guiding principle for Ojasvi’s corporate identity."}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="section personality">
          <span className="section-label">THE OJASVI CHARACTER</span>
          <h2>
            Composed in purpose.
            <br />
            Bold in possibility.
          </h2>
          <div className="personality-grid">
            {profile.personality.map((p, i) => (
              <div key={p.title}>
                <span>0{i + 1}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="closing-note">
          <span className="section-label">CREDIBILITY THROUGH CLARITY</span>
          <p>
            Our story will be built on evidence. We do not claim operational
            history, financial performance, projects, customers, certifications,
            executives, awards, emissions reductions, or achievements that have
            not been verified.
          </p>
        </div>
      </section>
    </>
  );
}
