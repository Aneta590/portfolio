import "./App.css";
import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import photo from "./img/photo.png";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTools } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import Dropdown from "react-bootstrap/Dropdown";
function App() {
  return (
    <>
      <div className="menu">
        <Dropdown className="dropdown" byStyle="warning" size="lg">
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <BsTools />
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.ItemText>HTLM5</Dropdown.ItemText>
            <Dropdown.ItemText>CSS</Dropdown.ItemText>
            <Dropdown.ItemText>JavaScript</Dropdown.ItemText>
            <Dropdown.ItemText>React</Dropdown.ItemText>
            <Dropdown.ItemText>React Native</Dropdown.ItemText>
            <Dropdown.ItemText>MongoDB</Dropdown.ItemText>
            <Dropdown.ItemText>MySQL</Dropdown.ItemText>
            <Dropdown.ItemText>Github</Dropdown.ItemText>
            <Dropdown.ItemText>VSCode</Dropdown.ItemText>
          </Dropdown.Menu>
        </Dropdown>
        <div className="fontlink">
          <a href="https://linkedin.com/in/aneta-lisiecka-3517691b8">
            <AiFillLinkedin />
          </a>
          <a href="mailto:miaou@foo.bar">
            <MdEmail />
          </a>
        </div>
      </div>

      <div className="introduction">
        <img src={photo} /><br/>
        <h1>Aneta Lisiecka</h1>
        <h3>Développeuse web & web mobile- junior</h3><br/>
        <h4> Bonjour à tous !</h4><br/>
        <h4>Quelques mots sur moi :</h4><br/>
        <p>
          Je suis une personne qui croit que le monde doit être vécu, donc
          l'éducation et la formation continue sont très importantes pour moi.
          Nous terminons actuellement une formation de développement de site Web
          de cinq mois avec Social Builders et Konexio. J'aimerais continuer mon
          aventure et perfectionner ma nouvelle passion. A cet effet, je
          recherche un stage de développeur fullstack.
        </p>
      </div>
    </>
  );
}

export default App;
