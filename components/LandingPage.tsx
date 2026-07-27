"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { ArrowUpRight, Check, Play, Spark } from "./icons";

type Language = "de" | "en";

const copy = {
  de: {
    nav: ["Instrument", "Bibliothek", "Routinen", "Pro"],
    navIds: ["instrument", "library", "routines", "pro"],
    download: "Im App Store laden",
    eyebrow: "Das Übungsinstrument für Drummer",
    heroTitleA: "Practice like",
    heroTitleB: "timing matters.",
    heroBody:
      "Drumloom verbindet ein präzises Metronom mit Notation, Drum-Playback und Routinen, die dich im Flow halten.",
    lifetime: "Ein Kauf. Für immer.",
    availability: "Für iPhone · Deutsch & Englisch",
    today: "HEUTE",
    accuracy: "Samplegenau",
    noTracking: "Ohne Tracking",
    sectionEyebrow: "Ein Instrument. Kein Menü-Labyrinth.",
    sectionTitle: "Alles, was eine gute Session braucht.",
    sectionBody:
      "Öffnen, Tempo setzen, spielen. Die wichtigen Dinge bleiben im Blick; Details warten dort, wo du sie brauchst.",
    libraryEyebrow: "Groß, aber nicht chaotisch",
    libraryTitle: "1.267 Übungen. Klar sortiert.",
    libraryBody:
      "Grooves, Fills, Rudiments, Stickings, Left Hand und Kick-Patterns – mit lesbarer Vorschau statt rätselhaften Titellisten.",
    shuffle: "Neue Vorschläge",
    levels: "3 Level",
    grooveTitle: "Modern Pocket",
    grooveMeta: "Intermediate · 82–118 BPM",
    routineEyebrow: "Taktgenaue Routinen",
    routineTitle: "Du spielst. Drumloom führt.",
    routineBody:
      "Count-in, Tempo-Steps, Pausen und Blockwechsel laufen automatisch – nie mitten im Takt. Mit Lockscreen-Anzeige und Sprachansagen.",
    features: [
      ["Metronom", "Großer Puls, Tap Tempo, Unterteilungen und Akzente ohne visuelles Rauschen."],
      ["Notation + Sound", "Cursor-synchrones Playback mit Ghost Notes, Flams, Swing und separaten Mixern."],
      ["Poly", "Polyrhythmen und Polymeter sehen, hören und Schicht für Schicht verstehen."],
      ["Eigene Patterns", "R/L, Drumset, Pausen, Akzente und Flams im schnellen Step-Sequencer bauen."],
      ["Fresh Practice", "Täglich neue Vorschläge nach Kategorie und Level statt derselben Routine."],
      ["Fortschritt", "Session-Log, Wochenziel und Tempo-PRs – lokal und ohne Tracking-SDK."]
    ],
    routineSteps: [
      ["01", "Warm-up", "Singles · 80 BPM", "03:00"],
      ["02", "Rudiments", "Tempo ramp · +4", "06:00"],
      ["03", "Groove", "Modern R&B pocket", "08:00"],
      ["04", "Fill", "Bar-accurate changes", "03:00"]
    ],
    freeTitle: "Kostenlos starten.",
    freeBody:
      "Das Standard-Metronom, spielbare Übungen in jeder Hauptkategorie, Daily Rotation und eine Basis-Routine bleiben kostenlos.",
    proTitle: "Alles freischalten.",
    proBody:
      "Die komplette Bibliothek, Poly, Generatoren, unbegrenzte Routinen, alle Sounds und der volle Fortschritt.",
    forever: "dauerhaft",
    noSub: "Kein Abo. Niemals.",
    proBenefits: [
      "1.267 Übungen plus Content-Updates",
      "Alle Routinen, Generatoren und Sounds",
      "Unbegrenzte eigene Patterns",
      "Familienfreigabe"
    ],
    privacyTitle: "Deine Praxis bleibt deine.",
    privacyBody:
      "Kein Account, keine Werbung, kein externes Analytics-SDK. Deine Routinen und Logs bleiben auf deinen Geräten und in deinem privaten iCloud-Bereich.",
    faqTitle: "Kurz beantwortet.",
    faqs: [
      ["Brauche ich ein Abo?", "Nein. Pro ist ein einmaliger Kauf und bleibt dauerhaft freigeschaltet."],
      ["Kann ich Drumloom kostenlos nutzen?", "Ja. Das Standard-Metronom und ein sinnvoller Übungskern sind dauerhaft kostenlos."],
      ["Funktioniert Audio bei gesperrtem Bildschirm?", "Ja. Routinen und Playback laufen im Hintergrund weiter; die Lockscreen-Anzeige zeigt den aktuellen Block."],
      ["Kann ich eigene Übungen bauen?", "Ja. Im Pattern Builder baust du R/L- und Drumset-Patterns als Step-Sequenz und speicherst sie direkt als Übung."]
    ],
    footerLine: "Made for the hours nobody sees.",
    legal: "Impressum",
    privacy: "Datenschutz"
  },
  en: {
    nav: ["Instrument", "Library", "Routines", "Pro"],
    navIds: ["instrument", "library", "routines", "pro"],
    download: "Download on the App Store",
    eyebrow: "The practice instrument for drummers",
    heroTitleA: "Practice like",
    heroTitleB: "timing matters.",
    heroBody:
      "Drumloom brings a precise metronome, readable notation, drum playback and focused routines into one instrument.",
    lifetime: "One purchase. Forever.",
    availability: "For iPhone · English & German",
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
    routineEyebrow: "Bar-accurate routines",
    routineTitle: "You play. Drumloom leads.",
    routineBody:
      "Count-ins, tempo steps, rests and block changes run automatically – never halfway through a bar. With voice cues and a Lock Screen view.",
    features: [
      ["Metronome", "Large pulse, tap tempo, subdivisions and accents without visual noise."],
      ["Notation + sound", "Cursor-synced playback with ghosts, flams, swing and separate mix levels."],
      ["Poly", "See, hear and understand polyrhythms and polymeters layer by layer."],
      ["Custom patterns", "Build R/L, drum kit, rests, accents and flams in a fast step sequencer."],
      ["Fresh practice", "New daily picks by category and level instead of the same routine."],
      ["Progress", "Session history, weekly goals and tempo PRs – local and tracker-free."]
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
      "The full library, Poly, generators, unlimited routines, every sound and complete progress history.",
    forever: "lifetime",
    noSub: "No subscription. Ever.",
    proBenefits: [
      "1,267 exercises plus content updates",
      "Every routine, generator and sound",
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
      ["Can I build my own exercises?", "Yes. The Pattern Builder turns R/L and drum-kit steps into saved custom exercises."]
    ],
    footerLine: "Made for the hours nobody sees.",
    legal: "Legal notice",
    privacy: "Privacy"
  }
} as const;

function StaffPreview() {
  return (
    <div className="staff" aria-label="Notationsvorschau: moderner Groove in Sechzehnteln">
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

function MetronomeInstrument({ language }: { language: Language }) {
  const t = copy[language];
  return (
    <div className="instrument-shell" aria-label="Drumloom Metronom Vorschau">
      <div className="instrument-top">
        <span>{t.today}</span>
        <span className="status-pill">4 / 4</span>
      </div>
      <div className="tempo-block">
        <p>♩</p>
        <strong>118</strong>
        <span>BPM</span>
      </div>
      <div className="pulse-visual" aria-hidden="true">
        <span />
        <span />
        <span className="pulse-active" />
        <span />
      </div>
      <button className="instrument-play" type="button" aria-label="Metronom abspielen">
        <Play />
        <span>START</span>
      </button>
      <div className="instrument-footer">
        <span>1 / 4</span>
        <span>CLICK · WOOD</span>
      </div>
    </div>
  );
}

export default function LandingPage() {
  const [language, setLanguage] = useState<Language>("de");
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Drumloom Startseite">
          <img src="/brand-mark.png" alt="" width="42" height="42" />
          <span>DRUMLOOM</span>
        </Link>
        <nav aria-label="Hauptnavigation">
          {t.nav.map((label, index) => (
            <a href={`#${t.navIds[index]}`} key={label}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <div className="language-switch" aria-label="Sprache wählen">
            <button
              type="button"
              className={language === "de" ? "active" : ""}
              onClick={() => setLanguage("de")}
              aria-pressed={language === "de"}
            >
              DE
            </button>
            <button
              type="button"
              className={language === "en" ? "active" : ""}
              onClick={() => setLanguage("en")}
              aria-pressed={language === "en"}
            >
              EN
            </button>
          </div>
          <a className="button button-small" href={siteConfig.appStoreUrl}>
            {t.download}
          </a>
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
              <a className="button button-primary" href={siteConfig.appStoreUrl}>
                <img src="/brand-mark.png" alt="" width="28" height="28" />
                <span>
                  <small>{language === "de" ? "JETZT LADEN" : "DOWNLOAD NOW"}</small>
                  {t.download}
                </span>
                <ArrowUpRight />
              </a>
              <div className="price-note">
                <strong>{siteConfig.price}</strong>
                <span>{t.lifetime}</span>
              </div>
            </div>
            <div className="trust-row" aria-label="Produktvorteile">
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
              <div className="phone-island" />
              <MetronomeInstrument language={language} />
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

        <section className="feature-grid" id="instrument">
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
            <div className="category-cloud" aria-label="Übungskategorien">
              {["GROOVES 573", "FILLS 202", "RUDIMENTS 134", "KICK 120", "STICKINGS 143", "LEFT HAND 49"].map(
                (category) => (
                  <span key={category}>{category}</span>
                )
              )}
            </div>
          </div>
          <div className="library-demo">
            <div className="demo-header">
              <div>
                <small>GROOVES / MODERN</small>
                <strong>{t.grooveTitle}</strong>
              </div>
              <button type="button" aria-label={t.shuffle}>
                <Spark /> {t.shuffle}
              </button>
            </div>
            <StaffPreview />
            <div className="demo-meta">
              <span>{t.grooveMeta}</span>
              <span>{t.levels}</span>
              <button type="button" aria-label="Vorschau abspielen">
                <Play />
              </button>
            </div>
          </div>
        </section>

        <section className="routine-section section-grid" id="routines">
          <div className="routine-board">
            <div className="routine-board-head">
              <span>DAILY 20</span>
              <strong>20:00</strong>
            </div>
            <div className="routine-list">
              {t.routineSteps.map(([number, title, detail, duration], index) => (
                <div className={index === 1 ? "routine-active" : ""} key={number}>
                  <span>{number}</span>
                  <p>
                    <strong>{title}</strong>
                    <small>{detail}</small>
                  </p>
                  <time>{duration}</time>
                </div>
              ))}
            </div>
            <div className="routine-progress">
              <span />
            </div>
          </div>
          <div className="routine-copy">
            <p className="eyebrow">{t.routineEyebrow}</p>
            <h2>{t.routineTitle}</h2>
            <p>{t.routineBody}</p>
            <div className="routine-badges">
              <span>COUNT-IN</span>
              <span>BPM RAMP</span>
              <span>LOCK SCREEN</span>
              <span>VOICE CUES</span>
            </div>
          </div>
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
            <a className="button button-primary" href={siteConfig.appStoreUrl}>
              {t.download}
              <ArrowUpRight />
            </a>
            <small>{t.noSub}</small>
          </div>
        </section>

        <section className="privacy-strip">
          <img src="/brand-mark.png" alt="" width="68" height="68" />
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
          <img src="/app-icon.png" alt="Drumloom App Icon" width="124" height="124" />
          <p className="eyebrow">{t.eyebrow}</p>
          <h2>
            {t.heroTitleA} <em>{t.heroTitleB}</em>
          </h2>
          <a className="button button-primary" href={siteConfig.appStoreUrl}>
            {t.download}
            <ArrowUpRight />
          </a>
          <p className="closing-note">{t.noSub}</p>
        </section>
      </main>

      <footer>
        <Link className="brand" href="/">
          <img src="/brand-mark.png" alt="" width="38" height="38" />
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

