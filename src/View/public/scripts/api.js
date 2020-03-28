function getAluno(){

    axios.get('http://localhost:3000/api/v1/alunos')
    .then(response => console.log(response))
    .catch(error => console.log(error))

}