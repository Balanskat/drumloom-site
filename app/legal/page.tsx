import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Impressum / Legal notice",
  description: "Legal notice for Drumloom."
};

export default function LegalPage() {
  return (
    <main className="legal-page">
      <Link className="brand" href="/">
        <img src="/brand-mark.png" alt="" width="42" height="42" />
        <span>DRUMLOOM</span>
      </Link>
      <p className="eyebrow">LEGAL · IMPRESSUM</p>
      <h1>Impressum</h1>
      <article>
        <h2>Angaben gemäß § 5 DDG</h2>
        <address>
          {siteConfig.legalName}
          <br />
          {siteConfig.legalAddress}
        </address>
        <h3>Kontakt</h3>
        <p>
          E-Mail:{" "}
          <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
        </p>
        <h3>Verbraucherstreitbeilegung</h3>
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
      </article>
      <p className="legal-warning">
        Vor öffentlicher Veröffentlichung müssen der rechtliche Anbietername und
        die ladungsfähige Anschrift in <code>lib/site-config.ts</code> ergänzt
        werden.
      </p>
      <Link className="back-link" href="/">
        ← Drumloom
      </Link>
    </main>
  );
}

