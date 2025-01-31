<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Cadastro de Team Leader</title>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
      <div class="container mt-5">
        <h1>Cadastro de Team Leader</h1>
        <form action="process_team_leader.php" method="POST">
          <div class="form-group">
            <label for="nome">Nome do Team Leader</label>
            <input type="text" class="form-control" id="nome" name="nome" required>
          </div>
          <button type="submit" class="btn btn-primary">Cadastrar</button>
          <a href="lista_team_leader.php" class="btn btn-secondary">Ver Team Leaders Cadastrados</a>
        </form>
      </div>
    </body>
    </html>
