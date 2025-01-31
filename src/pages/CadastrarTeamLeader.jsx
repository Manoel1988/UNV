import React from 'react';

    const CadastrarTeamLeader = () => {
      return (
        <div className="container mt-5">
          <h1>Cadastro de Team Leader</h1>
          <form action="process_team_leader.php" method="POST">
            <div className="form-group">
              <label for="nome">Nome do Team Leader</label>
              <input type="text" className="form-control" id="nome" name="nome" required />
            </div>
            <button type="submit" className="btn btn-primary">Cadastrar</button>
            <a href="/lista-team-leader" className="btn btn-secondary">Ver Team Leaders Cadastrados</a>
          </form>
        </div>
      );
    };

    export default CadastrarTeamLeader;
