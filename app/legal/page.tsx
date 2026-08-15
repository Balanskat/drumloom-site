import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Legal notice",
  description: "Provider information for Drumloom."
};

export default function LegalPage() {
  return (
    <main className="legal-page">
      <Link className="brand" href="/">
        <img src={siteConfig.asset("/brand-mark.png")} alt="" width="42" height="42" />
        <span>DRUMLOOM</span>
      </Link>
      <p className="eyebrow">LEGAL</p>
      <h1>Legal notice</h1>

      <article>
        <h2>Legal notice</h2>
        <p>
          Provider information under Section 5 of the German Digital Services
          Act (DDG).
        </p>
        <address className="legal-identity">
          {siteConfig.legalName}
          <br />
          {siteConfig.legalAddress}
        </address>
        <h3>Contact</h3>
        <p>
          Support and legal enquiries:{" "}
          <a href={`mailto:${siteConfig.supportEmail}?subject=Drumloom%20Support`}>
            {siteConfig.supportEmail}
          </a>{" "}
          in English.
        </p>
        <h3>Privacy</h3>
        <p>
          How Drumloom handles data is described on the{" "}
          <Link href="/privacy">privacy page</Link>.
        </p>
      </article>

      <Link className="back-link" href="/">
        ← Drumloom
      </Link>
    </main>
  );
}
