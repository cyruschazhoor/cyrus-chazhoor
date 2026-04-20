const projects = [
  {
    title: 'BankShield Pipeline Optimizer',
    domain: 'Banking',
    summary: 'Ranks cybersecurity vendors by compliance fit, urgency signals, and decision-maker accessibility.',
  },
  {
    title: 'Telco Threat Intel Partner Finder',
    domain: 'Telecommunications',
    summary: 'Matches telecom buyers to AI security providers based on risk exposure and budget probability.',
  },
  {
    title: 'CyberAlliance Expansion Map',
    domain: 'Cybersecurity',
    summary: 'Surfaces cross-industry B2B prospects and recommends the fastest route to SQL conversion.',
  },
];

const services = [
  'AI-driven lead discovery across banks, telecom, and cybersecurity organizations',
  'Lead scoring engine using firmographic fit, intent signals, and engagement probability',
  'Automated ICP matching with explainable score breakdowns for sales teams',
  'Secure onboarding workflows for enterprise and regulated industries',
];

const socialProviders = ['Continue with Google', 'Continue with Facebook', 'Continue with iCloud'];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
          <p className="text-lg font-semibold tracking-wide text-cyan-300">CybrConsulting</p>
          <nav aria-label="Primary navigation" className="hidden gap-6 text-sm md:flex">
            <a href="#about" className="hover:text-cyan-300">About</a>
            <a href="#gallery" className="hover:text-cyan-300">Projects</a>
            <a href="#services" className="hover:text-cyan-300">Services</a>
            <a href="#contact" className="hover:text-cyan-300">Contact</a>
            <a href="#signup" className="hover:text-cyan-300">Sign Up</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              AI Lead Generation Tool for B2B
            </p>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Find high-intent B2B leads across banking, cybersecurity, and telecom.
            </h1>
            <p className="mt-6 max-w-xl text-slate-300">
              CybrConsulting helps Company A discover and score leads in Company B and Company C using an AI scoring model
              that prioritizes fit, urgency, and conversion likelihood.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#signup" className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
                Start Free Trial
              </a>
              <a href="#services" className="rounded-lg border border-white/20 px-5 py-3 font-semibold hover:border-cyan-300 hover:text-cyan-300">
                Explore Services
              </a>
            </div>
          </div>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-500/10">
            <h2 className="text-xl font-semibold text-cyan-300">Example Lead Score Output</h2>
            <ul className="mt-5 space-y-4 text-sm text-slate-200">
              <li className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
                <p className="font-semibold">CyberSecure Inc → National Bank Group</p>
                <p className="mt-1 text-slate-300">AI Score: 92/100 · Strong regulatory alignment · Decision maker identified</p>
              </li>
              <li className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
                <p className="font-semibold">BankData Core → TeleComX Enterprise</p>
                <p className="mt-1 text-slate-300">AI Score: 86/100 · Active procurement signals · 45-day close probability</p>
              </li>
              <li className="rounded-xl border border-white/10 bg-slate-900/70 p-4">
                <p className="font-semibold">TeleShield Networks → CyberFort Labs</p>
                <p className="mt-1 text-slate-300">AI Score: 79/100 · Emerging fit · Needs technical discovery call</p>
              </li>
            </ul>
          </article>
        </section>

        <section id="about" className="mx-auto w-full max-w-7xl px-6 py-8">
          <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-8">
            <h2 className="text-3xl font-semibold">About Me</h2>
            <p className="mt-4 max-w-4xl text-slate-300">
              I am a Senior Web Developer focused on building conversion-ready SaaS experiences. This platform is designed for
              B2B growth teams that need actionable lead intelligence, secure onboarding, and scalable workflows that connect
              businesses in highly regulated and technical sectors.
            </p>
          </article>
        </section>

        <section id="gallery" className="mx-auto w-full max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-semibold">Project Gallery</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article key={project.title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
                <p className="text-sm uppercase tracking-[0.18em] text-cyan-300">{project.domain}</p>
                <h3 className="mt-3 text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-slate-300">{project.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="services" className="mx-auto w-full max-w-7xl px-6 py-8">
          <h2 className="text-3xl font-semibold">Services</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <li key={service} className="rounded-xl border border-white/10 bg-slate-900/60 p-5 text-slate-300">
                {service}
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="mx-auto w-full max-w-7xl px-6 py-16">
          <h2 className="text-3xl font-semibold">Contact Form</h2>
          <form className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-slate-900/60 p-6 md:grid-cols-2">
            <label className="text-sm">
              Name
              <input type="text" className="mt-2 w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2" placeholder="Your full name" required />
            </label>
            <label className="text-sm">
              Company Email
              <input type="email" className="mt-2 w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2" placeholder="name@company.com" required />
            </label>
            <label className="text-sm md:col-span-2">
              Company Type
              <select className="mt-2 w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2" defaultValue="">
                <option value="" disabled>Select industry</option>
                <option>Banking</option>
                <option>Cybersecurity</option>
                <option>Telecommunications</option>
              </select>
            </label>
            <label className="text-sm md:col-span-2">
              Message
              <textarea className="mt-2 w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2" rows="4" placeholder="Describe your lead generation goals." />
            </label>
            <button type="submit" className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 md:col-span-2 md:w-fit">
              Submit Request
            </button>
          </form>
        </section>

        <section id="signup" className="mx-auto w-full max-w-7xl px-6 pb-20">
          <div className="grid gap-8 rounded-2xl border border-white/10 bg-slate-900/70 p-8 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold">Sign Up</h2>
              <p className="mt-3 text-slate-300">Create your workspace with email/password or continue with your preferred identity provider.</p>
            </div>
            <form className="space-y-4">
              <label className="block text-sm">
                Work Email
                <input type="email" className="mt-2 w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2" placeholder="you@company.com" required />
              </label>
              <label className="block text-sm">
                Password
                <input type="password" className="mt-2 w-full rounded-lg border border-white/20 bg-slate-950 px-3 py-2" placeholder="Create a strong password" required minLength={8} />
              </label>
              <button type="submit" className="w-full rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
                Create Account
              </button>
              <div className="space-y-2 pt-2">
                {socialProviders.map((provider) => (
                  <button key={provider} type="button" className="w-full rounded-lg border border-white/20 px-4 py-2 text-sm font-medium hover:border-cyan-300 hover:text-cyan-300">
                    {provider}
                  </button>
                ))}
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
