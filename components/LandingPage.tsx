"use client";

import { useState } from "react";
import Link from "next/link";
import { siteConfig as site } from "@/lib/site-config";
import RhythmScene from "./RhythmScene";

const views = [
  { name: "Practice", title: "See the rhythm. Feel the progress.", text: "1,601 exercises, cursor-synced notation and distinct right- and left-hand voices. Start with singles. Find your next groove.", image: "rudiment-card.png", alt: "Drumloom drum notation with sticking and beat counts", tags: "Singles · Rudiments · Stickings · Grooves · Fills" },
  { name: "Create", title: "The pattern in your head, on the page.", text: "Build a beat or fill, edit every step and shape ghost notes, flams and accents. Fresh random suggestions get you started.", image: "beat-builder-card.png", alt: "Drumloom pattern editor with hi-hat, snare and kick steps", tags: "Beat Builder · Fill Builder · Step sequencer" },
  { name: "Import", title: "From screenshot to your next session.", text: "Turn PDFs, photos and screenshots into playable notation drafts. Review the reading, correct notes and make the groove your own.", image: "import-card.png", alt: "Drumloom notation import preview and correction controls", tags: "PDF · Photos · Screenshots · MIDI · MusicXML" },
  { name: "Tune", title: "Give every session a better starting point.", text: "Tune the drum in front of you with pitch, lug and head tools, a live spectrum and saved setups for your kit.", image: "tuner-card.png", alt: "Drumloom drum tuner pitch dial", tags: "Pitch · Lugs · Heads · Spectrum" }
];
const features = [
  ["Time, under control.", "Meters, subdivisions, accents, separate levels and a live beat display. Polyrhythms and polymeters with up to four layers."],
  ["A session that flows.", "Bar-accurate routines handle count-in, tempo changes, repeats, rests and voice cues. Learn This adds guided sessions and five-day paths."],
  ["Every detail, audible.", "Ghost notes, flams, drags, accents, swing and full-kit playback. Click Displacement, Feel Transitions and Pocket Trainer sharpen your timing."],
  ["Connected to your kit.", "Import and export MIDI and MusicXML, or share notation as PDF and PNG. Record live from your MIDI drum kit and sync tempo with compatible apps and gear using Ableton Link."],
  ["Progress you can see.", "Singles, rudiments, stickings, left hand, kick patterns, grooves and fills. Streaks, weekly goals, session history and tempo personal records keep you moving."],
  ["Made for your practice.", "Private iCloud sync and file backup. Dark and light appearance, Dynamic Type and VoiceOver. No advertising or tracking SDKs."]
];

export default function LandingPage() {
  const [selected, setSelected] = useState(0);
  const view = views[selected];
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header wrap">
      <Link className="brand" href="/" aria-label="Drumloom home"><img src={site.asset("/brand-mark.png")} width="32" height="32" alt="" />DRUMLOOM</Link>
      <nav aria-label="Main navigation"><a href="#app">Explore</a><a href="#features">Features</a><a href="#pro">Get Pro</a></nav>
      <a className="button small" href={site.appStoreUrl}>Get the app <span aria-hidden="true">↗</span></a>
    </header>
    <main id="main">
      <section className="hero wrap" aria-labelledby="hero-title">
        <div className="hero-copy"><p className="eyebrow"><span className="signal" />THE PRACTICE INSTRUMENT FOR DRUMMERS</p>
          <h1 id="hero-title">Find your<br /><em>pocket.</em></h1>
          <p className="hero-description">Less setup. More playing.<br />A precise metronome, playable notation and routines that keep you in the music.</p>
          <div className="hero-actions"><a className="button primary" href={site.appStoreUrl}>Download for iPhone <span aria-hidden="true">↗</span></a><span className="micro">Start free.<br />Make it a habit.</span></div>
        </div>
        <div className="hero-stage"><RhythmScene /><span className="stage-label">RIGHT. LEFT. REPEAT.</span><span className="stage-note">It all starts with a beat.</span></div>
      </section>
      <div className="spec-strip wrap"><span><strong>{site.exerciseCount}</strong> playable exercises</span><span><strong>4</strong> rhythm layers</span><span><strong>One</strong> lifetime purchase</span><a href="#app">Inside Drumloom <span aria-hidden="true">↓</span></a></div>
      <section className="showcase wrap" id="app" aria-labelledby="showcase-title">
        <div className="section-top"><p className="eyebrow">01 / THE INSTRUMENT</p><div className="view-switch" role="group" aria-label="Explore app features">{views.map((item, i) => <button key={item.name} aria-pressed={selected === i} onClick={() => setSelected(i)}>{item.name}</button>)}</div></div>
        <div className="showcase-content"><div className="showcase-copy"><h2 id="showcase-title">{view.title}</h2><p>{view.text}</p><span className="tags">{view.tags}</span></div><div className="screen-window"><div className="screen-bar"><span>DRUMLOOM / {view.name.toUpperCase()}</span><span aria-hidden="true">● ● ●</span></div><img key={view.image} src={site.asset(`/screenshots/${view.image}`)} alt={view.alt} loading="lazy" /></div></div>
      </section>
      <section className="features wrap" id="features" aria-labelledby="features-title"><div className="section-top"><p className="eyebrow">02 / THE DETAILS</p><h2 id="features-title">Small app. Deep practice.</h2></div><div className="feature-list">{features.map(([title, text], i) => <details key={title}><summary><span className="index">0{i + 1}</span><h3>{title}</h3><span className="expand" aria-hidden="true">+</span></summary><p>{text}</p></details>)}</div></section>
      <section className="pro wrap" id="pro" aria-labelledby="pro-title"><div><p className="eyebrow">03 / YOUR NEXT SESSION</p><h2 id="pro-title">Start free.<br /><em>Stay for the groove.</em></h2><p>The standard metronome, a playable exercise in every main category, Daily Rotation and one basic routine stay free.</p></div><div className="pro-offer"><span className="eyebrow">DRUMLOOM PRO</span><div className="price">{site.price}<span>once. yours forever.</span></div><p>The full library. Every builder, import, routine and sound. Unlimited custom patterns. Family Sharing.</p><a className="button primary" href={site.appStoreUrl}>Get Drumloom <span aria-hidden="true">↗</span></a><span className="micro">No subscription. Ever.</span></div></section>
      <aside className="privacy wrap"><span aria-hidden="true">◉</span><p>Your practice stays yours. On your devices and in your private iCloud container.<br /><span>No account. No ads. No tracking SDKs.</span></p><Link href="/privacy">Privacy <span aria-hidden="true">↗</span></Link></aside>
    </main>
    <footer className="wrap"><Link className="brand" href="/">DRUMLOOM</Link><span>Made for the hours nobody sees.</span><div><a href={`mailto:${site.supportEmail}`}>Support</a><Link href="/legal">Legal</Link><Link href="/privacy">Privacy</Link></div><small>© 2026</small></footer>
  </>;
}
