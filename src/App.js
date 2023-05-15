import React, { useState, useEffect } from "react";
import "./style.css";

function App() {
  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadNutri() {
      let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
      fetch(url)
        .then((r) => r.json())
        .then((json) => {
          console.log(json);
          setNutri(json);
        });
    }

    loadNutri();
  }, []);

  return (
    <div className="container">
      <header>
        <strong>ReactNutri</strong>
      </header>

      {nutri.map((item) => {
        return (
          <article key={item.id} className="post">
            <strong className="title">{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className="image" />
            <p className="subtitle">{item.subtitulo}</p>
            <a className="button">Acessar</a>
          </article>
        );
      })}
    </div>
  );
}

export default App;
