import { BookOpen, Search, ExternalLink } from 'lucide-react';
import './TechWatch.css';

const ARTICLES = [
  {
    id: 5,
    title: 'Credential Management Level 1',
    date: '10 Avril 2026',
    source: 'W3C Working Draft',
    summary: 'Spécification W3C définissant l\'API navigator.credentials permettant aux sites de demander, stocker et gérer les identifiants (mots de passe, passkeys, identités fédérées). Socle fondamental sur lequel s\'appuie WebAuthn pour l\'accès aux clés publiques.',
    tags: ['API Web', 'W3C', 'Authentification', 'Navigateur'],
    url: 'https://www.w3.org/TR/credential-management-1/'
  },
  {
    id: 3,
    title: 'Web Authentication Level 3 – API for Public Key Credentials',
    date: '13 Janvier 2026',
    source: 'W3C Candidate Recommendation',
    summary: 'Spécification W3C (CR) de WebAuthn Level 3 définissant l\'API des passkeys : enregistrement et authentification par clé publique, synchronisation multi-appareils, biométrie locale et considérations de sécurité/confidentialité pour les Relying Parties.',
    tags: ['WebAuthn', 'Passkeys', 'W3C', 'Cryptographie'],
    url: 'https://www.w3.org/TR/2026/CR-webauthn-3-20260113/'
  },
  {
    id: 2,
    title: 'Multifactor Authentication Cheat Sheet',
    date: '2026',
    source: 'OWASP Cheat Sheet Series',
    summary: 'Référence incontournable d\'OWASP détaillant les cinq facteurs d\'authentification (connaissance, possession, inhérence, localisation, comportement), avec recommandations pratiques sur les passkeys FIDO2, l\'authentification adaptative et la gestion des tentatives échouées.',
    tags: ['MFA', 'OWASP', 'Passkeys', 'FIDO2'],
    url: 'https://cheatsheetseries.owasp.org/cheatsheets/Multifactor_Authentication_Cheat_Sheet.html'
  },
  {
    id: 6,
    title: 'Passkey Central – Ressources et guides de déploiement',
    date: '2026',
    source: 'FIDO Alliance – Passkey Central',
    summary: 'Plateforme officielle de la FIDO Alliance proposant guides de déploiement progressif ou rapide des passkeys, bonnes pratiques UX, métriques et ressources pour développeurs. Couvre les deux stratégies de migration : adoption organique et promotion active.',
    tags: ['Passkeys', 'FIDO Alliance', 'UX', 'Déploiement'],
    url: 'https://www.passkeycentral.org/home'
  },
  {
    id: 4,
    title: 'Web Authentication Level 3 – Working Draft',
    date: '27 Janvier 2025',
    source: 'W3C Working Draft',
    summary: 'Version Working Draft de WebAuthn Level 3 introduisant les nouvelles méthodes signal (signalUnknownCredential, signalAllAcceptedCredentials), le support cross-origin et les capacités client (getClientCapabilities) pour améliorer la gestion des passkeys.',
    tags: ['WebAuthn', 'W3C', 'Passkeys', 'API'],
    url: 'https://www.w3.org/TR/2025/WD-webauthn-3-20250127/'
  },
  {
    id: 1,
    title: 'Recommandations sur l\'authentification multifacteur et les mots de passe',
    date: '8 Octobre 2021',
    source: 'ANSSI / MesServicesCyber',
    summary: 'Guide officiel de l\'ANSSI couvrant les bonnes pratiques pour l\'authentification multifacteur (MFA) et la gestion sécurisée des mots de passe. Recommande l\'utilisation de facteurs de possession et l\'analyse de risque préalable à tout déploiement.',
    tags: ['MFA', 'ANSSI', 'Sécurité', 'Mots de passe'],
    url: 'https://messervices.cyber.gouv.fr/guides/recommandations-relatives-lauthentification-multifacteur-et-aux-mots-de-passe'
  }
];

const TechWatch = () => {
  return (
    <div className="tech-watch-page animate-fade-in">
      <div className="container section">
        <h1 className="section-title">Veille Technologique</h1>
        
        <div className="watch-intro glow-box delay-1">
          <h2>Sujet de veille : Les authentifications modernes sur le web</h2>
          <p>
            Dans le cadre de mon BTS SIO, j'ai choisi de m'intéresser particulièrement aux méthodes d'authentification modernes sur le web (OAuth, Passkeys, biométrie, JWT...). 
            Ce domaine est en constante évolution et soulève des enjeux importants tels que la sécurité des données utilisateurs et l'expérience utilisateur (UX) fluide.
          </p>
          
          <div className="methodology">
            <h3>Méthodologie</h3>
            <ul className="tools-list">
              <li>
                <BookOpen size={18} />
                <span><strong>Sources institutionnelles :</strong> organismes de standardisation (W3C), agences de cybersécurité (ANSSI, OWASP) et consortiums industriels (FIDO Alliance) — ce sont les organisations qui publient les spécifications et recommandations officielles sur l'authentification.</span>
              </li>
              <li>
                <Search size={18} />
                <span><strong>Méthode de suivi :</strong> abonnement aux flux RSS des groupes de travail W3C et aux bulletins de l'ANSSI, consultation régulière des pages de statut des spécifications (Working Draft → Candidate Recommendation) pour détecter les évolutions.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="articles-section">
          <h2>Articles Récents</h2>
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
