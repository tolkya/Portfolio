import { ShieldCheck, KeyRound, Fingerprint, Smartphone, ExternalLink } from 'lucide-react';
import './TechWatch.css';

const ARTICLES = [
  {
    id: 1,
    title: 'Recommandations MFA et mots de passe',
    date: 'Publication : 8 octobre 2021',
    source: 'MesServicesCyber',
    summary: 'Guide pratique sur le choix des facteurs d\'authentification, les limites des mots de passe seuls et les bonnes pratiques de déploiement MFA.',
    tags: ['MFA', 'ANSSI', 'Bonnes pratiques'],
    url: 'https://messervices.cyber.gouv.fr/guides/recommandations-relatives-lauthentification-multifacteur-et-aux-mots-de-passe'
  },
  {
    id: 2,
    title: 'Multifactor Authentication Cheat Sheet',
    date: 'Ressource active : consultée en 2026',
    source: 'Cheat Sheet Series',
    summary: 'Référence claire sur les types de facteurs, les erreurs fréquentes (MFA fatigue, SMS non suffisant seul) et les stratégies de renforcement.',
    tags: ['OWASP', 'MFA', 'Sécurité'],
    url: 'https://cheatsheetseries.owasp.org/cheatsheets/Multifactor_Authentication_Cheat_Sheet.html'
  },
  {
    id: 3,
    title: 'Passkey Central',
    date: 'Ressource active : consultée en 2026',
    source: 'Guides déploiement',
    summary: 'Ressources pour comprendre et intégrer les passkeys (WebAuthn/FIDO2) tout en gardant une UX simple pour les utilisateurs.',
    tags: ['Passkeys', 'FIDO2', 'UX'],
    url: 'https://www.passkeycentral.org/home'
  },
  {
    id: 4,
    title: 'Authentication & Session Management',
    date: 'Édition de référence : OWASP Top 10 2025',
    source: 'Top 10 / Guides',
    summary: 'Bonnes pratiques sur la gestion des sessions, des tokens et des mécanismes d\'authentification côté application web.',
    tags: ['Session', 'JWT', 'OWASP'],
    url: 'https://owasp.org/www-project-top-ten/'
  },
  {
    id: 5,
    title: 'Web Authentication Level 3',
    date: 'Version : Candidate Recommendation du 13 janvier 2026',
    source: 'W3C',
    summary: 'Spécification WebAuthn récente décrivant l\'authentification par clés publiques (passkeys), la biométrie locale et les recommandations d\'intégration web.',
    tags: ['WebAuthn', 'W3C', 'Passkeys'],
    url: 'https://www.w3.org/TR/2026/CR-webauthn-3-20260113/'
  }
];

const TechWatch = () => {
  return (
    <div className="tech-watch-page animate-fade-in">
      <div className="container section">
        <h1 className="section-title">Veille Technologique</h1>
        
        <div className="watch-intro glow-box delay-1">
          <h2>Sujet : les authentifications modernes sur le web</h2>
          <p>
            J'ai choisi ce sujet car l'authentification évolue en permanence avec les menaces. Les anciens schémas basés uniquement sur
            des mots de passe simples ne sont plus suffisants face à la puissance de calcul actuelle et aux techniques d'attaque modernes.
            L'objectif est de comprendre comment renforcer la sécurité sans dégrader l'expérience utilisateur.
          </p>

          <div className="watch-grid">
            <div className="watch-block">
              <h3>Pourquoi ce sujet ?</h3>
              <ul>
                <li>Les méthodes d'attaque progressent (bruteforce, fuite d'identifiants, phishing).</li>
                <li>Les systèmes d'authentification doivent s'adapter sans complexifier l'usage.</li>
                <li>Le web moderne cherche l'équilibre entre sécurité forte et parcours fluide.</li>
              </ul>
            </div>

            <div className="watch-block">
              <h3>Évolution observée</h3>
              <ul>
                <li>Du simple hachage vers des fonctions robustes (bcrypt, Argon2) avec salage.</li>
                <li>Du mot de passe seul vers l'authentification multifacteur (MFA).</li>
                <li>Vers des approches sans mot de passe : passkeys et clés de sécurité.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="auth-pillars delay-2">
          <div className="pillar-card glow-box">
            <KeyRound size={20} />
            <h3>Ce que je connais</h3>
            <p>Mot de passe, PIN, phrase secrète.</p>
          </div>
          <div className="pillar-card glow-box">
            <Smartphone size={20} />
            <h3>Ce que je possède</h3>
            <p>Téléphone, application OTP, clé de sécurité USB/NFC.</p>
          </div>
          <div className="pillar-card glow-box">
            <Fingerprint size={20} />
            <h3>Ce que je suis</h3>
            <p>Biométrie : empreinte digitale, reconnaissance faciale.</p>
          </div>
          <div className="pillar-card glow-box">
            <ShieldCheck size={20} />
            <h3>Contexte d'accès</h3>
            <p>Localisation, terminal utilisé, niveau de risque de la session.</p>
          </div>
        </div>

        <div className="watch-practices glow-box delay-3">
          <h2>Technologies et pratiques modernes</h2>
          <div className="practice-grid">
            <div>
              <h3>MFA du quotidien</h3>
              <ul>
                <li>Code OTP par application d'authentification.</li>
                <li>Code reçu par SMS ou email (mieux que rien, mais limité).</li>
                <li>Validation push sur smartphone.</li>
              </ul>
            </div>
            <div>
              <h3>Authentification forte</h3>
              <ul>
                <li>Clés de sécurité physiques (FIDO2 / WebAuthn).</li>
                <li>Passkeys synchronisées entre appareils.</li>
                <li>Biométrie locale sans exposition du secret au serveur.</li>
              </ul>
            </div>
            <div>
              <h3>Enjeux UX et sécurité</h3>
              <ul>
                <li>Ne pas demander à l'utilisateur de retenir 10 mots de passe complexes.</li>
                <li>Réduire la friction sans baisser le niveau de sécurité.</li>
                <li>Adapter l'authentification au risque réel de la connexion.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="articles-section">
          <h2>Sources et articles de veille</h2>
          <div className="articles-grid">
            {ARTICLES.map((article, index) => (
              <article key={article.id} className={`article-card glow-box delay-${(index % 3) + 1}`}>
                <div className="article-meta">
                  <span className="article-date">{article.date}</span>
                  <span className="article-source">{article.source}</span>
                </div>
                <h3 className="article-title">{article.title}</h3>
                <p className="article-summary">{article.summary}</p>
                <div className="tags-container">
                  {article.tags.map(tag => (
                    <span key={tag} className="tech-tag">{tag}</span>
                  ))}
                </div>
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary read-more-btn"
                >
                  <ExternalLink size={14} style={{ marginRight: '6px', verticalAlign: 'middle' }} />
                  Lire la source
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechWatch;
