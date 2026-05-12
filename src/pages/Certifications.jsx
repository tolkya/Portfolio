import { ExternalLink } from 'lucide-react';
import secNumLogo from '../assets/certifications/logoSecNum.jpeg';
import awsCloudFoundationLogo from '../assets/certifications/Cloud Foundation logo.png';
import pixRealLogo from '../assets/certifications/Pix_logo.svg.png';
import anssiPdf from '../assets/certifications/attestation-anssi.pdf';
import pixPdf from '../assets/certifications/certification-pix.pdf';
import './Certifications.css';

const CERTIFICATIONS_DATA = [
  {
    id: 1,
    title: 'ANSSI - SecNumacadémie',
    date: '2 Mai 2025',
    description: 'Sensibilisation à la sécurité du numérique. Modules sur la sécurité de l\'authentification, d\'Internet, du poste de travail et le nomadisme.',
    url: anssiPdf,
    skills: ['Cybersécurité', 'Bonnes pratiques'],
    logo: secNumLogo,
    logoAlt: 'Logo ANSSI SecNumacadémie',
    logoClass: 'cert-logo-secnum'
  },
  {
    id: 2,
    title: 'AWS Academy Graduate - Cloud Foundations',
    date: '15 Mai 2025',
    description: 'Principes fondamentaux du Cloud Computing et de l\'infrastructure Amazon Web Services.',
    url: 'https://www.credly.com/badges/6d2819e3-938e-41a3-88bc-685e72a28b9a/print',
    skills: ['Cloud', 'AWS', 'Architecture'],
    logo: awsCloudFoundationLogo,
    logoAlt: 'Logo AWS Academy',
    logoClass: 'cert-logo-aws',
    iconClass: 'cert-icon-aws'
  },
  {
    id: 3,
    title: 'PIX',
    date: '3 Mars 2026',
    description: 'Évaluation et certification des compétences numériques essentielles.',
    url: pixPdf,
    skills: ['Compétences numériques', 'Bureautique'],
    logo: pixRealLogo,
    logoAlt: 'Logo PIX',
    logoClass: 'cert-logo-pix'
  }
];

const Certifications = () => {
  return (
    <div className="certifications-page animate-fade-in">
      <div className="container section">
        <h1 className="section-title">Certifications</h1>
        <p className="certifications-intro">
          Ces certifications attestent de ma volonté d'apprentissage continu et de l'acquisition de compétences complémentaires à ma formation initiale.
        </p>

        <div className="certifications-grid">
          {CERTIFICATIONS_DATA.map((cert, index) => (
            <div key={cert.id} className={`certification-card glow-box delay-${(index % 3) + 1}`}>
              <div className={`cert-icon ${cert.iconClass || ''}`}>
                <img src={cert.logo} alt={cert.logoAlt} className={`cert-logo ${cert.logoClass}`} loading="lazy" />
              </div>
              <div className="cert-content">
                <div className="cert-header">
                  <h2>{cert.title}</h2>
                  <span className="cert-date">{cert.date}</span>
                </div>
                <p className="cert-description">{cert.description}</p>
                <div className="tags-container">
                  {cert.skills.map(skill => (
                    <span key={skill} className="tech-tag">{skill}</span>
                  ))}
                </div>
                <a href={cert.url} target="_blank" rel="noopener noreferrer" className="btn btn-secondary cert-link">
                  Voir la certification <ExternalLink size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certifications;
