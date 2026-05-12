import { BriefcaseBusiness, MapPin, BadgeCheck } from 'lucide-react';
import './Resume.css';

const CV_URL = '/cv/CV_CAILLAULT_JEREMY.pdf';

const Resume = () => {
  return (
    <div className="resume-page animate-fade-in">
      <div className="container section">
        <div className="resume-hero glow-box delay-1">
          <p className="resume-kicker mono">Recherche d'alternance 2026</p>
          <h1 className="section-title resume-title">Alternance Concepteur Développeur Web et Mobile</h1>
          <p className="resume-intro">
            Actuellement en 2ème année de BTS SIO option SLAM à l'Institution Beaupeyrat, je recherche une alternance d'un an pour poursuivre en Bachelor Concepteur Développeur Web et Mobile.
          </p>

          <div className="resume-highlights">
            <div className="resume-highlight">
              <BriefcaseBusiness size={18} />
              <span>Disponible pour une alternance sur 1 an</span>
            </div>
            <div className="resume-highlight">
              <BadgeCheck size={18} />
              <span>BTS SIO SLAM en cours</span>
            </div>
            <div className="resume-highlight">
              <MapPin size={18} />
              <span>Limoges, permis B et A</span>
            </div>
          </div>

        </div>

        <section className="resume-viewer glow-box delay-2">
          <div className="resume-viewer-header">
            <h2>CV</h2>
            <a href={CV_URL} target="_blank" rel="noopener noreferrer" className="resume-viewer-link">
              Ouvrir dans un nouvel onglet
            </a>
          </div>

          <iframe
            src={CV_URL}
            title="CV de Jeremy Caillault"
            className="resume-frame"
          />
        </section>
      </div>
    </div>
  );
};

export default Resume;
