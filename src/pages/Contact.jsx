import "../styles/Contact.css";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="contact-main-info">
        <h2 className="contact-main-info-title">
          Entre em contato com a gente!
        </h2>

        <p className="contact-main-info-desc">
          Entre em contato com a Beautysalon, queremos tirar suas dúvidas, ouvir
          suas críticas e sugestões.
        </p>

        <button className="contact-main-info-button">
          <img src="../src/assets/icons/whatsapp-icon.svg" alt="" />
          Entrar em contato
        </button>
      </div>

      <div className="contact-side-infos">
        <div className="contact-side-info">
          <img src="../src/assets/icons/phone-icon.svg" alt="" />
          <p className="contact-side-info-text">11 99845-6754</p>
        </div>

        <div className="contact-side-info">
          <img src="../src/assets/icons/location-icon.svg" alt="" />
          <p className="contact-side-info-text">R. Amauri Souza, 346</p>
        </div>

        <div className="contact-side-info">
          <img src="../src/assets/icons/email-icon.svg" alt="" />
          <p className="contact-side-info-text">contato@beautysalon.com</p>
        </div>
      </div>
    </div>
  );
}
