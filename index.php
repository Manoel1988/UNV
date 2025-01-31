<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cadastro de Empresas</title>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
      <div class="container mt-5">
        <h1>Cadastro de Empresa</h1>
        <form action="process.php" method="POST">
          <div class="form-group">
            <label for="nome">Nome da Empresa</label>
            <input type="text" class="form-control" id="nome" name="nome" required>
          </div>
          <div class="form-group">
            <label for="mentoria">Mentoria</label>
            <input type="text" class="form-control" id="mentoria" name="mentoria" required>
          </div>
          <div class="form-group">
            <label for="team_leader">Team Leader</label>
            <input type="text" class="form-control" id="team_leader" name="team_leader" required>
          </div>
          <button type="submit" class="btn btn-primary">Cadastrar</button>
          <a href="lista.php" class="btn btn-secondary">Ver Empresas Cadastradas</a>
        </form>
      </div>
    </body>
    </html>
