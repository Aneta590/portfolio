import "./App.css";
import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import photo from "./img/photo.png";
import { AiFillLinkedin,AiFillGithub }  from 'react-icons/ai';
import { MdEmail }  from 'react-icons/md';
function App() {
  return (
    <div className="introduction">
      <img src={photo} />
      <h1>Aneta Lisiecka</h1>
      <h3>Développeuse web & web mobile- junior</h3>
      <h4> Bonjour à tous !</h4>
      <h4>Quelques mots sur moi :</h4>
      <p>
        Je suis une personne qui croit que le monde doit être vécu, donc
        l'éducation et la formation continue sont très importantes pour moi.
        Nous terminons actuellement une formation de développement de site Web
        de cinq mois avec Social Builders et Konexio. J'aimerais continuer mon
        aventure et perfectionner ma nouvelle passion. A cet effet, je recherche
        un stage de développeur fullstack.
      </p>

      <h5>Compétences:</h5>
      <ul>
        <li>HTLM5</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>React Native</li>
        <li>MongoDB</li>
        <li>MySQL</li>
        <li>Github</li>
        <li>VSCode</li>
      </ul>

      <div className="fontlink">
        <AiFillGithub/>
        <AiFillLinkedin/>
        <a href="mailto:miaou@foo.bar"><MdEmail/></a>
        </div>
    </div>
  );
}

export default App;
