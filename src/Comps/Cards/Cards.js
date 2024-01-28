import "./Cards.css"
import CardPackage from "./CardPackage";

function Cards () {
    return (
        <div className="card-container">
            <h1>სასწავლო კურსები</h1>   
           {CardPackage.map((card) => (
            <div key={card.id} className="card">
            <img src={card.image} alt={card.name} />
            <h3>{card.name}</h3>
            <p>{card.text}</p>
            <a href="/">{card.buttonText}</a>
        </div>
      ))}
        </div>
    )
}

export default Cards;