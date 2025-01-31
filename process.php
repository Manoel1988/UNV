<?php
    include 'config.php';

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
      $nome = $_POST['nome'];
      $mentoria = $_POST['mentoria'];
      $team_leader = $_POST['team_leader'];

      $sql = "INSERT INTO empresas (nome, mentoria, team_leader) VALUES ('$nome', '$mentoria', '$team_leader')";

      if ($conn->query($sql) === TRUE) {
        header("Location: lista.php");
      } else {
        echo "Erro: " . $sql . "<br>" . $conn->error;
      }

      $conn->close();
    }
    ?>
