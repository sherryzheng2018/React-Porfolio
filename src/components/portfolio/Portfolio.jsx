import "./portfolio.scss"
import { GitHub } from "@material-ui/icons"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio" >
            <h1>Portfolio</h1>
            <div className="container">

                <div className="item">
                    <a href="https://sherryzheng2018.github.io/weather-dashboard/" target="_blank" rel="noopener noreferrer">
                        <img src="./assets/weather-dashboard1.png" alt="Weather Dashboard" />
                    </a>
                    <h3>Weather Dashboard
                        <a className="github" href="https://github.com/sherryzheng2018/weather-dashboard" target="_blank" rel="noopener noreferrer">
                            <GitHub />
                        </a>
                    </h3>
                </div>

                <div className="item">
                    <a href="https://sherryzheng2018.github.io/quiz-app/" target="_blank" rel="noopener noreferrer">
                        <img src="./assets/quiz1.png" alt="Quiz App" />
                    </a>
                    <h3>Quiz App
                        <a className="github" href="https://github.com/sherryzheng2018/quiz-app" target="_blank" rel="noopener noreferrer">
                            <GitHub />
                        </a>
                    </h3>
                </div>

                <a href="https://sherryzheng2018.github.io/work-day-scheduler/" target="_blank" rel="noopener noreferrer">
                    <div className="item">
                        <img src="./assets/daily-planner-app.png" alt="workday planner" />
                        <h3>Work Day Scheduler</h3>
                    </div>
                </a>

                <a href="https://github.com/sherryzheng2018/simple-covid-tracker-for-young-teens" target="_blank" rel="noopener noreferrer">
                    <div className="item">
                        <img src="./assets/group-project.png" alt="Covid-app" />
                        <h3>Group Project - Covid App</h3>
                    </div>
                </a>

                <a href="https://coder-mingle.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <div className="item">
                        <img src="./assets/coder-mingle.png" alt="Covid-app" />
                        <h3>Group Project - Dating App</h3>
                    </div>
                </a>

                <a href="https://github.com/sherryzheng2018/e-commerce-back-end" target="_blank" rel="noopener noreferrer">
                    <div className="item">
                        <img src="./assets/e-commerce-backend.png" alt="E-commerce backend" />
                        <h3>E-Commerce Back End</h3>
                    </div>
                </a>

            </div>
        </div>
    )
}