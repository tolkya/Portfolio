import { useEffect, useState } from 'react';
import { ExternalLink, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { createPortal } from 'react-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const imageType = project.imageType || 'landscape';
  const imageVariant = project.imageVariant || '';
  const cardClass = project.cardClass || '';
  const canOpenPreview = project.cardClass === 'wide-preview' && Boolean(project.image);

  useEffect(() => {
    if (!isPreviewOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isPreviewOpen]);

  const previewModal = isPreviewOpen && canOpenPreview
    ? createPortal(
        <div className="image-preview-modal" role="dialog" aria-modal="true" aria-label={`Aperçu agrandi du projet ${project.title}`}>
          <button
            type="button"
            className="image-preview-backdrop"
            aria-label="Fermer l'aperçu"
            onClick={() => setIsPreviewOpen(false)}
          />
          <div className="image-preview-panel">
            <button
              type="button"
              className="image-preview-close"
              aria-label="Fermer l'aperçu"
              onClick={() => setIsPreviewOpen(false)}
            >
              <X size={20} />
            </button>
            <img src={project.image} alt={`Aperçu agrandi du projet ${project.title}`} className="image-preview-full" />
          </div>
        </div>,
        document.body,
      )
    : null;

  return (
    <>
      <div className={`project-card ${cardClass} glow-box animate-fade-in`}>
        {project.image && (
          <div className={`project-image ${imageType} ${imageVariant}`}>
            <img src={project.image} alt={`Aperçu du projet ${project.title}`} />
            {canOpenPreview && (
              <button
                type="button"
                className="image-preview-trigger"
                onClick={() => setIsPreviewOpen(true)}
              >
                Agrandir l'aperçu
              </button>
            )}
          </div>
        )}
        <div className="project-content">
          <div className="project-header">
            <h3 className="project-title">{project.title}</h3>
            <span className="project-context">{project.context}</span>
          </div>

          <p className="project-description">{project.description}</p>

          <div className="project-details">
            <div className="detail-section">
              <h4 className="detail-title">Problématique</h4>
              <p>{project.problematic}</p>
            </div>
            <div className="detail-section">
              <h4 className="detail-title">Solution</h4>
              <p>{project.solution}</p>
            </div>
          </div>

          <div className="project-techs">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>

          <div className="project-skills">
            <strong>Compétences (BTS SIO) :</strong>
            <ul>
              {project.skills.map((skill, index) => (
                <li key={index}>• {skill}</li>
              ))}
            </ul>
          </div>

          <div className="project-footer">
            {project.githubUrl ? (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                <FaGithub size={18} /> Code source
              </a>
            ) : (
              <span className="code-private"><FaGithub size={18} /> Code disponible sur demande</span>
            )}

            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                <ExternalLink size={18} /> Voir le projet
              </a>
            )}
          </div>
        </div>
      </div>

      {previewModal}
    </>
  );
};

export default ProjectCard;
