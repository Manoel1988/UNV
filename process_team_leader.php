<?php
    include 'config.php';

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $nome = $_POST['nome'];

      $sql = "INSERT INTO team_leaders (nome) VALUES ('$nome')";

      if ($conn->query($sql) === TRUE) {
        header("Location: cadastrar_team_leader.php?success=1");
      } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
      }

      $conn->close();
    }
    ?>
