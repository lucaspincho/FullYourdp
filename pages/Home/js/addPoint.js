if (!token) {
  alert("Você não tem autorização")
} else {
  var payload = token.split('.')[1];
  var decodedPayload = atob(payload);
  var userId = JSON.parse(decodedPayload).id;

  updateDate();
  updateTime();



  const btnEntrada = document.getElementById("button_userEntrada")

  btnEntrada.addEventListener('click', () => {
    fetch(`https://api-yourdp.onrender.com/user/${userId}/updatePoint`, {
      method: 'PUT',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        ponto: {
          data: dateString,
          entrada: timeString,
          saida: "00:00"
        }
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg) {
          alert(data.msg)
        } else {
          alert('Error ao cadastrar o ponto')
        }
      })
      .catch((err) => console.log(err))
  })


}