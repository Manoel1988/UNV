import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';

    const Cadastro = () => {
      const [empresa, setEmpresa] = useState({ nome: '', mentoria: '', teamLeader: '' });
      const navigate = useNavigate();

      const handleChange = (e) => {
        const { name, value } = e.target;
        setEmpresa({ ...empresa, [name]: value });
      };

      const handleSubmit = (e) => {
        e.preventDefault();
        const empresas = JSON.parse(localStorage.getItem('empresas')) || [];
        empresas.push(empresa);
        localStorage.setItem('empresas', JSON.stringify(empresas));
        navigate('/lista');
      };

      return (
        <div className="container">
          <h1>Cadastro de Empresa</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" name="nome" placeholder="Nome da Empresa" value={empresa.nome} onChange={handleChange} required />
            <input type="text" name="mentoria" placeholder="Mentoria" value={empresa.mentoria} onChange={handleChange} required />
            <input type="text" name="teamLeader" placeholder="Team Leader" value={empresa.teamLeader} onChange={handleChange} required />
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      );
    };

    export default Cadastro;
