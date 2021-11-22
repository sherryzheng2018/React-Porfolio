import "./navbar.scss";
import { GitHub, LinkedIn, PhoneIphone, MailOutline } from "@material-ui/icons"

export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={"navbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        <img src="./assets/logo.png" alt="" />
                    </a>
                    <div className="itemContainer">
                        <a className="icon" href="https://github.com/sherryzheng2018/" target="_blank" rel="noopener noreferrer">
                            <GitHub />
                        </a>
                    </div>
                    <div className="itemContainer">
                        <a className="icon" href="https://www.linkedin.com/in/sherryzheng2021/" target="_blank" rel="noopener noreferrer">
                            <LinkedIn />
                        </a>
                    </div>
                    <div className="itemContainer">
                        <PhoneIphone className="icon" />
                        <span>+1.206.518.7122</span>
                    </div>
                    <div className="itemContainer">
                        <MailOutline className="icon" />
                        <span>sherryzheng2018@gmail.com</span>
                    </div>
                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
