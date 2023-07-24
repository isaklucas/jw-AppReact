// src/pages/News.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const News = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/news') // Atualize a URL para a sua API Python
      .then(response => {
        setNewsData(response.data);
      })
      .catch(error => {
        console.error('Erro ao buscar notícias:', error);
      });
  }, []);

  return (
    <div>
      <h1>News Page</h1>
      <ul>
        {newsData.map((newsItem, index) => (
          <li key={index}>{newsItem.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default News;
