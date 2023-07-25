// src/pages/S140.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/S140.css'; // Importe o arquivo de estilos CSS externo
import axios from 'axios'; // Importe o Axios

const S140 = () => {
  const months = [
    { value: '01', label: 'Janeiro' },
    { value: '02', label: 'Fevereiro' },
    { value: '03', label: 'Março' },
    { value: '04', label: 'Abril' },
    { value: '05', label: 'Maio' },
    { value: '06', label: 'Junho' },
    { value: '07', label: 'Julho' },
    { value: '08', label: 'Agosto' },
    { value: '09', label: 'Setembro' },
    { value: '10', label: 'Outubro' },
    { value: '11', label: 'Novembro' },
    { value: '12', label: 'Dezembro' },
  ];

  const [month, setMonth] = useState('');
  const [fileName, setFileName] = useState('');
  const [url, setUrl] = useState('');
  
  

  const [responseText, setResponseText] = useState('');

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleFileNameChange = (event) => {
    setFileName(event.target.value);
  };

  const handleUrlChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSendRequest = () => {
    // Requisição GET com Axios
    console.log('mes: ' + month)
    console.log('nome: ' + fileName)
    console.log('url: ' + url)
    axios.get(`http://localhost:5000/api/reunioes`, {
      params: {
        mesEnV: month,
        NomeEnV: fileName,
        urlEnv: url
      }
    })
      .then((response) => {
        

        console.log('Resposta do Servidor:', response.data);
        setResponseText(JSON.stringify(response.data, null, 2));
      })
      .catch((error) => {
        // Lógica para lidar com erros na requisição
        console.error('Erro na Requisição:', error);
      });
  };

  return (
    <div className="s140-container">
      <h1 className="s140-title">S140 Page</h1>
      <div className="s140-form-container">
        <select className="s140-input" value={month} onChange={handleMonthChange}>
          <option value="">Selecione o Mês</option>
          {months.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>
        <input
          type="text"
          className="s140-input"
          placeholder="Nome do Arquivo"
          value={fileName}
          onChange={handleFileNameChange}
        />
        <input
          type="text"
          className="s140-input"
          placeholder="Url"
          value={url}
          onChange={handleUrlChange}
        />
        <button className="s140-button" onClick={handleSendRequest}>
          Enviar
        </button>
      </div>
      <Link to="/" className="s140-back-link">
        <span className="s140-back-icon">&#8592;</span> Voltar para a Página Inicial
      </Link>
      <textarea
        id="resposta"
        value={responseText}
        rows={10}
        cols={50}
        readOnly
      />
    </div>
  );
};

export default S140;
