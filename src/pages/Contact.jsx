import { useState } from 'react';
import { Send, CheckCircle, AlertCircle, Mail, MapPin, Phone } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle, submitting, success, error
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('submitting');

    // Simulation d'un appel API (backend non requis)
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Retour à l'état initial après 3 secondes
      setTimeout(() => setStatus('idle'), 3000);
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Effacer l'erreur lors de la saisie
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  return (
    <div className="contact-page animate-fade-in">
      <div className="container section">
        <h1 className="section-title">Me Contacter</h1>

        <div className="contact-container">
          {/* Informations de contact */}
          <div className="contact-info glow-box delay-1">
            <h2>Discutons de votre projet</h2>
            <p className="contact-desc">
              Je suis actuellement à la recherche d'une alternance pour ma 3ème année (Licence/Bachelor).
              N'hésitez pas à me contacter pour toute opportunité ou question !
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon"><Mail size={20} /></div>
                <div>
                  <h3>Email</h3>
                  <p>jc.caillault@outlook.fr</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><MapPin size={20} /></div>
                <div>
                  <h3>Localisation</h3>
                  <p>Limoges, France</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon"><Phone size={20} /></div>
                <div>
                  <h3>Téléphone</h3>
                  <p>06 28 66 74 06</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulaire */}
          <div className="contact-form-container glow-box delay-2">
            {status === 'success' ? (
              <div className="success-message animate-fade-in">
                <CheckCircle size={64} className="success-icon" />
                <h2>Message Envoyé !</h2>
                <p>Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Nom / Entreprise</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                    placeholder="John Doe"
                  />
                  {errors.name && <span className="error-text"><AlertCircle size={14} /> {errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                    placeholder="john@example.com"
                  />
                  {errors.email && <span className="error-text"><AlertCircle size={14} /> {errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                    placeholder="Bonjour, je vous contacte pour..."
                    rows="5"
                  ></textarea>
                  {errors.message && <span className="error-text"><AlertCircle size={14} /> {errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary submit-btn ${status === 'submitting' ? 'loading' : ''}`}
                  disabled={status === 'submitting'}
                >
                  {status === 'submitting' ? 'Envoi en cours...' : (
                    <>Envoyer le message <Send size={18} /></>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
