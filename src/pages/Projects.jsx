import { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const PROJECTS_DATA = [
  {
    id: 3,
    title: 'Sparklib Web',
    context: 'Projet scolaire (2ème année)',
    description: 'Application web dédiée aux clubs sportifs et créatifs, permettant à la fois leur création et leur gestion, mais aussi l’accès aux clubs et à leur contenu pour les utilisateurs inscrits. La plateforme s’adapte aux rôles de chacun selon le club concerné : administrateur, professeur ou simple participant.',
    problematic: 'Comment concevoir une application web capable de gérer plusieurs rôles et niveaux d’accès selon les clubs, tout en offrant une interface claire pour la gestion des clubs, l’inscription aux activités, la mise en place de contenus par les professeurs et la consultation de ces contenus par les utilisateurs ?',
    solution: 'Développement d’une interface Angular structurée autour de composants réutilisables et de services TypeScript, consommation d’une API REST, gestion des redirections selon les permissions, versionnement Git avec branches de travail, et conteneurisation Docker pour le déploiement.',
    technologies: ['Angular', 'TypeScript', 'HTML', 'SCSS', 'JSON', 'Docker', 'Git'],
    skills: [
      'Concevoir et développer une solution applicative',
      'Mettre à disposition des utilisateurs un service informatique',
      'Travailler en mode projet'
    ],
    githubUrl: 'https://github.com/tolkya/POLE-FRONT',
    liveUrl: '',
    image: '/projects/sparklib-web.png',
    cardClass: 'wide-preview'
  },
  {
    id: 4,
    title: 'Sparklib API',
    context: 'Projet scolaire (2ème année)',
    description: 'API back-end centrale du projet Sparklib, chargée de structurer la base de données, d’appliquer la logique métier et d’exposer les données aux applications web et mobile. Elle centralise l’ensemble des entités du projet, les rôles, les permissions et les échanges nécessaires au fonctionnement de la plateforme.',
    problematic: 'Comment concevoir une API capable de centraliser des données complexes, de gérer une logique métier riche autour des clubs et des rôles, et de distribuer ces mêmes données de manière sécurisée et adaptée à plusieurs plateformes clientes ?',
    solution: 'Développement d’un back-end avec Symfony et API Platform, modélisation de la base PostgreSQL, création des entités et relations métier, mise en place des contrôleurs, providers, processors et ressources API, sécurisation des accès selon les rôles, authentification en cookies pour le web et en JWT pour le mobile, structuration des réponses JSON et déploiement en environnement conteneurisé.',
    technologies: ['Symfony', 'API Platform', 'PHP', 'PostgreSQL', 'Docker', 'ngrok', 'Git', 'JSON', 'JWT'],
    skills: [
      'Travailler en mode projet',
      'Concevoir une base de données adaptée aux besoins métier',
      'Structurer et exposer des données via une API',
      'Contrôler les accès et sécuriser les échanges',
      'Adapter un service à plusieurs clients applicatifs',
    ],
    githubUrl: 'https://github.com/tolkya/POLE-BACK',
    liveUrl: '',
    image: '/projects/sparklib-api.png',
    cardClass: 'wide-preview'
  },
  {
    id: 5,
    title: 'Sparklib Mobile',
    context: 'Projet scolaire (2ème année)',
    description: 'Application mobile du projet Sparklib, connectée à la même API que la version web. Le périmètre a été recentré sur les usages les plus pertinents sur smartphone: consultation des clubs et activités, gestion des inscriptions, accès au contenu pédagogique, et ajout de contenus terrain (photos/vidéos) pour les professeurs.',
    problematic: 'Comment adapter une plateforme initialement pensée pour le web en une expérience mobile fluide et intuitive, en conservant la logique métier, la gestion des rôles et la cohérence des données via une API commune ?',
    solution: 'Développement d’une application Flutter en Dart, consommation de l’API REST Sparklib avec authentification JWT, sélection et adaptation des fonctionnalités web les plus utiles au contexte mobile, interfaces différenciées selon les rôles (participant, professeur, administrateur), et intégration des capacités natives du téléphone pour la capture de photos/vidéos liées aux compétences.',
    technologies: ['Flutter', 'Dart', 'JWT', 'API REST', 'ngrok', 'Git'],
    skills: [
      'Concevoir une architecture Flutter modulaire',
      'Intégrer et configurer des packages Flutter adaptés aux besoins métier',
      'Gérer les permissions natives',
      'Exploiter les fonctionnalités natives du smartphone',
      'Concevoir une UI/UX mobile fluide et responsive'
    ],
    githubUrl: 'https://github.com/tolkya/POLE-MOBILE',
    liveUrl: '',
    image: '/projects/sparklib-mobile.jpg',
    imageType: 'portrait'
  },
  {
    id: 2,
    title: 'SUTOM',
    context: 'Projet d\'approfondissement (1ère année)',
    description: 'Clone du jeu SUTOM, variante française de Wordle. Le joueur doit deviner un mot en plusieurs essais, avec un retour visuel lettre par lettre après chaque tentative.',
    problematic: 'Comment découvrir et maîtriser les fondamentaux de JavaScript sans framework : manipulation du DOM, gestion des événements et logique conditionnelle ?',
    solution: 'Développement du jeu entièrement en JavaScript vanilla, gestion de l\'état de la partie, de la saisie clavier et du retour visuel case par case, conteneurisé avec Docker et versionné via Git.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'Docker', 'Git'],
    skills: [
      'Découvrir un nouveau langage de développement',
      'Concevoir une logique applicative côté client',
      'Structurer et manipuler une interface dynamique via le DOM',
      'Développer son autonomie et organiser sa montée en compétences'
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
    context: 'Projet scolaire (1ère année)',
    description: 'Plateforme de partage de contenu autour des motos. Un utilisateur peut s\'inscrire, se connecter et publier ses motos avec leurs détails. Les visiteurs peuvent consulter les annonces publiques.',
    problematic: 'Comment découvrir les bases du développement web (HTML, CSS, PHP) ainsi que la connexion à une base de données, la gestion de formulaires et les premiers réflexes de sécurité ?',
    solution: 'Développement d\'un site complet avec formulaires d\'inscription et de connexion en PHP/PDO, base de données MySQL, mise en place d\'une sécurité minimale, le tout conteneurisé avec Docker et versionné via Git.',
    technologies: ['PHP', 'PDO', 'MySQL', 'HTML', 'CSS', 'AJAX'],
    skills: [
      'Concevoir et développer une solution applicative',
      'Mettre à disposition des utilisateurs un service informatique',
      'Organiser son développement professionnel'
    ],
    githubUrl: 'https://github.com/tolkya/moto_crud',
    liveUrl: '',
    image: '/projects/moto-crud.png',
    cardClass: 'wide-preview'
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
