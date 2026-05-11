import { useState } from 'react'
import './App.css'
import { site } from './siteContent'

function App() {
  const [showAllProjects, setShowAllProjects] = useState(false)
  const visibleProjects = showAllProjects ? site.projects : site.projects.slice(0, 3)
  const socialLinks = [
    { label: 'GitHub', href: site.links.github },
    { label: 'LinkedIn', href: site.links.linkedin },
    { label: 'LeetCode', href: site.links.leetcode },
    { label: 'X', href: site.links.x },
  ]

  return (
    <>
      <div className="corner-graffiti" aria-hidden="true">
        <div className="wall-texture" />
        <img
          className="graffiti-icon r2"
          src={site.graffiti.aws}
          alt=""
          width={500}
          height={500}
          decoding="async"
          loading="lazy"
        />
        <img
          className="graffiti-icon n1"
          src={site.graffiti.node}
          alt=""
          width={512}
          height={512}
          decoding="async"
          loading="lazy"
        />
        <img
          className="graffiti-icon n2"
          src={site.graffiti.mongodb}
          alt=""
          width={500}
          height={500}
          decoding="async"
          loading="lazy"
        />
        <img
          className="graffiti-icon p1"
          src={site.graffiti.python}
          alt=""
          width={500}
          height={500}
          decoding="async"
          loading="lazy"
        />
        <img
          className="graffiti-icon p2"
          src={site.graffiti.java}
          alt=""
          width={500}
          height={500}
          decoding="async"
          loading="lazy"
        />
        <img
          className="graffiti-icon c1"
          src={site.graffiti.coffee}
          alt=""
          width={512}
          height={512}
          decoding="async"
          loading="lazy"
        />
      </div>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="logo" href="#top">
          {site.name.split(' ')[0]}
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-heading">
          <p className="eyebrow">{'<full-stack.dev />'}</p>
          <h1 id="hero-heading" className="hero-heading-with-react">
            {site.name}
            {'\u00A0'}
            <img
              className="graffiti-icon graffiti-react-inline"
              src={site.graffiti.react}
              alt=""
              width={512}
              height={512}
              decoding="async"
              loading="lazy"
              aria-hidden={true}
            />
          </h1>
          <p className="hero-title">{site.title}</p>
          <p className="hero-bio">{site.bio}</p>
          <p className="hero-meta">{site.location}</p>
          <ul className="hero-stats" aria-label="Career highlights">
            {site.stats.map((item) => (
              <li key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
          <div className="hero-actions">
            <a className="button button-primary" href={`mailto:${site.email}`}>
              Get in touch
            </a>
            <a className="button button-ghost" href="#work">
              View work
            </a>
            <a
              className="button button-ghost"
              href={site.links.resume}
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          </div>
        </section>

        <section className="section" id="about" aria-labelledby="about-heading">
          <h2 id="about-heading">About</h2>
          <div className="prose">
            <p>
              I am a full-stack software developer currently in Melbourne,
              building modern products with strong foundations in backend
              architecture and frontend experience.
            </p>
            <p>
              I completed my Master's in Information Technology (Professional
              Computing) at Swinburne University of Technology, and I love
              creating secure systems where performance, usability, and trust all
              matter equally.
            </p>
          </div>
        </section>

        <section className="section" id="skills" aria-labelledby="skills-heading">
          <h2 id="skills-heading">Skills</h2>
          <ul className="tag-list">
            {site.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="section" id="education" aria-labelledby="education-heading">
          <h2 id="education-heading">Education</h2>
          <ul className="info-grid">
            {site.education.map((item) => (
              <li key={`${item.school}-${item.period}`} className="info-card">
                <h3>{item.degree}</h3>
                <p className="info-main">{item.school}</p>
                <p className="info-sub">
                  {item.period} · {item.location}
                </p>
                {item.note ? <p className="info-note">{item.note}</p> : null}
              </li>
            ))}
          </ul>
        </section>

        <section className="section" id="work" aria-labelledby="work-heading">
          <h2 id="work-heading">Work</h2>
          <ul className="project-grid">
            {visibleProjects.map((project) => (
              <li key={project.title} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-tags">
                  {project.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="project-links">
                  {project.liveUrl ? (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  ) : null}
                  <a href={project.repoUrl} target="_blank" rel="noreferrer">
                    GitHub Repo
                  </a>
                </div>
              </li>
            ))}
          </ul>
          {site.projects.length > 3 ? (
            <button
              type="button"
              className="button button-ghost view-more"
              onClick={() => setShowAllProjects((current) => !current)}
            >
              {showAllProjects ? 'View less' : 'View more'}
            </button>
          ) : null}
        </section>

        <section className="section" id="experience" aria-labelledby="experience-heading">
          <h2 id="experience-heading">Work Experience</h2>
          <ul className="info-grid">
            {site.experience.map((item) => (
              <li key={`${item.company}-${item.period}`} className="info-card">
                <h3>{item.role}</h3>
                <p className="info-main">{item.company}</p>
                <p className="info-sub">
                  {item.period} · {item.location}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section
          className="section section-contact"
          id="contact"
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading">Contact</h2>
          <p className="contact-lead">
            Interested in collaborating? Send a note — I typically reply within
            a few days.
          </p>
          <a className="contact-email" href={`mailto:${site.email}`}>
            {site.email}
          </a>
          <ul className="social">
            {socialLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href} target="_blank" rel="noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a href={site.links.resume} target="_blank" rel="noreferrer">
                Resume
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer className="site-footer">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with React & Vite.
        </p>
      </footer>
    </>
  )
}

export default App
