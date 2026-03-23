import React from 'react';
import Header from './components/Header';
import Logo from './components/Logo';

function App() {
  return (
    <div className="app-container grid-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="section hero">
          <div className="radial-vignette" style={{ position: 'absolute', inset: 0, zIndex: -1 }}></div>
          <div className="overline">Human-AI Infrastructure</div>
          <h1 className="hero-headline">We build infrastructure where humans and AI work as one.</h1>
          <p className="hero-subheadline">
            Origin Labs creates applied AI systems for enterprise operations, automation, and creative intelligence.
          </p>
          <div className="hero-actions">
            <a href="#products" className="btn btn-primary">Explore Products</a>
            <a href="#vision" className="btn btn-outline">Our Vision</a>
          </div>
        </section>

        {/* Research & Economic Futures */}
        <section id="research" className="section research-section">
          <div className="research-header">
            <div className="overline">Research & Economic Futures</div>
            <h2 className="research-title">We study the economics of what we build.</h2>
          </div>
          <p className="research-intro">
            Origin Labs maintains an active research agenda at the frontier of human-AI operational economics. We believe the companies that will win the next decade are those that understand not just how to deploy AI, but what it fundamentally does to cost structures, team design, and the nature of enterprise value creation.
          </p>
          <div className="research-cards">
            <div className="research-card">
              <div className="research-card-number">01</div>
              <h3 className="research-card-title">Human-AI Labor Economics</h3>
              <p className="research-card-desc">
                We study how AI-augmented teams change the fundamental economics of enterprise labor — not just speed, but cost structure, decision quality, and skill premiums. Our research examines what happens to output-per-person when AI absorbs the low-value work, and how organizations should price and structure talent as a result.
              </p>
            </div>
            <div className="research-card">
              <div className="research-card-number">02</div>
              <h3 className="research-card-title">Operational Friction Analysis</h3>
              <p className="research-card-desc">
                Most enterprise costs are invisible. They live in the handoffs, the approval loops, the manual re-entry, the meetings that should have been a workflow. We map these friction points systematically — quantifying the operational load that AI automation can eliminate without touching the judgment calls that require humans.
              </p>
            </div>
            <div className="research-card">
              <div className="research-card-number">03</div>
              <h3 className="research-card-title">Creative Output Economics</h3>
              <p className="research-card-desc">
                AI is fundamentally altering the economics of creative production. We research how multi-engine AI systems change the cost-per-asset curve, the throughput ceiling of creative teams, and the new skill sets that become valuable when generation is fast and revision is cheap. This underpins the architecture behind Mimphes.
              </p>
            </div>
            <div className="research-card">
              <div className="research-card-number">04</div>
              <h3 className="research-card-title">Workforce Architecture for the AI Era</h3>
              <p className="research-card-desc">
                The org charts of the next decade will look different. We study how enterprises should restructure roles, reporting lines, and incentive systems as AI agents take on more operational load. The question is not whether to redesign — it's how to do it without losing institutional knowledge or burning out the people who carry it.
              </p>
            </div>
          </div>
          <div className="thesis-section">
            <div className="overline">Our Thesis</div>
            <blockquote className="thesis-quote">
              "The organizations that treat AI as a tool will be outcompeted by those who treat it as a team member. The infrastructure for that shift does not yet exist. We are building it."
            </blockquote>
            <div className="thesis-attr">— Origin Labs Research Agenda, 2025</div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="section">
          <div className="overline" style={{ marginBottom: '40px' }}>What We Build</div>
          <h2 className="section-title" style={{ marginBottom: '48px' }}>Products that redefine scale.</h2>
          <div className="products-grid">
            <a href="https://crosspath.sandbloc.com/" className="product-card" target="_blank" rel="noopener noreferrer">
              <div className="product-image">
                <img src="/crosspath-product.png" alt="Crosspath" />
              </div>
              <div className="product-content">
                <div className="product-tag">
                  <span>Enterprise Automation</span>
                </div>
                <h3 className="product-name">Crosspath</h3>
                <p className="product-type">Human + AI Workforce Platform</p>
                <p className="product-desc">Crosspath helps enterprise teams run human and AI agents as one unified workforce. Automate repetitive operations, route intelligent work, and scale without headcount pressure.</p>
              </div>
            </a>
            <a href="https://studio.sandbloc.com/" className="product-card" target="_blank" rel="noopener noreferrer">
              <div className="product-image">
                <img src="/mimphes-product.png" alt="Mimphes" />
              </div>
              <div className="product-content">
                <div className="product-tag">
                  <span>Creative Intelligence</span>
                </div>
                <h3 className="product-name">Mimphes</h3>
                <p className="product-type">Multi-Engine Creative Studio</p>
                <p className="product-desc">Mimphes is a professional image and video production platform powered by multiple AI engines. Built for creative teams that need quality, speed, and control at scale.</p>
              </div>
            </a>
          </div>
        </section>

        {/* Vision Section */}
        <section id="vision" className="section vision-section">
          <div className="vision-split">
            <div className="vision-content">
              <div className="overline">Our Mission</div>
              <h2 className="vision-headline">The next era of performance isn't about replacing humans.</h2>
              <p className="vision-text">
                We believe the future belongs to teams that operate as a unified workforce — where human intuition and AI scale work in sync, not in competition.
              </p>
              <p className="vision-text">
                Origin Labs exists to build that infrastructure layer. We help enterprise teams automate repetitive work, reduce operational load, and scale without burning out the people behind them.
              </p>
              <blockquote className="vision-quote">
                "The future of work is human + AI, operating in total synchronization. Systems that augment, not replace."
              </blockquote>
            </div>
            <div className="vision-image-wrapper">
              <img src="/human-ai-face.png" alt="Human and AI — two sides of one team" className="vision-image" />
              <div className="vision-labels">
                <span className="vision-label">Human</span>
                <span className="vision-label">AI</span>
              </div>
            </div>
          </div>
        </section>

        {/* Why Origin Labs */}
        <section className="section features-section">
          <div className="features-header">
            <div className="overline">Why Origin Labs</div>
            <h2 className="section-title">Built for enterprise.</h2>
          </div>
          <div className="features-content">
            <div className="features-list">
              <div className="feature-item">
                <h3 className="feature-name">Infrastructure-First</h3>
                <p className="feature-desc">We build systems, not demos. Every product ships with the reliability and scalability enterprise operations demand.</p>
              </div>
              <div className="feature-item">
                <h3 className="feature-name">Human-Centered AI</h3>
                <p className="feature-desc">Our systems augment teams, not replace them. People stay in control; AI handles the repetitive operational load.</p>
              </div>
              <div className="feature-item">
                <h3 className="feature-name">Composable by Design</h3>
                <p className="feature-desc">Each product integrates smoothly with your existing stack. No vendor lock-in. No rip-and-replace required.</p>
              </div>
              <div className="feature-item">
                <h3 className="feature-name">Globally Scalable</h3>
                <p className="feature-desc">Designed from the ground up for teams operating across regions, time zones, and industries.</p>
              </div>
            </div>
            <div className="features-image">
              <img src="/infrastructure-diagram.png" alt="Infrastructure Diagram" />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="section team-section">
          <div className="overline">Our Team</div>
          <h2 className="team-headline">Built by people who have seen what breaks at scale.</h2>
          <p className="team-intro">
            Origin Labs is a small, focused group of builders, researchers, and operators. We came from enterprise infrastructure, AI research, creative production, and operational roles inside companies where complexity had quietly become the enemy of performance. We founded Origin Labs because we kept seeing the same problem — talented people buried in work that shouldn't require them.
          </p>
          <div className="team-image" style={{ overflow: 'hidden', marginTop: '48px' }}>
            <img src="/about-team.png" alt="Origin Labs team" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div className="team-values">
            <div className="team-value">
              <h3 className="team-value-title">We have felt the problem.</h3>
              <p className="team-value-desc">Every person at Origin Labs has spent time inside enterprise operations — not observing from the outside, but running workflows, managing operational overhead, and hitting the ceiling of what human teams can sustain. We build from memory, not theory.</p>
            </div>
            <div className="team-value">
              <h3 className="team-value-title">We are builders, not researchers.</h3>
              <p className="team-value-desc">We do research to inform what we ship — not to publish papers. Every insight from our economic futures work feeds directly into product decisions. If we can't build it, it doesn't matter that we understand it.</p>
            </div>
            <div className="team-value">
              <h3 className="team-value-title">We keep the team small on purpose.</h3>
              <p className="team-value-desc">A large internal team would contradict everything we preach about operational efficiency. We operate lean, move with precision, and treat headcount as a constraint that sharpens judgment — not a metric to optimize for its own sake.</p>
            </div>
          </div>
          <div className="team-disciplines">
            <div className="disciplines-label">Disciplines</div>
            <div className="disciplines-grid">
              <div className="discipline">
                <h4 className="discipline-title">Founders & Strategy</h4>
                <p className="discipline-desc">Enterprise and infrastructure background. Spent careers in operations, product, and AI before founding Origin Labs with the conviction that the infrastructure layer for human-AI teams was missing.</p>
              </div>
              <div className="discipline">
                <h4 className="discipline-title">Research & Intelligence</h4>
                <p className="discipline-desc">Applied AI researchers focused on human-AI collaboration economics. Background in organizational behavior, ML systems, and enterprise workflow modeling. Translate research directly into product architecture.</p>
              </div>
              <div className="discipline">
                <h4 className="discipline-title">Engineering & Infrastructure</h4>
                <p className="discipline-desc">Distributed systems and infrastructure engineers. Have built systems at scale inside enterprise environments. Design for reliability, composability, and long operational lifespans — not for demos.</p>
              </div>
              <div className="discipline">
                <h4 className="discipline-title">Creative Technology</h4>
                <p className="discipline-desc">Specialists in AI-driven media generation and multi-engine creative systems. Built the technical foundation of Mimphes with backgrounds spanning visual production, media infrastructure, and generative AI.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="section cta-section">
          <h2 className="cta-headline">Ready to see what's possible?</h2>
          <p className="cta-text">
            Talk to our team about how Origin Labs products can reduce operational load and unlock new scale for your organization.
          </p>
          <div className="cta-actions">
            <a href="mailto:contact@originlabs.ai" className="btn btn-primary">Schedule a Call</a>
            <a href="mailto:contact@originlabs.ai" className="btn btn-outline">Email Us</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-brand">
              <Logo />
              <p className="footer-desc">An applied AI innovation group building enterprise infrastructure for the human-AI era.</p>
            </div>
            <div className="footer-links">
              <div className="footer-col">
                <h4>Navigation</h4>
                <ul>
                  <li><a href="#products">Products</a></li>
                  <li><a href="#vision">Vision</a></li>
                  <li><a href="#research">Research</a></li>
                  <li><a href="#team">Team</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Connect</h4>
                <ul>
                  <li><a href="#">LinkedIn</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="mailto:contact@originlabs.ai">Email Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-legal">
            <div>&copy; 2026 Origin Labs. All rights reserved.</div>
            <div className="footer-legal-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
