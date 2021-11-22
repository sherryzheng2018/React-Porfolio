import "./portfolio.scss"
import PortfolioItem from "./PortfolioItem"

export default function Portfolio() {
    return (
        <div className="portfolio" id="portfolio" >
            <h1>Portfolio</h1>
            <div className="container">
                <PortfolioItem
                    appUrl="https://sherryzheng2018.github.io/weather-dashboard/"
                    appImg="./assets/weather-dashboard1.png"
                    appTitle="Weather Dashboard"
                    githubLink="https://github.com/sherryzheng2018/weather-dashboard" />

                <PortfolioItem
                    appUrl="https://sherryzheng2018.github.io/quiz-app/"
                    appImg="./assets/quiz1.png"
                    appTitle="Quiz App"
                    githubLink="https://github.com/sherryzheng2018/quiz-app" />

                <PortfolioItem
                    appUrl="https://sherryzheng2018.github.io/work-day-scheduler/"
                    appImg="./assets/daily-planner-app.png"
                    appTitle="Work Day Scheduler"
                    githubLink="https://github.com/sherryzheng2018/work-day-scheduler" />

                <PortfolioItem
                    appUrl="https://github.com/sherryzheng2018/simple-covid-tracker-for-young-teens"
                    appImg="./assets/group-project.png"
                    appTitle="Covid Tracker App"
                    githubLink="https://github.com/sherryzheng2018/simple-covid-tracker-for-young-teens" />

                <PortfolioItem
                    appUrl="https://coder-mingle.herokuapp.com/"
                    appImg="./assets/coder-mingle.png"
                    appTitle="Coder Dating App"
                    githubLink="https://github.com/sherryzheng2018/Coder-Mingle" />

                <PortfolioItem
                    appUrl="https://github.com/sherryzheng2018/e-commerce-back-end"
                    appImg="./assets/e-commerce-backend.png"
                    appTitle="E-Commerce Back End"
                    githubLink="https://github.com/sherryzheng2018/e-commerce-back-end" />
            </div>
        </div>
    )
}