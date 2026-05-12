import { Briefcase, Calendar, ExternalLink } from 'lucide-react';
import './Internships.css';

const COMPANY = {
  name: 'THERA SOFT',
  logo: '/stages/logo-thera-soft.jpeg',
  description:
    'THERA SOFT est l\'entreprise dans laquelle j\'ai réalisé mes deux périodes de stage. Cela m\'a permis de découvrir son fonctionnement interne, puis d\'approfondir progressivement mes missions techniques entre la première et la deuxième année.',
  highlights: [
    'Deux stages effectués dans la même structure',
    'Montée en autonomie entre les deux périodes',
    'Travail sur des besoins métier concrets'
  ]
};

const INTERNSHIPS_DATA = [
  {
    id: 1,
    title: 'Stage 1 - Première année',
    period: 'Mai 2023 - Juin 2023',
    context: 'Stage de première année en BTS SIO, avec prise en main progressive d\'un environnement Angular et contribution à des fonctionnalités en contexte réel.',
    missions: [
      'Prise en main d\'Angular et TypeScript via un projet d\'entraînement (moto-crud)',
      'Contribution à la page statistiques du projet CallMe en production',
      'Participation au développement de la page administration (composants, tableaux, filtres)',
      'Intégration front avec API et travail collaboratif via Git'
    ],
    technologies: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'SCSS', 'JSON Server', 'Git'],
    skills: 'Développement front-end Angular, logique de composants et première expérience sur un projet applicatif professionnel.',
    reportUrl: '/stages/rapport-stage-1.pdf'
  },
  {
    id: 2,
    title: 'Stage 2 - Deuxième année',
    period: 'Janvier 2024 - Mars 2024',
    context: 'Stage de deuxième année BTS SIO option SLAM, axé sur le développement de fonctionnalités métier au sein de l\'écosystème TsXcare.',
    missions: [
      'Développement et refonte du tableau de bord statistiques TsXcare Admin',
      'Création de routes back-end dans THERAPI pour alimenter les indicateurs',
      'Mise en place d\'un composant Month-Range-Picker pour filtrer les périodes',
      'Production de preuves de conformité et prise en compte d\'exigences SEGUR'
    ],
    technologies: ['Angular', 'TypeScript', 'Node.js', 'Express', 'DevExtreme', 'Chart.js', 'DBeaver', 'Git'],
    skills: 'Analyse d\'exigences, intégration front/back, manipulation de données et autonomie sur un projet applicatif de grande taille.',
    reportUrl: '/stages/rapport-stage-2.pdf'
  }
];

const Internships = () => {
  return (
    <div className="internships-page animate-fade-in">
      <div className="container section">
        <h1 className="section-title">Expériences Professionnelles</h1>

        <div className="company-profile glow-box delay-1">
          <div className="company-profile-media">
            <img src={COMPANY.logo} alt="Logo Thera Soft" className="company-logo" />
          </div>
          <div className="company-profile-content">
            <h2>{COMPANY.name}</h2>
            <p>{COMPANY.description}</p>
            <ul>
              {COMPANY.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="timeline-container">
          {INTERNSHIPS_DATA.map((internship, index) => (
            <div key={internship.id} className={`timeline-item delay-${index + 2}`}>
              <div className="timeline-dot">
                <Briefcase size={20} />
              </div>
              <div className="timeline-content glow-box">
                <div className="timeline-header">
                  <h2>{internship.title}</h2>
                  <div className="timeline-date">
                    <Calendar size={16} />
                    <span>{internship.period}</span>
                  </div>
                </div>

                <p className="timeline-company">Entreprise : {COMPANY.name}</p>
                
                <p className="timeline-context">{internship.context}</p>
                
                <div className="timeline-section">
                  <h3>Missions réalisées</h3>
                  <ul>
                    {internship.missions.map((mission, i) => (
                      <li key={i}>{mission}</li>
                    ))}
                  </ul>
                </div>

                <div className="timeline-section tech-section">
                  <h3>Technologies</h3>
                  <div className="tags-container">
                    {internship.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="timeline-skills">
                  <strong>Compétences développées :</strong> {internship.skills}
                </div>

                <div className="timeline-actions">
                  <a
                    href={internship.reportUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary"
                  >
                    <ExternalLink size={14} />
                    Consulter le rapport complet (PDF)
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Internships;
