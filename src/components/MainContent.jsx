import homeImg from "../assets/home-img.svg"
import "../styles/MainContent.css"

export default function MainContent() {
    return (
        <div className="MainContent">
            <div className="scheduling">
                <h1 className="schedule-title">Saúde natural para os seus cabelos</h1>
                <p className="schedule-description">Um salão exclusivo em São Paulo, especializado em tratamentos naturais.</p>
                <button className="schedule-button">Agendar um horário</button>
            </div>

            <img src={homeImg} className="home-img"/>
        </div>
    )
}