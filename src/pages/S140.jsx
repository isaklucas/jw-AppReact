// src/pages/S140.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/S140.css'; // Importe o arquivo de estilos CSS externo
import axios from 'axios'; // Importe o Axios
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // Importe o CSS do tema do editor




const S140 = () => {

  function getFullWeekOfMonth(month, year) {
 
      var date = new Date(year, month)
  
      var day = date.getDay();
      var diffDays = 0;
  
      console.log(day + "ss"+ date )

      while(day !== 0 ){
        diffDays++;
        date.setDate(date.getDate() + 1); // Incrementar o dia na data, para verificar o próximo dia.
        day = date.getDay();

      }
      console.log("Dias até próximo domingo: " + diffDays
      + "dia atual" + date);

      const { startOfWeek, startOfYear, differenceInWeeks } = require('date-fns');

      // Encontrar o início da semana e do ano
      const startOfWeekDate = startOfWeek(date);
      const startOfYearDate = startOfYear(date);

      // Calcular a diferença em semanas entre o início da semana e o início do ano
      const weekNumber = differenceInWeeks(startOfWeekDate, startOfYearDate) + 1;
        
  
    return weekNumber;
  }
  


  const months = [
    { value: '00', label: 'Janeiro' },
    { value: '01', label: 'Fevereiro' },
    { value: '02', label: 'Março' },
    { value: '03', label: 'Abril' },
    { value: '04', label: 'Maio' },
    { value: '05', label: 'Junho' },
    { value: '06', label: 'Julho' },
    { value: '07', label: 'Agosto' },
    { value: '08', label: 'Setembro' },
    { value: '09', label: 'Outubro' },
    { value: '10', label: 'Novembro' },
    { value: '11', label: 'Dezembro' },
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
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const semana =  getFullWeekOfMonth(month, currentYear)

    console.log('semana: ' + semana)
    console.log('nome: ' + fileName)
    console.log('url: ' + url)
    axios.get(`http://localhost:5000/api/reunioes`, {
      params: {
        semanaEnV: semana,
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

  const [content, setContent] = useState('');

  // Função para lidar com as alterações no conteúdo do editor
  const handleContentChange = (value) => {
    setContent(value);
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
       <div>
      <ReactQuill value={content} onChange={handleContentChange} />
    </div>
    </div>
  );
};

export default S140;
