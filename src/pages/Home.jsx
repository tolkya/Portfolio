import { ArrowRight, Code, Database, Server, Layout, FileSearch, ArrowUpRight, GraduationCap, Briefcase } from 'lucide-react';
import { SiJavascript, SiPhp, SiPython, SiDart, SiTypescript, SiSymfony, SiAngular, SiMysql, SiPostgresql, SiMamp, SiFlutter } from 'react-icons/si';
import { FaHtml5, FaCss3, FaNodeJs, FaGitAlt, FaGithub, FaDocker } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import heroImage from '../assets/hero.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      {/* 1. Hero Section */}
      <section className="hero-section section">
        <div className="container">
          <div className="hero-content">
            <div className="avatar-container delay-1">
              <img src={heroImage} alt="Caillault Jérémy" className="avatar" />
            </div>

            <div className="terminal-badge mono delay-2">
              <span className="prompt">$</span> echo "Actuellement en recherche d'alternance CDWM"
            </div>

            <h1 className="hero-title delay-3">
              Caillault Jérémy
            </h1>
            <h2 className="hero-subtitle delay-3">
              Étudiant <span className="mono text-gradient">BTS SIO SLAM</span>
              <span className="subtitle-dev"> — Solutions logicielles et applications métier</span>
            </h2>
            <p className="hero-description delay-4">
              Formation en cours avec réalisation de projets concrets en développement d’applications et découverte des bonnes pratiques.
            </p>
            <div className="hero-actions delay-5">
              <Link to="/projets" className="btn btn-primary">
                Voir mes projets <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. À propos & Parcours (Côte à côte) */}
      <section className="about-timeline-section section bg-alt">
        <div className="container">
          <div className="two-col-grid">
            {/* Colonne Gauche : À propos */}
            <div className="about-col">
              <h2 className="section-title">À propos de moi</h2>
              <div className="about-content glow-box">
                <p>
                  Après un parcours universitaire en biologie à la Faculté des Sciences et Technologies de Limoges, j’ai choisi de me réorienter vers l’informatique à la suite d’une année de réflexion.
                </p>
                <p>
                  Cette transition m’a permis d’intégrer le BTS SIO à l’Institution Beaupeyrat, où j’ai découvert un réel intérêt pour le développement d’applications et la résolution de problématiques concrètes.
                </p>
                <p>
                  Aujourd’hui, je m’investis pleinement dans ce domaine et je souhaite poursuivre mon parcours en Bachelor Concepteur Développeur Web et Mobile en alternance.
                </p>
              </div>
            </div>

            {/* Colonne Droite : Parcours */}
            <div className="timeline-col">
              <h2 className="section-title">Mon Parcours</h2>
              <div className="home-timeline">
                {/* Etape 1 */}
                <div className="timeline-step">
                  <div className="step-icon"><GraduationCap size={20} /></div>
                  <div className="step-content glow-box">
                    <span className="step-date">Validée</span>
                    <h3>Licence</h3>
                    <p className="step-location">Faculté des Sciences et Technologies de Limoges</p>
                    <p>Biochimie, biologie moléculaire, cellulaire et génétique (2ème année validée).</p>
                  </div>
                </div>
                {/* Etape 2 */}
                <div className="timeline-step">
                  <div className="step-icon"><Briefcase size={20} /></div>
                  <div className="step-content glow-box">
                    <span className="step-date">Année de césure</span>
                    <h3>Réflexion professionnelle</h3>
                    <p>Réflexion sur le projet professionnel et réorientation vers l'informatique.</p>
                  </div>
                </div>
                {/* Etape 3 */}
                <div className="timeline-step active">
                  <div className="step-icon"><GraduationCap size={20} /></div>
                  <div className="step-content glow-box highlight">
                    <span className="step-date text-blue">Actuellement</span>
                    <h3>BTS SIO option SLAM</h3>
                    <p className="step-location">Institution Beaupeyrat</p>
                    <p>Découverte du développement, réalisation de projets.</p>
                  </div>
                </div>
                {/* Etape 4 */}
                <div className="timeline-step">
                  <div className="step-icon"><Briefcase size={20} /></div>
                  <div className="step-content glow-box future">
                    <span className="step-date">À venir</span>
                    <h3>Bachelor Concepteur Développeur Web et Mobile</h3>
                    <p className="step-location">Institution Beaupeyrat - Limoges</p>
                    <p><strong>Recherche d'alternance</strong></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Compétences Techniques */}
      <section className="skills-section section">
        <div className="container">
          <h2 className="section-title">Compétences Techniques</h2>

          {/* Langages */}
          <h3 className="category-title text-center">Langages</h3>
          <div className="tech-flex">
            <div className="tech-item"><FaHtml5 size={32} color="#E34F26" /><span>HTML5</span></div>
            <div className="tech-item"><FaCss3 size={32} color="#1572B6" /><span>CSS3</span></div>
            <div className="tech-item"><SiJavascript size={32} color="#F7DF1E" /><span>JavaScript</span></div>
            <div className="tech-item"><SiTypescript size={32} color="#3178C6" /><span>TypeScript</span></div>
            <div className="tech-item"><SiPhp size={32} color="#777BB4" /><span>PHP</span></div>
            <div className="tech-item"><SiPython size={32} color="#3776AB" /><span>Python</span></div>
            <div className="tech-item"><TbBrandCSharp size={32} color="#239120" /><span>C#</span></div>
            <div className="tech-item"><SiDart size={32} color="#0175C2" /><span>Dart</span></div>
          </div>

          {/* Frameworks */}
          <h3 className="category-title text-center mt-4">Frameworks</h3>
          <div className="tech-flex">
            <div className="tech-item"><SiSymfony size={32} color="#000000" style={{ background: '#fff', borderRadius: '50%', padding: '2px' }} /><span>Symfony</span></div>
            <div className="tech-item"><SiAngular size={32} color="#DD0031" /><span>Angular</span></div>
            <div className="tech-item"><FaNodeJs size={32} color="#339933" /><span>Node.js</span></div>
            <div className="tech-item"><SiFlutter size={32} color="#02569B" /><span>Flutter</span></div>
          </div>

          {/* Bases de données */}
          <h3 className="category-title text-center mt-4">Bases de Données</h3>
          <div className="tech-flex">
            <div className="tech-item"><SiMysql size={32} color="#4479A1" /><span>MySQL</span></div>
            <div className="tech-item"><SiPostgresql size={32} color="#4169E1" /><span>PostgreSQL</span></div>
          </div>

          {/* Outils */}
          <h3 className="category-title text-center mt-4">Outils</h3>
          <div className="tech-flex">
            <div className="tech-item"><FaGitAlt size={32} color="#F05032" /><span>Git</span></div>
            <div className="tech-item"><FaGithub size={32} /><span>GitHub</span></div>
            <div className="tech-item"><FaDocker size={32} color="#2496ED" /><span>Docker</span></div>
            <div className="tech-item"><SiMamp size={32} color="#000000" style={{ background: '#fff', borderRadius: '4px' }} /><span>MAMP</span></div>
            <div className="tech-item"><VscVscode size={32} color="#007ACC" /><span>VS Code</span></div>
          </div>
        </div>
      </section>

      {/* 5. Projets Mis en Avant */}
      <section className="featured-projects section">
        <div className="container">
          <h2 className="section-title">Projets Récents</h2>

          <div className="featured-grid">
            {/* Sparklib Web */}
            <div className="featured-card glow-box">
              <div className="featured-img">
                <img src="/projects/sparklib-web.png" alt="Aperçu de Sparklib Web" />
              </div>
              <div className="featured-content">
                <h3>Sparklib Web</h3>
                <p>Application web de gestion de clubs sportifs avec espace membres, développée en Angular.</p>
                <div className="tags-container">
                  <span className="tech-tag">Angular</span>
                  <span className="tech-tag">TypeScript</span>
                </div>
                <Link to="/projets" className="link-arrow">Voir les détails <ArrowUpRight size={16} /></Link>
              </div>
            </div>

            {/* Sparklib API */}
            <div className="featured-card glow-box">
              <div className="featured-img">
                <img src="/projects/sparklib-api.png" alt="Aperçu de Sparklib API" />
              </div>
              <div className="featured-content">
                <h3>Sparklib API</h3>
                <p>API REST back-end du projet Sparklib, développée avec Symfony et PostgreSQL.</p>
                <div className="tags-container">
                  <span className="tech-tag">Symfony</span>
                  <span className="tech-tag">PHP</span>
                </div>
                <Link to="/projets" className="link-arrow">Voir les détails <ArrowUpRight size={16} /></Link>
              </div>
            </div>

            {/* Sparklib Mobile */}
            <div className="featured-card glow-box">
              <div className="featured-img featured-img--portrait">
                <img src="/projects/sparklib-mobile.jpg" alt="Aperçu de Sparklib Mobile" />
              </div>
              <div className="featured-content">
                <h3>Sparklib Mobile</h3>
                <p>Application mobile Flutter connectée à l'API Sparklib pour gérer ses clubs depuis un smartphone.</p>
                <div className="tags-container">
                  <span className="tech-tag">Flutter</span>
                  <span className="tech-tag">Dart</span>
                </div>
                <Link to="/projets" className="link-arrow">Voir les détails <ArrowUpRight size={16} /></Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-3">
            <Link to="/projets" className="btn btn-secondary">Découvrir tous mes projets</Link>
          </div>
        </div>
      </section>

      {/* 6. Compétences BTS SIO */}
      <section className="bts-skills section bg-alt">
        <div className="container">
          <h2 className="section-title">Compétences BTS SIO</h2>
          <div className="bts-grid">
            <div className="bts-card glow-box">
              <Layout size={32} className="text-blue" />
              <h3>Développement d'applications</h3>
              <p>Conception et développement de solutions logicielles métiers, du front-end au back-end.</p>
            </div>
            <div className="bts-card glow-box">
              <Database size={32} className="text-purple" />
              <h3>Conception de bases de données</h3>
              <p>Modélisation de la base de données, création du schéma et optimisation des accès.</p>
            </div>
            <div className="bts-card glow-box">
              <FileSearch size={32} className="text-blue" />
              <h3>Analyse des besoins</h3>
              <p>Compréhension des attentes clients, rédaction de spécifications et suivi de projet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7 & 8. Stages et Veille (Mini Sections) */}
      <section className="preview-section section">
        <div className="container">
          <div className="preview-grid">
            {/* Stages */}
            <div className="preview-card glow-box">
              <h3>🏢 Stages</h3>
              <div className="preview-item">
                <strong>Entreprise : THERA SOFT</strong>
                <span>2 stages :<br />- Développement d’un module de gestion des congés<br />- Support N1</span>
              </div>
              <Link to="/stages" className="btn btn-secondary mt-2">Découvrir mes stages</Link>
            </div>

            {/* Veille */}
            <div className="preview-card glow-box">
              <h3>🔎 Veille Technologique</h3>
              <div className="preview-item">
                <strong>Authentification moderne sur le web</strong>
                <span>OAuth, JWT, Passkeys, biométrie, sécurité.</span>
              </div>
              <Link to="/veille" className="btn btn-secondary mt-2">Consulter ma veille</Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Call to action final */}
      <section className="cta-section section bg-alt text-center">
        <div className="container">
          <div className="cta-box glow-box">
            <p className="cta-subtitle">Je suis actuellement à la recherche d’une alternance en développement web et mobile.</p>
            <h2>Intéressé par mon profil ? Discutons de vos besoins.</h2>
            <Link to="/contact" className="btn btn-primary mt-2">
              Me contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
