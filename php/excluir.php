<?php 

//Incluir conexão
include("conexao.php");

//Obter dados
$idCurso = $_GET["idCurso"];

//SQL
$sql = "DELETE FROM cursos WHERE idCurso=$idCurso";
mysqli_query($conexao, $sql);

?>