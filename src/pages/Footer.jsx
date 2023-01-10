import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="copyright">
        <img src="../src/assets/icons/logo-copyright.svg" alt="" />
        <small className="copyright-info">©2021 Beautysalon.</small>
        <p className="copyright-info">Todos os direitos reservados.</p>
      </div>

      <div className="social-media">
        <img
          src="../src/assets/icons/instagram-icon.svg"
          alt=""
          className="social-media-icon"
        />
        <img
          src="../src/assets/icons/facebook-icon.svg"
          alt=""
          className="social-media-icon"
        />
        <img
          src="../src/assets/icons/youtube-icon.svg"
          alt=""
          className="social-media-icon"
        />
      </div>
    </div>
  );
}
