import React, { useEffect, useState } from 'react';

    const ListaTeamLeader = () => {
      const [teamLeaders, setTeamLeaders] = useState([]);

      useEffect(() => {
        // Fetch team leaders from the server
        fetch('/api/team-leaders')
          .then(response => response.json())
          .then(data => setTeamLeaders(data));
      }, []);

      return (
        <div className="container mt-5">
          <h1>Lista de Team Leaders</h1>
          <a href="/cadastrar-team-leader" className="btn btn-secondary mb-3">Voltar</a>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Nome</th>
              </tr>
            </thead>
            <tbody>
              {teamLeaders.length > 0 ? (
                teamLeaders.map((leader, index) => (
                  <tr key={index}>
                    <td>{leader.nome}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colspan="1">Nenhum Team Leader cadastrado.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      );
    };

    export default ListaTeamLeader;
