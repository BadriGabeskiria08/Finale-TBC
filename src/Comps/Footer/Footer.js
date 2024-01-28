import "./Footer.css";
import tbc from "./sld4.webp"
import fb from "./z.webp"
import ytb from "./ytb.webp"


function Footer(){
    return(
        <div className="footer">
            <div className="cont1">
            <img src={tbc} alt="tbc" width="246px" height="70"/>
            <p>© 2023 ყველა უფლება დაცულია</p>
            <a href="/">წესები და პირობები</a>
            </div>
            <div className="cont2">
                <div className="fb">
                    <img src={fb} alt="Facebook"></img>
                    <img src={ytb} alt="ytb"></img>
                </div>
                <button>
                    <h3>მოგვწერეთ</h3>
                </button>
            </div>
        </div>
    )
}
export default Footer;