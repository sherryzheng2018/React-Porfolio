import "./menu.scss"

function PortfolioItem({ appUrl, appImg, }) {
    return (
        // <div className={"menu " + (menuOpen && "active")}>
        //     <ul>
        //         <li onClick={()=>setMenuOpen(false)}>
        //             <a href="#intro">Home</a>
        //         </li>
        //         <li onClick={()=>setMenuOpen(false)}>
        //             <a href="#portfolio">Portfolio</a>
        //         </li>
        //         <li onClick={()=>setMenuOpen(false)}>
        //             <a href="#contact">Contact</a>
        //         </li>
        //     </ul>
        // </div>



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
    )
}

export default PortfolioItem
