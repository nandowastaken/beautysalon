import "../styles/Avaliations.css";

export default function Avaliations() {
  return (
    <div className="Avaliations">
      <h1 className="avaliations-title">
        Depoimentos de quem já passou por aqui
      </h1>

      <div className="avaliations">
        <div className="avaliation">
          <p className="avaliation-content">
            <img src="../src/assets/icons/aspas.svg" alt="" className="aspas" />
            Eu sou cliente do Beautysalon há 5 anos e não troco por nada!
            Certamente meu cabelo mudou muito depois que comecei a tratar
            somente com produtos naturais e veganos. São profissionais incríveis
            e qualificados.
          </p>

          <div className="avaliator">
            <img
              src="../src/assets/imgs/wanessa.svg"
              alt=""
              className="profile"
            />
            <p className="avaliator-name">Wanessa Souza</p>
          </div>
        </div>

        <div className="avaliation">
          <p className="avaliation-content">
            <img src="../src/assets/icons/aspas.svg" alt="" className="aspas" />
            Minha mãe frequenta o salão há anos e me levou um dia para conhecer.
            Minha experiência foi incrível, eu continuo fazendo o a terapia
            capilar e isso salvou o meu cabelo. Adoro todos os profissionais do
            Beautysalon.
          </p>

          <div className="avaliator">
            <img src="../src/assets/imgs/luna.svg" alt="" className="profile" />
            <p className="avaliator-name">Luna Falcão</p>
          </div>
        </div>
      </div>

      <div className="points">
        <div className="point point-1"></div>
        <div className="point point-2"></div>
        <div className="point point-3"></div>
      </div>
    </div>
  );
}
