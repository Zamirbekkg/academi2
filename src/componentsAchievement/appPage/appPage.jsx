import './appPage.scss';
import appPng from './png/app.png';


const AppPage = () => {
    return (
        <div className="achievement-page">
            <div className="achievement-content">
                <div className="text-content">
                    <h1>Поздравляем с великим достижением!</h1>
                    <p>
                        Юсуф продемонстрировал не только глубокие знания, но и невероятное
                        упорство и стремление к совершенству, заняв 1-е место на олимпиаде по
                        физике. Это выдающееся событие.
                    </p>
                </div>
                <div className="image-content">
                    <img src={appPng} alt="Юсуф Абдурахманов" />
                </div>
            </div>
        </div>
    );
};


export default AppPage;
