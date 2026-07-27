import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export const metadata = {
  title: "Datenschutz / Privacy",
  description: "Drumloom privacy policy and App Store privacy information."
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <Link className="brand" href="/">
        <img src="/brand-mark.png" alt="" width="42" height="42" />
        <span>DRUMLOOM</span>
      </Link>
      <p className="eyebrow">PRIVACY · DATENSCHUTZ</p>
      <h1>Your practice stays yours.</h1>
      <p className="legal-intro">
        Effective 27 July 2026 · Stand 27. Juli 2026
      </p>

      <article>
        <h2>Deutsch</h2>
        <p>
          Drumloom erhebt, verkauft oder teilt keine personenbezogenen Daten mit dem
          Entwickler. Es gibt kein Drumloom-Konto, kein Werbe-SDK, kein externes
          Analyse-SDK und kein appübergreifendes Tracking.
        </p>
        <h3>Auf dem Gerät gespeicherte Daten</h3>
        <p>
          Routinen, eigene Patterns, Favoriten, Einstellungen, Übungseinheiten und
          Tempo-Bestleistungen werden auf dem Gerät gespeichert. Wenn iCloud
          verfügbar ist, kann die App diese Daten über den privaten
          Apple-iCloud-Container des Nutzers synchronisieren. Der Entwickler hat
          keinen Zugriff auf diesen privaten Container.
        </p>
        <h3>Käufe und Mitteilungen</h3>
        <p>
          Der optionale Pro-Kauf wird von Apple verarbeitet. Drumloom erhält nur
          den Berechtigungsstatus zum Freischalten von Pro. Optionale
          Übungserinnerungen plant iOS lokal; es gibt keinen Push-Server.
        </p>
        <h3>Export und Löschung</h3>
        <p>
          Nutzer können ihre Daten als Backup-Datei exportieren. Daten können in
          der App gelöscht werden; zusätzlich können iCloud-Daten für Drumloom
          deaktiviert oder die App gelöscht werden. Es gelten die
          Aufbewahrungsregeln von Apple iCloud.
        </p>
      </article>

      <article lang="en">
        <h2>English</h2>
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
        <h3>Export and deletion</h3>
        <p>
          Users can export their data as a backup file. Data can be removed in the
          app, by disabling iCloud data for Drumloom or by deleting the app,
          subject to Apple&apos;s iCloud retention behavior.
        </p>
      </article>

      <p className="legal-contact">
        Privacy questions · Datenschutzfragen:{" "}
        <a href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>
      </p>
      <Link className="back-link" href="/">
        ← Drumloom
      </Link>
    </main>
  );
}

