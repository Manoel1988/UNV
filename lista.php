<?php
    include 'config.php';

    $sql = "SELECT * FROM empresas";
    $result = $conn->query($sql);
    ?>

    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Lista de Empresas</title>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    </head>
    <body>
      <div class="container mt-5">
        <h1>Lista de Empresas</h1>
        <a href="index.php" class="btn btn-secondary mb-3">Voltar</a>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Mentoria</th>
              <th>Team Leader</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <?php if ($result->num_rows > 0): ?>
              <?php while($row = $result->fetch_assoc()): ?>
                <tr>
                  <td><?php echo $row['nome']; ?></td>
                  <td><?php echo $row['mentoria']; ?></td>
                  <td><?php echo $row['team_leader']; ?></td>
                  <td>
                    <a href="editar.php?id=<?php echo $row['id']; ?>" class="btn btn-warning btn-sm">Editar</a>
                    <a href="apagar.php?id=<?php echo $row['id']; ?>" class="btn btn-danger btn-sm">Apagar</a>
                  </td>
                </tr>
              <?php endwhile; ?>
            <?php else: ?>
              <tr>
                <td colspan="4">Nenhuma empresa cadastrada.</td>
              </tr>
            <?php endif; ?>
          </tbody>
        </table>
      </div>
    </body>
    </html>

    <?php $conn->close(); ?>
