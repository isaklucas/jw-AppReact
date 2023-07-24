// src/pages/Home.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Importe o componente Link do react-router-dom
import '../styles/Home.css';

const HomeContainer = styled.div`
  /* estilos do componente HomeContainer */
`;

const Home = () => {
  return (
    <HomeContainer className="home-container">
      <h1 className="title">JW Helper</h1>
      <div className="card-container">
        {/* Adicione o Link em cada card com a rota de destino */}
        <Link className="card" to="/s140">
            <h3>Gerar S140</h3>
            <p>Gere automaticamente a S140</p>
            </Link> {/* Defina a rota de destino para "/page1" */}
        <Link className="card" to="/page2">Card 2</Link> {/* Defina a rota de destino para "/page2" */}
        <Link className="card" to="/page3">Card 3</Link> {/* Defina a rota de destino para "/page3" */}
        <Link className="card" to="/page4">Card 4</Link> {/* Defina a rota de destino para "/page4" */}
        <Link className="card" to="/page5">Card 5</Link> {/* Defina a rota de destino para "/page5" */}
        <Link className="card" to="/page6">Card 6</Link> {/* Defina a rota de destino para "/page6" */}
      </div>
    </HomeContainer>
  );
};

export default Home;
