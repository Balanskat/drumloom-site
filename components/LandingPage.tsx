import type { ReactNode } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ArrowUpRight, Check, Play, Spark } from "./icons";

const copy = {
  en: {
    nav: ["App", "Library", "Create", "Pro"],
    navIds: ["app", "library", "create", "pro"],
    download: "Download on the App Store",
    comingSoon: "Coming soon to the App Store",
    eyebrow: "The practice instrument for drummers",
    heroTitleA: "Practice like",
    heroTitleB: "timing matters.",
    heroBody:
      "Drumloom brings a precise metronome, readable notation, drum playback and focused routines into one instrument.",
    lifetime: "One purchase. Forever.",
    availability: "For iPhone · English interface",
    today: "TODAY",
    accuracy: "Sample-accurate",
    noTracking: "No tracking",
    sectionEyebrow: "One instrument. No menu maze.",
    sectionTitle: "Everything a focused session needs.",
    sectionBody:
      "Open it, set the tempo and play. The essentials stay visible; deeper controls are there when you need them.",
    libraryEyebrow: "Deep, never chaotic",
    libraryTitle: "1,267 exercises. Clearly organized.",
    libraryBody:
      "Grooves, fills, rudiments, stickings, left-hand and kick patterns – with readable previews instead of mystery titles.",
    shuffle: "Fresh picks",
    levels: "3 levels",
    grooveTitle: "Modern Pocket",
    grooveMeta: "Intermediate · 82–118 BPM",
    routineEyebrow: "Learn This · guided practice",
    routineTitle: "From learning the shape to owning the pocket.",
    routineBody:
      "Start any exercise as a guided five-step session: learn the shape, build control and speed, test your own clock, then play the target run. Turn it into a focused five-day path when you want to go deeper.",
    createEyebrow: "Beat Builder · Fill Builder · Manual",
    createTitle: "Start musically. Shape every detail.",
    createBody:
      "Beat Builder grows a groove from its kick-and-snare foundation through cymbals, toms and hi-hat foot. Fill Builder starts with a sticking, then adds accents, voices and footwork. The manual grid stays ready for complete control.",
    tunerEyebrow: "Tune drums without the guesswork",
    tunerTitle: "Pitch, lugs, heads and spectrum.",
    tunerBody:
      "The drum tuner guides you from the fundamental to every lug and saves setups for your complete kit.",
    features: [
      ["Metronome", "Large pulse, tap tempo, subdivisions and accents without visual noise."],
      ["Notation + sound", "Cursor-synced playback with ghosts, flams, swing and separate mix levels."],
      ["Poly", "See, hear and understand polyrhythms and polymeters layer by layer."],
      ["Beat + Fill Builder", "Develop grooves from kick/snare skeletons and fills from stickings – guided or freely in the grid."],
      ["Learn This", "Learn an exercise in five steps, then keep going with an optional focused five-day path."],
      ["Practice Modes", "Click Displacement, Feel Transitions and Pocket Trainer challenge timing from three directions."]
    ],
    routineSteps: [
      ["01", "Warm-up", "Singles · 80 BPM", "03:00"],
      ["02", "Rudiments", "Tempo ramp · +4", "06:00"],
      ["03", "Groove", "Modern R&B pocket", "08:00"],
      ["04", "Fill", "Bar-accurate changes", "03:00"]
    ],
    freeTitle: "Start free.",
    freeBody:
      "The standard metronome, playable exercises in every main category, Daily Rotation and one core routine stay free.",
    proTitle: "Unlock everything.",
    proBody:
      "The full library, Poly, builders, unlimited routines, every sound and complete progress history.",
    forever: "lifetime",
    noSub: "No subscription. Ever.",
    proBenefits: [
      "1,267 exercises plus content updates",
      "Every routine, builder and sound",
      "Unlimited custom patterns",
      "Family Sharing"
    ],
    privacyTitle: "Your practice stays yours.",
    privacyBody:
      "No account, no ads, no third-party analytics SDK. Your routines and logs stay on your devices and in your private iCloud container.",
    faqTitle: "Straight answers.",
    faqs: [
      ["Do I need a subscription?", "No. Pro is a single lifetime purchase."],
      ["Can I use Drumloom for free?", "Yes. The standard metronome and a useful practice core remain free."],
      ["Does audio work with the screen locked?", "Yes. Routines and playback continue in the background while the Lock Screen shows the current block."],
      ["Can I build my own exercises?", "Yes. Beat Builder and Fill Builder guide the musical setup, while the manual grid lets you edit every step yourself."]
    ],
    modesEyebrow: "Practice Modes",
    modesTitle: "Your timing has more than one comfort zone.",
    modesBody:
      "Displace the click, move between feels or practice deliberately ahead of, on and behind the beat. Each mode reveals a different side of your timing.",
    modes: ["Displace the Click", "Change Feel", "Find the Pocket"],
    countEyebrow: "Notation + export",
    countTitle: "Counts where they help.",
    countBody:
      "Show beat counts as an optional notation overlay and include them in PDF or PNG exports of your own creations.",
    footerLine: "Made for the hours nobody sees.",
    legal: "Legal notice",
    privacy: "Privacy"
  }
} as const;

function StoreLink({ className, children }: { className: string; children: ReactNode }) {
  if (!siteConfig.isAppStoreReady) {
    return (
      <span className={`${className} button-disabled`} aria-disabled="true">
        {children}
      </span>
    );
  }

  return (
    <a className={className} href={siteConfig.appStoreUrl}>
      {children}
    </a>
  );
}

function LearnThisPreview() {
  const steps = ["Learn the Shape", "Build Control", "Build Speed", "Trust Your Clock", "Target Run"];

  return (
    <div className="learn-preview" aria-label="Learn This five-step session">
      <div className="preview-topline"><span>LEARN THIS</span><strong>1 / 5</strong></div>
      {steps.map((step, index) => (
        <div className={index === 0 ? "learn-step active" : "learn-step"} key={step}>
          <span>0{index + 1}</span><strong>{step}</strong>{index === 0 && <Play />}
        </div>
      ))}
      <div className="path-pill"><Spark /> MAKE IT A 5-DAY PATH</div>
    </div>
  );
}

function BuilderPreview() {
  return (
    <div className="builder-preview" aria-label="Beat Builder preview">
      <div className="preview-topline"><span>BEAT BUILDER</span><strong>2 / 6</strong></div>
      <h3>KICK + SNARE</h3>
      <div className="builder-grid" aria-hidden="true">
        {["K", "·", "·", "·", "S", "·", "K", "·", "K", "·", "·", "·", "S", "·", "·", "·"].map((step, index) => (
          <span className={step === "K" || step === "S" ? "active" : ""} key={`${step}-${index}`}>{step}</span>
        ))}
      </div>
      <div className="builder-stages">
        {["SETUP", "FOUNDATION", "DETAILS", "CYMBALS", "TOMS", "HH FOOT"].map((stage, index) => (
          <i className={index < 2 ? "active" : ""} title={stage} key={stage} />
        ))}
      </div>
    </div>
  );
}

function LibraryPreview() {
  const categories = [
    ["SINGLE STROKES", "46"], ["RUDIMENTS", "134"],
    ["STICKINGS", "143"], ["LEFT HAND", "49"],
    ["KICK PATTERNS", "120"], ["GROOVES", "573"]
  ];

  return (
    <div className="library-preview" aria-label="Drumloom Library preview">
      <div className="preview-topline"><span>LIBRARY</span><strong>1,267 EXERCISES</strong></div>
      <h3>Explore. Hear. Play.</h3>
      <div className="search-preview">SEARCH EXERCISES</div>
      <div className="category-preview-grid">
        {categories.map(([name, count]) => (
          <div key={name}><span>{name}</span><strong>{count}</strong></div>
        ))}
      </div>
    </div>
  );
}

function TunerPreview() {
  return (
    <div className="tuner-preview" aria-label="Drumloom Drum Tuner preview">
      <div className="preview-topline"><span>DRUM TUNER</span><strong>SNARE</strong></div>
      <div className="tuner-dial">
        <span>G3</span><strong>196.0</strong><small>HZ</small>
      </div>
      <div className="tuner-spectrum" aria-hidden="true">
        {[32, 54, 78, 45, 92, 68, 39, 57, 34].map((height, index) => (
          <i style={{ height: `${height}%` }} key={`${height}-${index}`} />
        ))}
      </div>
      <div className="path-pill">CAPTURE READING</div>
    </div>
  );
}

function StaffPreview() {
  return (
    <div className="staff" aria-label="Notation preview: modern sixteenth-note groove">
      <span className="staff-lines" />
      {[8, 20, 33, 45, 57, 70, 82, 94].map((left, index) => (
        <span
          className={`note ${index === 4 ? "note-accent" : ""}`}
          style={{ left: `${left}%`, top: index % 3 === 0 ? "34%" : "46%" }}
          key={left}
        >
          <i />
        </span>
      ))}
      <span className="cursor-line" />
    </div>
  );
}

function AppScreenshot({ src, alt, className = "", loading = "lazy" }: { src: string; alt: string; className?: string; loading?: "lazy" | "eager" }) {
  return (
    <img
      className={`app-screenshot ${className}`}
      src={siteConfig.asset(`/screenshots/${src}`)}
      alt={alt}
      loading={loading}
    />
  );
}

export default function LandingPage() {
  const t = copy.en;
  const storeLabel = siteConfig.isAppStoreReady ? t.download : t.comingSoon;

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Drumloom home">
          <img src={siteConfig.asset("/brand-mark.png")} alt="" width="42" height="42" />
          <span>DRUMLOOM</span>
        </Link>
        <nav aria-label="Main navigation">
          {t.nav.map((label, index) => (
            <a href={`#${t.navIds[index]}`} key={label}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <StoreLink className="button button-small">{storeLabel}</StoreLink>
        </div>
      </header>

      <main id="main">
        <section className="hero section-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="live-dot" />
              {t.eyebrow}
            </p>
            <h1>
              {t.heroTitleA}
              <br />
              <em>{t.heroTitleB}</em>
            </h1>
            <p className="hero-body">{t.heroBody}</p>
            <div className="hero-actions">
              <StoreLink className="button button-primary">
                <img src={siteConfig.asset("/brand-mark.png")} alt="" width="28" height="28" />
                <span>
                  <small>APP STORE</small>
                  {storeLabel}
                </span>
                <ArrowUpRight />
              </StoreLink>
              <div className="price-note">
                <strong>{siteConfig.price}</strong>
                <span>{t.lifetime}</span>
              </div>
            </div>
            <div className="trust-row" aria-label="Product benefits">
              <span>
                <Check /> {t.accuracy}
              </span>
              <span>
                <Check /> {t.noTracking}
              </span>
              <span>
                <Check /> {t.availability}
              </span>
            </div>
          </div>
          <div className="hero-visual">
            <span className="orb orb-one" />
            <span className="orb orb-two" />
            <div className="phone-frame">
              <AppScreenshot src="metronome.png" alt="Drumloom Metronome screen showing 120 BPM and the green Start control" loading="eager" />
            </div>
            <div className="floating-card card-timing">
              <span className="metric-icon">±</span>
              <div>
                <strong>0.0 ms</strong>
                <small>{t.accuracy}</small>
              </div>
            </div>
            <div className="floating-card card-session">
              <Spark />
              <div>
                <strong>Daily 20</strong>
                <small>6 blocks · 20 min</small>
              </div>
            </div>
          </div>
        </section>

        <section className="statement">
          <div>
            <p className="eyebrow">{t.sectionEyebrow}</p>
            <h2>{t.sectionTitle}</h2>
          </div>
          <p>{t.sectionBody}</p>
        </section>

        <section className="feature-grid" id="app">
          {t.features.map(([title, body], index) => (
            <article className={`feature-card feature-${index + 1}`} key={title}>
              <div className="feature-number">0{index + 1}</div>
              {index === 0 && (
                <div className="mini-metronome" aria-hidden="true">
                  <span />
                  <span className="active" />
                  <span />
                  <span />
                </div>
              )}
              {index === 1 && <StaffPreview />}
              {index === 2 && (
                <div className="poly-rings" aria-hidden="true">
                  <i />
                  <i />
                  <strong>3:4</strong>
                </div>
              )}
              {index === 3 && (
                <div className="steps" aria-hidden="true">
                  {["R", "L", "R", "—", "K", "L", "R", "F"].map((step, i) => (
                    <span className={i === 4 || i === 7 ? "hot" : ""} key={`${step}-${i}`}>
                      {step}
                    </span>
                  ))}
                </div>
              )}
              {index === 4 && (
                <div className="shuffle-visual" aria-hidden="true">
                  <span>R</span>
                  <span>L</span>
                  <span>K</span>
                  <Spark />
                </div>
              )}
              {index === 5 && (
                <div className="chart-visual" aria-hidden="true">
                  {[32, 45, 40, 58, 66, 82, 94].map((height) => (
                    <i style={{ height: `${height}%` }} key={height} />
                  ))}
                </div>
              )}
              <div className="feature-copy">
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            </article>
          ))}
        </section>

        <section className="library-section section-grid" id="library">
          <div className="library-copy">
            <p className="eyebrow">{t.libraryEyebrow}</p>
            <h2>{t.libraryTitle}</h2>
            <p>{t.libraryBody}</p>
            <div className="category-cloud" aria-label="Exercise categories">
              {["GROOVES 573", "FILLS 202", "RUDIMENTS 134", "KICK 120", "STICKINGS 143", "LEFT HAND 49"].map(
                (category) => (
                  <span key={category}>{category}</span>
                )
              )}
            </div>
          </div>
          <div className="product-shot product-shot-library">
            <AppScreenshot src="library.png" alt="Drumloom Library screen with exercise categories" />
          </div>
        </section>

        <section className="routine-section section-grid" id="routines">
          <div className="product-shot product-shot-practice">
            <AppScreenshot src="practice.png" alt="Drumloom Practice screen with a Daily 20 session" />
          </div>
          <div className="routine-copy">
            <p className="eyebrow">{t.routineEyebrow}</p>
            <h2>{t.routineTitle}</h2>
            <p>{t.routineBody}</p>
            <div className="routine-badges">
              <span>5 STEPS</span>
              <span>5-DAY PATH</span>
              <span>GAP CLICK</span>
              <span>TARGET RUN</span>
            </div>
          </div>
        </section>

        <section className="craft-section" id="create">
          <article className="craft-card craft-create">
            <div className="craft-copy">
              <p className="eyebrow">{t.createEyebrow}</p>
              <h2>{t.createTitle}</h2>
              <p>{t.createBody}</p>
              <div className="routine-badges">
                <span>BEAT BUILDER</span>
                <span>FILL BUILDER</span>
                <span>MANUAL GRID</span>
              </div>
            </div>
            <div className="craft-device">
              <AppScreenshot src="metronome.png" alt="Drumloom Metronome screen from the real app" />
            </div>
          </article>

          <article className="craft-card craft-tuner">
            <div className="craft-copy">
              <p className="eyebrow">{t.tunerEyebrow}</p>
              <h2>{t.tunerTitle}</h2>
              <p>{t.tunerBody}</p>
              <div className="routine-badges">
                <span>PITCH</span>
                <span>LUGS</span>
                <span>HEADS</span>
                <span>SPECTRUM</span>
              </div>
            </div>
            <div className="craft-device">
              <AppScreenshot src="tuner.png" alt="Drumloom Drum Tuner screen with pitch, lugs, heads and spectrum" />
            </div>
          </article>
        </section>

        <section className="advanced-section" aria-label="Advanced practice and notation">
          <article className="advanced-card modes-card">
            <p className="eyebrow">{t.modesEyebrow}</p>
            <h2>{t.modesTitle}</h2>
            <p>{t.modesBody}</p>
            <div className="mode-list">
              {t.modes.map((mode, index) => (
                <div key={mode}><span>0{index + 1}</span><strong>{mode}</strong></div>
              ))}
            </div>
          </article>
          <article className="advanced-card count-card">
            <p className="eyebrow">{t.countEyebrow}</p>
            <h2>{t.countTitle}</h2>
            <p>{t.countBody}</p>
            <div className="count-preview" aria-label="Count overlay preview">
              <div className="count-notes"><i /><i /><i /><i /></div>
              <div className="count-labels"><span>1 e + a</span><span>2 e + a</span><span>3 e + a</span><span>4 e + a</span></div>
              <div className="export-pills"><span>PDF</span><span>PNG</span></div>
            </div>
          </article>
        </section>

        <section className="pricing-section" id="pro">
          <div className="price-card free-card">
            <p>FREE</p>
            <h2>{t.freeTitle}</h2>
            <p>{t.freeBody}</p>
            <strong>0 €</strong>
          </div>
          <div className="price-card pro-card">
            <div className="pro-glow" />
            <p>DRUMLOOM PRO</p>
            <h2>{t.proTitle}</h2>
            <p>{t.proBody}</p>
            <div className="price">
              <strong>{siteConfig.price}</strong>
              <span>{t.forever}</span>
            </div>
            <ul>
              {t.proBenefits.map((benefit) => (
                <li key={benefit}>
                  <Check /> {benefit}
                </li>
              ))}
            </ul>
            <StoreLink className="button button-primary">
              {storeLabel}
              <ArrowUpRight />
            </StoreLink>
            <small>{t.noSub}</small>
          </div>
        </section>

        <section className="privacy-strip">
          <img src={siteConfig.asset("/brand-mark.png")} alt="" width="68" height="68" />
          <div>
            <h2>{t.privacyTitle}</h2>
            <p>{t.privacyBody}</p>
          </div>
          <div className="privacy-tags">
            <span>NO ACCOUNT</span>
            <span>NO ADS</span>
            <span>PRIVATE iCLOUD</span>
          </div>
        </section>

        <section className="faq-section">
          <h2>{t.faqTitle}</h2>
          <div className="faq-list">
            {t.faqs.map(([question, answer]) => (
              <details key={question}>
                <summary>{question}</summary>
                <p>{answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="closing" id="download">
          <img src={siteConfig.asset("/app-icon.png")} alt="Drumloom App Icon" width="124" height="124" />
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>
            {t.heroTitleA} <em>{t.heroTitleB}</em>
          </h2>
          <StoreLink className="button button-primary">
            {storeLabel}
            <ArrowUpRight />
          </StoreLink>
          <p className="closing-note">{t.noSub}</p>
        </section>
      </main>

      <footer>
        <Link className="brand" href="/">
          <img src={siteConfig.asset("/brand-mark.png")} alt="" width="38" height="38" />
          <span>DRUMLOOM</span>
        </Link>
        <p>{t.footerLine}</p>
        <div>
          <Link href="/privacy">{t.privacy}</Link>
          <Link href="/legal">{t.legal}</Link>
          <a href={`mailto:${siteConfig.supportEmail}`}>Support</a>
        </div>
        <small>© 2026 Drumloom</small>
      </footer>
    </>
  );
}
