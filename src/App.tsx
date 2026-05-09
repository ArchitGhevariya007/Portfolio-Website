import { useEffect, useState } from 'react'
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

  useEffect(() => {
    const revealed = document.querySelectorAll<HTMLElement>('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.18 }
    )

    revealed.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [showAllProjects])

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="logo" href="#top">
          {site.name.split(' ')[0]}
        </a>
        <nav className="nav" aria-label="Primary">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top" aria-labelledby="hero-heading" data-reveal>
          <p className="eyebrow">{'<full-stack.dev />'}</p>
          <h1 id="hero-heading">{site.name}</h1>
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

        <section className="section" id="about" aria-labelledby="about-heading" data-reveal>
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

        <section className="section" id="skills" aria-labelledby="skills-heading" data-reveal>
          <h2 id="skills-heading">Skills</h2>
          <ul className="tag-list">
            {site.skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="section" id="work" aria-labelledby="work-heading" data-reveal>
          <h2 id="work-heading">Work</h2>
          <ul className="project-grid">
            {visibleProjects.map((project) => (
              <li key={project.title} className="project-card" data-reveal>
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

        <section
          className="section section-contact"
          id="contact"
          aria-labelledby="contact-heading"
          data-reveal
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
