if (!token) {
  // Redirecione para a página de login se não houver token
  alert('Não foi possivel carregar a lista de pontos')
} else {
  var payload = token.split('.')[1];
  var decodedPayload = atob(payload);
  var userId = JSON.parse(decodedPayload).id;

  fetch('https://api-yourdp.onrender.com/user/' + userId, {
    method: 'GET',
    headers: {
      'Authorization': 'Bearer ' + token
    }
  })
  .then((res) => res.json())
  .then((data) => data.msg.ponto)
  .then((pontos) => {
    let table = document.getElementById('tablePoint');

    pontos.shift()

    pontos.map((ponto) => {
      table.innerHTML += `
      <tr>
        <td>${ponto.data}</td>
        <td>${ponto.entrada}</td>
        <td>${ponto.saida}</td>
      </tr>
      
      `
    })
  })
}