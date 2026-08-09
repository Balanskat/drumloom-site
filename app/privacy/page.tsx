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
        <img src={siteConfig.asset("/brand-mark.png")} alt="" width="42" height="42" />
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
        <h3>Mikrofon</h3>
        <p>
          Das Mikrofon wird ausschließlich nach iOS-Freigabe und nur beim
          Stimmen einer Trommel oder beim Aufnehmen einer Übung verwendet. Die
          Analyse des Stimmgeräts läuft in Echtzeit auf dem Gerät und wird nicht
          gespeichert. Aufnahmen verlassen das Gerät nur, wenn sie bewusst
          exportiert oder geteilt werden.
        </p>
        <h3>Export und Löschung</h3>
        <p>
          Nutzer können ihre Daten als Backup-Datei exportieren. Daten können in
          der App gelöscht werden; zusätzlich können iCloud-Daten für Drumloom
          deaktiviert oder die App gelöscht werden. Es gelten die
          Aufbewahrungsregeln von Apple iCloud.
        </p>
        <h3>Support und Rechtsgrundlagen</h3>
        <p>
          Bei einer Supportanfrage werden E-Mail-Adresse, Nachricht und
          freiwillig beigefügte Dateien zur Bearbeitung der Anfrage verarbeitet.
          Support-E-Mails werden über Gmail verarbeitet; hierfür gilt auch die{" "}
          <a href="https://policies.google.com/privacy?hl=de">
            Datenschutzerklärung von Google
          </a>
          . Die Speicherung erfolgt nur so lange, wie sie für die Bearbeitung
          und gesetzliche Pflichten erforderlich ist.
        </p>
        <p>
          Soweit die DSGVO anwendbar ist, beruht die lokale Verarbeitung der
          angeforderten App-Funktionen auf Art. 6 Abs. 1 lit. b DSGVO. Der
          Support beruht auf dem berechtigten Interesse an Kundenbetreuung nach
          Art. 6 Abs. 1 lit. f DSGVO.
        </p>
        <h3>Rechte</h3>
        <p>
          Je nach anwendbarem Recht bestehen insbesondere Rechte auf Auskunft,
          Berichtigung, Löschung, Einschränkung, Widerspruch,
          Datenübertragbarkeit und Beschwerde bei einer
          Datenschutzaufsichtsbehörde. Drumloom verwendet keine automatisierte
          Entscheidungsfindung und kein Profiling.
        </p>
        <h3>Bereitstellung dieser Website</h3>
        <p>
          Diese Seite setzt keine Cookies, verwendet keine Analyse und lädt
          keine Werbe- oder Tracking-Skripte. Der Hosting-Anbieter verarbeitet
          technisch notwendige Zugriffsdaten wie IP-Adresse, Zeitpunkt,
          aufgerufene Seite, Referrer und User-Agent zur Auslieferung und
          Absicherung der Website auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
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
        <h3>Microphone</h3>
        <p>
          The microphone is accessed only after iOS permission and only while
          you tune a drum or record a practice take. Tuner analysis runs on the
          device in real time and is not stored. Recordings leave the device
          only when you export or share them yourself.
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
        Privacy questions · Datenschutzfragen:{" "}
        <a href={`mailto:${siteConfig.supportEmail}?subject=Drumloom%20Privacy`}>
          {siteConfig.supportEmail}
        </a>
      </p>

      <section aria-label="Controller / Verantwortlicher">
        <p className="legal-identity">
          Controller / Verantwortlicher: {siteConfig.legalName}
          <br />
          {siteConfig.legalAddress} ·{" "}
          <Link href="/legal">Impressum</Link>
        </p>
      </section>
      <Link className="back-link" href="/">
        ← Drumloom
      </Link>
    </main>
  );
}
