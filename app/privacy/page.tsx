import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Privacy",
  description: "Drumloom privacy policy and App Store privacy information."
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <Link className="brand" href="/">
        <img src={siteConfig.asset("/brand-mark.png")} alt="" width="42" height="42" />
        <span>DRUMLOOM</span>
      </Link>
      <p className="eyebrow">PRIVACY</p>
      <h1>Your practice stays yours.</h1>
      <p className="legal-intro">
        Effective 15 August 2026
      </p>

      <article>
        <h2>Privacy policy</h2>
        <p>
          Drumloom does not collect, sell or share personal data with the
          developer. There is no Drumloom account, advertising SDK, third-party
          analytics SDK or cross-app tracking.
        </p>
        <h3>Data stored by the app</h3>
        <p>
          Routines, custom patterns, favorites, settings, practice sessions and
          tempo records are stored on the user&apos;s device. When iCloud is
          available, the app may sync this data through the user&apos;s private
          Apple iCloud container. The developer cannot access that private
          container.
        </p>
        <h3>Purchases and notifications</h3>
        <p>
          Apple processes the optional Pro purchase. Drumloom receives only the
          entitlement state required to unlock Pro. iOS schedules optional
          practice reminders locally; Drumloom has no push-notification server.
        </p>
        <h3>Microphone</h3>
        <p>
          The microphone is accessed only after iOS permission and only while
          you tune a drum, use Play Along or record a practice take. Tuner and
          Play Along analysis run on the device in real time. Play Along
          evaluates onset timing and does not store an audio recording.
          Recordings you deliberately create leave the device only when you
          export or share them yourself.
        </p>
        <h3>Export and deletion</h3>
        <p>
          Users can export their data as a backup file. Data can be removed in the
          app, by disabling iCloud data for Drumloom or by deleting the app,
          subject to Apple&apos;s iCloud retention behavior.
        </p>
        <h3>Support and legal basis</h3>
        <p>
          If you contact support, we process your email address, message and any
          files you voluntarily attach to answer the request. Support mail is
          handled through Gmail;{" "}
          <a href="https://policies.google.com/privacy">
            Google&apos;s privacy policy
          </a>{" "}
          applies to that service. Messages are retained only as long as
          necessary to resolve the request and meet applicable legal
          obligations.
        </p>
        <p>
          Where the GDPR applies, local processing used to provide requested app
          functions is based on Article 6(1)(b) GDPR. Support handling is based
          on our legitimate interest in customer support under Article 6(1)(f)
          GDPR.
        </p>
        <h3>Your rights</h3>
        <p>
          Depending on applicable law, you may have rights of access,
          correction, deletion, restriction, objection and data portability, and
          the right to complain to a data-protection authority. Because Drumloom
          operates no account or backend, app data exists on your devices and in
          your private iCloud container and can be managed there. Drumloom
          performs no automated decision-making or profiling and is not directed
          at children for the purpose of collecting personal data.
        </p>
        <h3>Website delivery</h3>
        <p>
          This page sets no cookies, runs no analytics and loads no advertising
          or tracking scripts. The hosting provider necessarily processes
          technical request data such as IP address, timestamp, requested page,
          referrer and user agent to deliver and secure the site, based on
          Article 6(1)(f) GDPR.
        </p>
      </article>

      <p className="legal-contact">
        Privacy questions:{" "}
        <a href={`mailto:${siteConfig.supportEmail}?subject=Drumloom%20Privacy`}>
          {siteConfig.supportEmail}
        </a>
      </p>

      <section aria-label="Controller">
        <p className="legal-identity">
          Controller: {siteConfig.legalName}
          <br />
          {siteConfig.legalAddress} ·{" "}
          <Link href="/legal">Legal notice</Link>
        </p>
      </section>
      <Link className="back-link" href="/">
        ← Drumloom
      </Link>
    </main>
  );
}
