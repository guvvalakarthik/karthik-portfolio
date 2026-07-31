import { useEffect, useState } from "react";
import { Icon } from "./icons";
import { profile, projects, skillGroups, type Project } from "./data";

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={href} rel="noreferrer" target="_blank">
      {children}
    </a>
  );
}

function ProjectVisual({ project }: { project: Project }) {
  const visualContent: Record<Project["id"], React.ReactNode> = {
    careerpilot: (
      <>
        <div className="mini-window">
          <span />
          <span />
          <span />
        </div>
        <div className="pipeline-row">
          <span>Saved</span>
          <span>Applied</span>
          <span>Interview</span>
        </div>
        <div className="score-ring">
          <strong>84</strong>
          <small>fit signal</small>
        </div>
        <div className="signal-bars">
          <i />
          <i />
          <i />
          <i />
        </div>
      </>
    ),
    trackforge: (
      <>
        <div className="forge-title">Today's route</div>
        <div className="problem-row">
          <span className="check">{"\u2713"}</span>
          <span>Sliding window</span>
          <b>1450</b>
        </div>
        <div className="problem-row">
          <span className="pulse-dot" />
          <span>Graph traversal</span>
          <b>1520</b>
        </div>
        <div className="heatmap">
          {Array.from({ length: 28 }, (_, index) => (
            <i key={index} data-level={(index * 7 + 3) % 5} />
          ))}
        </div>
      </>
    ),
    tomatoguard: (
      <>
        <div className="leaf">
          <i />
          <i />
          <i />
        </div>
        <div className="confidence-card">
          <span>Screening result</span>
          <strong>Uncertain</strong>
          <small>Input safely rejected</small>
        </div>
      </>
    ),
    sourcelens: (
      <>
        <div className="document source-document">
          <i />
          <i className="matched" />
          <i />
          <i className="matched short" />
        </div>
        <div className="match-line" />
        <div className="document candidate-document">
          <i />
          <i className="matched" />
          <i />
          <i className="matched short" />
        </div>
      </>
    ),
    vidhyavedha: (
      <>
        <div className="service-grid">
          <div><span>01</span>Health</div>
          <div><span>02</span>Services</div>
          <div><span>03</span>Education</div>
          <div><span>04</span>Bookings</div>
        </div>
        <div className="route-line"><i /><i /><i /></div>
      </>
    ),
  };

  return (
    <div className={`project-visual ${project.tone}`} aria-hidden="true">
      <div className="visual-grid" />
      {visualContent[project.id]}
      <span className="visual-index">{String(projects.indexOf(project) + 1).padStart(2, "0")}</span>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card ${project.featured ? "featured" : ""}`}>
      <ProjectVisual project={project} />
      <div className="project-copy">
        <p className="eyebrow">{project.eyebrow}</p>
        <h3>{project.name}</h3>
        <p className="project-summary">{project.summary}</p>
        <div className="case-file">
          <div>
            <span>Engineering question</span>
            <p>{project.challenge}</p>
          </div>
          <ul>
            {project.engineering.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="stack-list" aria-label={`${project.name} technology stack`}>
          {project.stack.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
        <p className="proof-note"><b>Evidence:</b> {project.proof}</p>
        <div className="project-actions">
          {project.live && (
            <ExternalLink href={project.live} className="text-link">
              Live product <Icon name="arrow" />
            </ExternalLink>
          )}
          {project.api && (
            <ExternalLink href={project.api} className="text-link muted">
              API docs <Icon name="arrow" />
            </ExternalLink>
          )}
          <ExternalLink href={project.github} className="text-link muted">
            Source <Icon name="github" />
          </ExternalLink>
        </div>
      </div>
    </article>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false);
    window.addEventListener("resize", closeMenu);
    return () => window.removeEventListener("resize", closeMenu);
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Guvvala Karthik, home">
          <span>GK</span>
          <strong>Guvvala Karthik</strong>
        </a>
        <button
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          className="menu-button"
          onClick={() => setMenuOpen((open) => !open)}
          type="button"
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>
        <nav aria-label="Primary navigation" className={menuOpen ? "open" : ""}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="#capabilities" onClick={() => setMenuOpen(false)}>Capabilities</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a className="nav-resume" href="/Guvvala_Karthik_Resume.pdf" rel="noreferrer" target="_blank">
            Resume <Icon name="download" size={16} />
          </a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="status"><i /> Available for full-time opportunities - 2026</p>
            <h1>
              I build AI products that survive
              <span> real users, real data, and real failure modes.</span>
            </h1>
            <p className="hero-intro">
              I'm {profile.name}, a {profile.role} at IIIT Kottayam. I work across
              model integration, product engineering, APIs, data systems, and the
              quality gates that turn demos into dependable software.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#work">
                Explore selected work <Icon name="arrow" />
              </a>
              <a className="button secondary" href={`mailto:${profile.email}`}>
                Start a conversation <Icon name="mail" />
              </a>
            </div>
          </div>
          <aside className="hero-console" aria-label="Engineering profile overview">
            <div className="console-top">
              <span>engineering.profile</span>
              <div><i /><i /><i /></div>
            </div>
            <div className="console-body">
              <p><span>01</span><b>role</b><em>"full-stack-ai"</em></p>
              <p><span>02</span><b>focus</b><em>"production systems"</em></p>
              <p><span>03</span><b>method</b><em>"measure -&gt; ship -&gt; learn"</em></p>
              <p><span>04</span><b>location</b><em>"India"</em></p>
              <div className="console-result">
                <i />
                <span>Ready to build with the team</span>
              </div>
            </div>
          </aside>
          <div className="hero-metrics">
            <div><strong>02</strong><span>AI & software internships</span></div>
            <div><strong>05</strong><span>End-to-end product systems</span></div>
            <div><strong>300+</strong><span>DSA problems solved</span></div>
          </div>
        </section>

        <section className="section work-section" id="work">
          <div className="section-heading">
            <div>
              <p className="kicker">Selected engineering</p>
              <h2>Systems, not screenshots.</h2>
            </div>
            <p>
              Each case study starts with the engineering problem, then shows the
              architecture, safeguards, and evidence behind the interface.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section className="section experience-section" id="experience">
          <div className="section-heading light">
            <div>
              <p className="kicker">Industry experience</p>
              <h2>Built with teams. Shipped for users.</h2>
            </div>
            <p>
              Professional work is described at a capability level to respect
              private repositories and client confidentiality.
            </p>
          </div>
          <div className="timeline">
            <article>
              <div className="timeline-meta">
                <span>Apr 2026 - Present</span>
                <i>Current</i>
              </div>
              <div className="timeline-main">
                <p>Wexa AI</p>
                <h3>SDE Intern</h3>
                <ul>
                  <li>Build full-stack features for AI-powered productivity applications across documents, spreadsheets, presentations, search, and external integrations.</li>
                  <li>Contribute to model integration, discovery, fallback handling, and tool-calling workflows.</li>
                  <li>Develop reusable React and TypeScript product surfaces and backend services for secure, persistent user assets.</li>
                  <li>Improve reliability through regression tests, debugging, build validation, and container workflows.</li>
                </ul>
              </div>
              <span className="timeline-number">02</span>
            </article>
            <article>
              <div className="timeline-meta">
                <span>Feb 2026 - Apr 2026</span>
              </div>
              <div className="timeline-main">
                <p>Xelron AI</p>
                <h3>AI Intern</h3>
                <ul>
                  <li>Designed and refined prompts for AI workflows, focusing on response quality, consistency, and alignment with client requirements.</li>
                  <li>Collaborated with US-based clients to translate project challenges and feedback into practical AI solutions.</li>
                  <li>Evaluated prompt strategies and iterated with a cross-functional team across client AI projects.</li>
                </ul>
              </div>
              <span className="timeline-number">01</span>
            </article>
          </div>
        </section>

        <section className="section capabilities-section" id="capabilities">
          <div className="section-heading">
            <div>
              <p className="kicker">Capabilities</p>
              <h2>From model boundary to browser.</h2>
            </div>
            <p>
              A focused toolkit grounded in the systems above, not a catalogue of
              technologies encountered once.
            </p>
          </div>
          <div className="capability-grid">
            {skillGroups.map((group, index) => (
              <article key={group.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
          <div className="education-strip">
            <div>
              <p>Education</p>
              <h3>B.Tech, Computer Science & Engineering</h3>
              <span>Indian Institute of Information Technology Kottayam | 2022-2026</span>
            </div>
            <div className="coursework">
              <span>Data Structures</span>
              <span>Operating Systems</span>
              <span>DBMS</span>
              <span>Computer Networks</span>
              <span>Machine Learning</span>
              <span>Cloud Computing</span>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <p className="kicker">Let's build something dependable</p>
          <h2>Looking for a full-stack AI engineer who thinks beyond the demo?</h2>
          <p>
            I'm graduating in 2026 and open to full-time product engineering and
            applied AI opportunities.
          </p>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email} <Icon name="arrow" size={30} />
          </a>
          <div className="social-links">
            <ExternalLink href={profile.github}><Icon name="github" /> GitHub</ExternalLink>
            <ExternalLink href={profile.linkedin}><Icon name="linkedin" /> LinkedIn</ExternalLink>
            <ExternalLink href={profile.leetcode}><Icon name="code" /> LeetCode</ExternalLink>
          </div>
        </section>
      </main>

      <footer>
        <span>(c) 2026 Guvvala Karthik</span>
        <span>Designed around evidence, not buzzwords.</span>
        <a href="#top">Back to top ^</a>
      </footer>
    </>
  );
}

export default App;


