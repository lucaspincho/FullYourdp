var token = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/, '$1');
if (!token) {
  // Redirecione para a página de login se não houver token
  window.location.href = '/';
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
  .then((data) => {
    console.log(data)
    document.getElementById('nameUser').innerHTML = data.msg.name;
  })
}