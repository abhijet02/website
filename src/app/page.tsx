'use client';

import { FaGithub, FaLinkedin, FaLinux, FaYoutube } from 'react-icons/fa';
import { SiGitlab, SiKubernetes, SiVmware } from 'react-icons/si';

export default function Home() {
  const skills = [
    'AWS (EC2, S3, IAM, Elastic Beanstalk)',
    'Azure & Microsoft 365',
    'Google Cloud',
    'VMware ESXi, vSphere, Hyper-V, KVM',
    'Kubernetes & Docker',
    'Terraform & CI/CD (GitLab)',
    'Linux & Windows Server Administration',
    'ISO 27001, ISO 9001, CMMI L-3',
    'ELK Stack, Prometheus, Grafana',
    'Bash, Python, YAML',
  ];

  const services = [
    {
      title: 'Cloud & Infra Engineering',
      description:
        'Design, scale, and harden hybrid environments that stay resilient under real enterprise load.',
    },
    {
      title: 'Platform Reliability',
      description:
        'Build SRE-grade monitoring, alerting, and response playbooks to keep uptime above 99.9%.',
    },
    {
      title: 'Security & Compliance',
      description:
        'Secure-by-default infrastructure, audits, and governance for production-critical systems.',
    },
  ];

  const experience = [
    {
      role: 'Lead System Engineer',
      company: 'BRACIT Services Limited, Dhaka',
      period: 'Jul 2024 - Present',
      highlights: [
        'Lead System & Network Engineering teams and plan capacity upgrades.',
        'Administer GitLab and Harbor registries, optimize CI/CD runners.',
        'Manage Palo Alto and FortiGate firewalls, security hardening, audits.',
        'Operate Hybrid AD/Azure AD (Entra ID) and MECM/SCCM patching.',
      ],
    },
    {
      role: 'System Engineer',
      company: 'BRACIT Services Limited, Dhaka',
      period: 'Jan 2023 - Jun 2024',
      highlights: [
        'Operated 20+ ESXi hosts and 500+ VMs with 99.9% availability.',
        'Managed hybrid email infrastructure (On-Prem + Microsoft 365).',
        'Built monitoring with ELK, Prometheus, Grafana and web stack ops.',
        'Led incident response and RCA for critical system issues.',
      ],
    },
    {
      role: 'System Engineer',
      company: 'BRACIT Services Limited, Dhaka',
      period: 'May 2019 - Dec 2022',
      highlights: [
        'Administered Linux and Windows Server environments.',
        'Delivered automation with Shell, Expect, Sed, and Awk.',
        'Implemented SSL/TLS at scale with hardening and migrations.',
      ],
    },
    {
      role: 'Regional IT Support Engineer',
      company: 'Aamra Networks Limited, Dhaka',
      period: 'Jan 2015 - Dec 2016',
      highlights: [
        'Supported 100+ users and maintained on-prem data center services.',
      ],
    },
  ];

  const certifications = [
    { title: 'VMware Certified Professional - Data Center Virtualization (2024)' },
    { title: 'Certified Kubernetes Administrator (CKA)' },
    { title: 'AWS Fundamentals: Going Cloud-Native' },
    { title: 'CompTIA Server+' },
    { title: 'Red Hat Certified System Administrator' },
    { title: 'Red Hat Fundamentals of Ansible' },
    { title: 'Microsoft Certified: Azure Administrator Associate' },
    { title: 'Microsoft Certified: Windows Server Hybrid Administrator Associate' },
    { title: 'Microsoft 365 Certified: Administrator Expert' },
    { title: 'Microsoft Certified: Information Protection and Compliance Administrator Associate' },
    { title: 'Google System Administration and IT Infrastructure Services' },
  ];

  const training = [
    'Azure Infrastructure Fundamentals - University of Colorado System',
    'Enterprise System Management and Security - University of Colorado System',
    'Red Hat Certified System Administrator (RHCSA)',
    'Red Hat Certified Engineer (RHCE)',
    'Microsoft Certified Solutions Associate (MCSA 2016)',
    'Customer Orientation & Services',
    'Professional Skill Development Program',
    'Skills Development Training on Fire Safety, Basic First Aid & Casualty Management',
  ];

  const languages = [
    'English - Upper Intermediate (B2)',
    'Bengali - Advanced (C1)',
  ];

  const education = ['Master of Science (MSc) in Computer Science and Engineering (CSE)'];

  return (
    <main id="top" className="page">
      <div className="glow glow-1" aria-hidden="true" />
      <div className="glow glow-2" aria-hidden="true" />
      <div className="grid-overlay" aria-hidden="true" />

      <header className="nav">
        <div className="logo">AA</div>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#skills">Skills</a>
          <a href="#resume">Resume</a>
          <a href="#certifications">Certifications</a>
          <a href="#education">Education</a>
          <a href="#training">Training</a>
          <a href="#languages">Languages</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">Lead System Engineer</p>
          <h1 className="hero-title">
            Abhijeet <span>Adhikary</span>
          </h1>
          <p className="hero-subtitle">
            DevOps | System Admin | Cloud | Infrastructure | Security
          </p>
          <p className="hero-body">
            Lead System Engineer with 10+ years of experience running hybrid cloud,
            VMware estates (500+ VMs), Kubernetes clusters, and enterprise
            infrastructure with 99.9% uptime.
          </p>
          <div className="icon-row">
            <a
              className="icon-link"
              href="https://www.credly.com/badges/10659bca-b435-48f4-840c-3e42401e11fc/public_url"
              aria-label="Kubernetes Certification"
            >
              <SiKubernetes />
            </a>
            <a
              className="icon-link"
              href="https://www.credly.com/badges/c92af3c4-d573-4d55-9b00-52f2d80c1f6e"
              aria-label="VMware"
            >
              <SiVmware />
            </a>
            <span className="icon-link" aria-label="GitLab">
              <SiGitlab />
            </span>
            <span className="icon-link" aria-label="Linux">
              <FaLinux />
            </span>
            <a
              className="icon-link"
              href="https://www.youtube.com/@abhijeetadhikary3205"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
            <a
              className="icon-link"
              href="https://github.com/abhijet02"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              className="icon-link"
              href="https://www.linkedin.com/in/abhijeet-adhikary-b6326b1a1/"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
          <div className="hero-stats">
            <div>
              <h3>10+ Years</h3>
              <p>Enterprise Ops</p>
            </div>
            <div>
              <h3>500+ VMs</h3>
              <p>Managed Estate</p>
            </div>
            <div>
              <h3>99.9%</h3>
              <p>Uptime Target</p>
            </div>
          </div>
          <div className="highlights">
            <span>CKA</span>
            <span>VCP</span>
            <span>RHCE</span>
            <span>CDCP</span>
            <span>CompTIA Server+</span>
            <span>O365</span>
          </div>
        </div>

        <div className="hero-card">
          <div className="portrait">
            <img src="/profile.jpg" alt="Abhijeet portrait" />
          </div>
          <div className="hero-card-body">
            <h3>Focus Areas</h3>
            <p>
              Hybrid Cloud - Kubernetes - Security - Reliability - Virtualization -
              On-Prem Data Center
            </p>
            <div className="hero-card-tags">
              <span>DevOps</span>
              <span>Infra</span>
              <span>Automation</span>
              <span>Compliance</span>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section split">
        <div>
          <p className="section-label">About</p>
          <h2 className="section-title">Driving resilient infrastructure at scale.</h2>
        </div>
        <div className="section-card">
          <p>
            Passionate tech enthusiast with hands-on experience in System
            administration, Devops, cloud services, and IT infrastructure
            management.
          </p>
          <div className="badge-row">
            <span>Hybrid Cloud</span>
            <span>VMware</span>
            <span>Kubernetes</span>
            <span>Security</span>
          </div>
        </div>
      </section>

      <section id="services" className="section">
        <div className="section-head">
          <p className="section-label">Services</p>
          <h2 className="section-title">What I deliver</h2>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <div key={service.title} className="card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="skills" className="section">
        <div className="section-head">
          <p className="section-label">Skills</p>
          <h2 className="section-title">Core capabilities</h2>
        </div>
        <div className="skill-grid">
          {skills.map((skill) => (
            <div key={skill} className="skill-pill">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="resume" className="section">
        <div className="section-head">
          <p className="section-label">Resume</p>
          <h2 className="section-title">Experience</h2>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <div key={item.role} className="timeline-item">
              <div>
                <h3>{item.role}</h3>
                <p className="muted">
                  {item.company} - {item.period}
                </p>
              </div>
              <ul className="timeline-highlights">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="certifications" className="section">
        <div className="section-head">
          <p className="section-label">Certifications</p>
          <h2 className="section-title">Credentials & training</h2>
        </div>
        <div className="cert-grid">
          {certifications.map((certification) => (
            <div key={certification.title} className="cert-card">
              <h3>{certification.title}</h3>
              <span className="cert-pill">Credential</span>
            </div>
          ))}
        </div>
      </section>

      <section id="education" className="section">
        <div className="section-head">
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic background</h2>
        </div>
        <div className="skill-grid">
          {education.map((item) => (
            <div key={item} className="skill-pill">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="training" className="section">
        <div className="section-head">
          <p className="section-label">Training</p>
          <h2 className="section-title">Professional training</h2>
        </div>
        <div className="skill-grid">
          {training.map((item) => (
            <div key={item} className="skill-pill">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="languages" className="section">
        <div className="section-head">
          <p className="section-label">Languages</p>
          <h2 className="section-title">Communication</h2>
        </div>
        <div className="skill-grid">
          {languages.map((item) => (
            <div key={item} className="skill-pill">
              {item}
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <div>
          <p className="section-label">Contact</p>
          <h2 className="section-title">Let's build reliable systems together.</h2>
          <p className="muted">
            Reach out for infrastructure modernization, platform reliability, or
            cloud security initiatives.
          </p>
        </div>
        <div className="contact-card">
          <form
            className="contact-form"
            onSubmit={(event) => {
              event.preventDefault();
              const form = event.currentTarget;
              const subject = new FormData(form).get('subject');
              const message = new FormData(form).get('message');
              const email = 'abhijet02@gmail.com';
              const mailto = `mailto:${email}?subject=${encodeURIComponent(
                String(subject || '')
              )}&body=${encodeURIComponent(String(message || ''))}`;
              window.location.href = mailto;
            }}
          >
            <label>
              Subject
              <input name="subject" type="text" placeholder="Subject" required />
            </label>
            <label>
              Message
              <textarea name="message" rows={4} placeholder="Write your message..." required />
            </label>
            <button className="btn btn-primary" type="submit">
              Send Message
            </button>
          </form>
          <div className="contact-links">
            <a href="tel:+8801717934541">+880 1717 934541</a>
            <a href="https://github.com/abhijet02">GitHub</a>
            <a href="https://www.linkedin.com/in/abhijeet-adhikary-b6326b1a1/">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>(c) 2026 Abhijeet Adhikary. All rights reserved.</p>
      </footer>

      <a className="back-to-top" href="#top" aria-label="Back to top">
        ↑
      </a>

      
    </main>
  );
}
