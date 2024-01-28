import "./Header.css"
import logo from "./imgs/lg.png"


function Header () {
   
    return (
        <header className="Header">
            <div className="logo">
                <div> <img src={logo} alt="logo" width={75}/></div>
                <div><h3>X აკადემია</h3></div>
            </div>
            <div className="nav">
                <div><a href="/">მთავარი</a></div>
                <div><a href="/">TBC IT</a></div>
                <div className="special-link"><a href="/">TBC x USAID</a></div>
                <div><a href="/">რისკები</a></div>
            </div>
        </header>
    )
}

export default Header;