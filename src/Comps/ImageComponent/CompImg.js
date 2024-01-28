import "./CompImg.css"
import image from "./cmp.png"

function CompImg () {
    return(
        <div className="container">
            <img className="full-width"src={image} alt="full"/>     
            <div className="text-overimage"><h1>TBC x USAID </h1></div>
            <div className="text-overimage2"><h1> ᲢᲔᲥᲜᲝᲚᲝᲒᲘᲣᲠᲘ ᲒᲐᲜᲐᲗᲚᲔᲑᲘᲡᲗᲕᲘᲡ</h1></div>
        </div>
    )
}

export default CompImg;