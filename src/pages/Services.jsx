import "../styles/Services.css";

export default function Services() {
  return (
    <div className="Services">
      <div className="services-info">
        <h2 className="services-info-title">Serviços</h2>
        <p className="services-info-desc">
          Com mais de 10 anos no mercado, o{" "}
          <span className="highlight-1">Beautysalon</span> já conquistou
          clientes de inúmeros países com seus tratamentos exclusivos e
          totalmente naturais
        </p>
      </div>

      <div className="services-list">
        <div className="service">
          <img src="../src/assets/icon-1.svg" alt="" className="icon-1" />
          <h2 className="service-title">Terapia capilar</h2>
          <p className="service-desc">
            Terapia completa para couro cabeludo e fios, protegendo todos os
            tipos de cabelos, inclusive os longos e finos.
          </p>
        </div>

        <div className="service">
          <img src="../src/assets/icon-2.svg" alt="" className="icon-2" />
          <h2 className="service-title">Cortes</h2>
          <p className="service-desc">
            A nossa equipe é repleta de profissionais renomados, famosos por
            lançarem tendências com cortes diferenciados e clássicos.
          </p>
        </div>

        <div className="service">
          <img src="../src/assets/icon-3.svg" alt="" className="icon-3" />
          <h2 className="service-title">Tratamentos</h2>
          <p className="service-desc">
            O beautysalon conta com diversos tratamentos naturais e totalmente
            veganos, para qualquer tipo de cabelo.
          </p>
        </div>
      </div>
    </div>
  );
}
