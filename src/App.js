import './App.css';
import Header from "./Comps/Header"
import CompImg from "./Comps/ImageComponent/CompImg"
import Info from "./Comps/InfoContent/Info"
import Cards from "./Comps/Cards/Cards"
import Slider from "./Comps/Slider/Slider"
import Accordion from './Comps/Questions/Accordion';
import Footer from './Comps/Footer/Footer';


function App() {
 
  return (
    <div className="App">
      <Header/>
      <CompImg/>
      <Info/>
      <Cards/>
      <Slider/>
      <Accordion/>
      <Footer/>
    </div>
  );
}

export default App;
