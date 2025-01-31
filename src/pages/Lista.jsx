import React, { useState, useEffect } from 'react';
    import { useNavigate } from 'react-router-dom';

    const Lista = () => {
      const [empresas, setEmpresas] = useState([]);
      const navigate = useNavigate();

      useEffect(() => {
        const storedEmpresas = JSON.parse(localStorage.getItem('empresas')) || [];
        setEmpresas(storedEmpresas);
      }, []);

      const handleDelete = (index) => {
        const updatedEmpresas = empresas.filter((_, i) => i !== index);
        setEmpresas(updatedEmpresas);
        localStorage.setItem('empresas', JSON.stringify(updatedEmpresas));
      };

      return (
        <div className="container">
          <h1>Lista de Empresas</h1>
          <button onClick={() => navigate('/')}>Voltar</button>
          <ul>
            {empresas.map((empresa, index) => (
              <li key={index}>
                <strong>Nome:</strong> {empresa.nome} <br />
                <strong>Mentoria:</strong> {empresa.mentoria} <br />
                <strong>Team Leader:</strong> {empresa.teamLeader} <br />
                <button onClick={() => handleDelete(index)}>Apagar</button>
              </li>
            ))}
          </ul>
        </div>
      );
    };

    export default Lista;
