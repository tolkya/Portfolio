import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const PROJECTS_DATA = [
  {
    id: 3,
    title: 'Sparklib Web',
    context: 'Projet scolaire (2ème année)',
    description: 'Application web de gestion de clubs sportifs et de leurs pratiquants. Un utilisateur peut créer et gérer son club, ou rejoindre des clubs existants et participer à leurs activités.',
    problematic: 'Comment structurer une application Angular en composants réutilisables pour consommer une API externe, en réinvestissant les acquis des stages chez Thera Soft ?',
    solution: 'Développement du front-end en Angular (composants, services, routage), consommation de l\'API REST Sparklib via des services TypeScript, le tout versionné avec Git et conteneurisé sous Docker.',
    technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'JSON', 'Docker', 'Git'],
    skills: [
      'Concevoir et développer une solution applicative',
      'Mettre à disposition des utilisateurs un service informatique',
      'Travailler en mode projet'
    ],
    githubUrl: '',
    liveUrl: '',
    image: '/projects/sparklib-web.png'
  },
  {
    id: 4,
    title: 'Sparklib API',
    context: 'Projet scolaire (2ème année)',
    description: 'API REST back-end commune aux interfaces web et mobile du projet Sparklib. Elle expose les ressources clubs, membres et événements à tous les clients connectés.',
    problematic: 'Comment concevoir et exposer une API REST structurée capable d\'alimenter simultanément une application web et une application mobile ?',
    solution: 'Développement de l\'API avec Symfony, base de données PostgreSQL, conteneurisation Docker et exposition locale via ngrok pour permettre la connexion depuis les clients Angular et Flutter.',
    technologies: ['Symfony', 'PHP', 'PostgreSQL', 'Docker', 'ngrok', 'Git'],
    skills: [
      'Concevoir et développer une solution applicative',
      'Travailler en mode projet',
      'Assurer la maintenance corrective ou évolutive d\'une solution applicative'
    ],
    githubUrl: '',
    liveUrl: '',
    image: '/projects/sparklib-api.png'
  },
  {
    id: 5,
    title: 'Sparklib Mobile',
    context: 'Projet scolaire (2ème année)',
    description: 'Application mobile connectée à la même API Sparklib que la version web. Les utilisateurs peuvent consulter les clubs, gérer leur adhésion et interagir avec leurs clubs depuis leur smartphone.',
    problematic: 'Comment développer une application mobile en découvrant Flutter, en réutilisant une API REST déjà en place ?',
    solution: 'Développement de l\'application avec Flutter et Dart, consommation de l\'API REST Sparklib, navigation mobile adaptée avec des écrans dédiés aux fonctionnalités clés, versionné via Git.',
    technologies: ['Flutter', 'Dart', 'Git'],
    skills: [
      'Concevoir et développer une solution applicative',
      'Mettre à disposition des utilisateurs un service informatique',
      'Organiser son développement professionnel'
    ],
    githubUrl: 'https://github.com/tolkya/POLE-MOBILE',
    liveUrl: '',
    image: '/projects/sparklib-mobile.jpg',
    imageType: 'portrait'
  },
  {
    id: 2,
    title: 'SUTOM',
    context: 'Projet personnel (1ère année)',
    description: 'Clone du jeu SUTOM, variante française de Wordle. Le joueur doit deviner un mot en plusieurs essais, avec un retour visuel lettre par lettre après chaque tentative.',
    problematic: 'Comment découvrir et maîtriser les fondamentaux de JavaScript sans framework : manipulation du DOM, gestion des événements et logique conditionnelle ?',
    solution: 'Développement du jeu entièrement en JavaScript vanilla, gestion de l\'état de la partie, de la saisie clavier et du retour visuel case par case, conteneurisé avec Docker et versionné via Git.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Docker', 'Git'],
    skills: [
      'Concevoir et développer une solution applicative',
      'Organiser son développement professionnel'
    ],
    githubUrl: 'https://github.com/tolkya/SUTOM',
    liveUrl: '',
    image: '/projects/sutom.png',
    imageType: 'portrait',
    imageVariant: 'fill'
  },
  {
    id: 1,
    title: 'Moto-CRUD',
    context: 'Projet personnel (1ère année)',
    description: 'Plateforme de partage de contenu autour des motos. Un utilisateur peut s\'inscrire, se connecter et publier ses motos avec leurs détails. Les visiteurs peuvent consulter les annonces publiques.',
    problematic: 'Comment découvrir les bases du développement web (HTML, CSS, PHP) ainsi que la connexion à une base de données, la gestion de formulaires et les premiers réflexes de sécurité ?',
    solution: 'Développement d\'un site complet avec formulaires d\'inscription et de connexion en PHP/PDO, base de données MySQL, mise en place d\'une sécurité minimale, le tout conteneurisé avec Docker et versionné via Git.',
    technologies: ['PHP', 'PDO', 'MySQL', 'HTML', 'CSS', 'Docker', 'Git'],
    skills: [
      'Concevoir et développer une solution applicative',
      'Mettre à disposition des utilisateurs un service informatique',
      'Organiser son développement professionnel'
    ],
    githubUrl: 'https://github.com/tolkya/moto_crud',
    liveUrl: '',
    image: '/projects/moto-crud.png'
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('Tous');

  // Technologies affichées sur les cartes mais exclues des filtres
  const FILTER_EXCLUDE = ['ngrok', 'SCSS', 'JSON', 'PostgreSQL', 'PDO', 'SQL', 'MySQL', 'CSS', 'Docker', 'Git'];

  const allTechs = ['Tous', ...new Set(
    PROJECTS_DATA.flatMap(p => p.technologies).filter(t => !FILTER_EXCLUDE.includes(t))
  )];

  const filteredProjects = filter === 'Tous' 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.technologies.includes(filter));

  return (
    <div className="projects-page animate-fade-in">
      <div className="container section">
        <h1 className="section-title">Mes Projets SLAM</h1>
        <p className="projects-intro">
          Découvrez les projets réalisés au cours de ma formation BTS SIO.
          Chaque projet est détaillé avec sa problématique et les solutions techniques apportées.
        </p>

        <div className="filters-container">
          {allTechs.map((tech, index) => (
            <button 
              key={index}
              className={`filter-btn ${filter === tech ? 'active' : ''}`}
              onClick={() => setFilter(tech)}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className={`delay-${(index % 3) + 1}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
