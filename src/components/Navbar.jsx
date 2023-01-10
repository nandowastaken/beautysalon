import Logo from "../assets/icons/logo.svg";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="nav">
        <img src={Logo} className="logo" />

        <div className="nav-links">
          <a href="">Início</a>
          <a href="">Sobre</a>
          <a href="">Serviços</a>
          <a href="">Depoimentos</a>
          <a href="">Contato</a>
        </div>
      </div>

      <div className="bottom-line"></div>
    </>
  );
}
