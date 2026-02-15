const curriculum = [
  { title: 'Beginner', points: ['EVM & accounts', 'Solidity syntax', 'Deploy your first contract'] },
  { title: 'Intermediate', points: ['Security 101 (CEI, reentrancy)', 'Events/indexing', 'Testing with Foundry/Hardhat'] },
  { title: 'Advanced', points: ['Proxies & upgrades', 'EIP-712/permit', 'Gas optimization & audits'] }
];

const instructors = [
  { name: 'Asha Patel', title: 'Protocol Engineer', blurb: 'Ex-L2 core team, led multiple smart contract audits.' },
  { name: 'Julian Ortiz', title: 'Security Researcher', blurb: 'Foundry/Hardhat specialist; built replay-safe permit flows.' },
  { name: 'Mina Chen', title: 'DeFi Engineer', blurb: 'Designed upgradeable systems and gas-optimized vaults.' }
];

const outcomes = [
  'Ship production-ready Solidity contracts',
  'Pass security reviews (CEI, reentrancy, signature safety)',
  'Master testing (unit, property, invariants)',
  'Deploy upgradeable systems safely'
];

const faqs = [
  { q: 'Who is this for?', a: 'Builders who know basic JS and want to become Solidity-proficient.' },
  { q: 'How long is it?', a: '8 weeks part-time, with optional advanced extensions.' },
  { q: 'Do I need a wallet?', a: 'We guide setup; no mainnet funds required. Testnets only.' },
  { q: 'Is there career support?', a: 'Yes, portfolio review, mock interviews, and audit-readiness coaching.' }
];

export default function Page() {
  return (
    <>
      <header>
        <div className="container nav">
          <div className="row" style={{ gap: '8px', alignItems: 'center' }}>
            <span className="pill">Solidity Bootcamp</span>
            <strong>Beginner → Expert</strong>
          </div>
          <div className="nav-links">
            <a href="#curriculum">Curriculum</a>
            <a href="#instructors">Instructors</a>
            <a href="#apply">Apply</a>
          </div>
        </div>
        <div className="container hero">
          <div>
            <h1>From zero to production-grade Solidity engineer.</h1>
            <p>
              A focused 8-week program covering EVM fundamentals, secure smart contracts, testing, and upgrades. Built by
              engineers who ship and audit real protocols.
            </p>
            <div className="row" style={{ gap: '10px', flexWrap: 'wrap' }}>
              <button className="button">Apply now</button>
              <button className="button ghost">Download syllabus</button>
            </div>
            <div className="badges" style={{ marginTop: '12px' }}>
              <span className="badge">Live workshops</span>
              <span className="badge">Code reviews</span>
              <span className="badge">Security-first</span>
            </div>
          </div>
          <div className="callout">
            <strong>Outcomes</strong>
            <ul>
              {outcomes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        </div>
      </header>

      <main>
        <section id="curriculum" className="section">
          <div className="container">
            <h2>Curriculum</h2>
            <p>Three tracks, one goal: make you production-ready.</p>
            <div className="grid cards">
              {curriculum.map((c) => (
                <div className="card" key={c.title}>
                  <h3>{c.title}</h3>
                  <ul>
                    {c.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="instructors" className="section" style={{ background: 'rgba(15,23,42,0.6)', borderTop: '1px solid #0f172a', borderBottom: '1px solid #0f172a' }}>
          <div className="container">
            <h2>Meet your instructors</h2>
            <p>Protocol engineers and security researchers with real-world shipping experience.</p>
            <div className="grid cards">
              {instructors.map((i) => (
                <div className="card" key={i.name}>
                  <h3>{i.name}</h3>
                  <p className="muted">{i.title}</p>
                  <p>{i.blurb}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="apply">
          <div className="container">
            <h2>Apply & pricing</h2>
            <p>Limited cohort size for hands-on reviews.</p>
            <div className="grid cards" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
              <div className="card">
                <h3>Cohort</h3>
                <p>$1,500 · Live workshops · Weekly code review · Capstone.</p>
                <button className="button" style={{ marginTop: '8px' }}>Apply for next cohort</button>
              </div>
              <div className="card">
                <h3>Self-paced</h3>
                <p>$299 · All modules · Quizzes · Optional mentor add-on.</p>
                <button className="button ghost" style={{ marginTop: '8px' }}>Get self-paced</button>
              </div>
              <div className="card">
                <h3>Enterprise</h3>
                <p>Team onboarding, custom audits, and private office hours.</p>
                <button className="button ghost" style={{ marginTop: '8px' }}>Talk to us</button>
              </div>
            </div>
          </div>
        </section>

        <section className="section faq">
          <div className="container">
            <h2>FAQs</h2>
            <div className="grid" style={{ gap: '12px' }}>
              {faqs.map((f) => (
                <div className="faq-item" key={f.q}>
                  <h4>{f.q}</h4>
                  <p>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          Ready to build in Solidity? Join the next cohort.
        </div>
      </footer>
    </>
  );
}
