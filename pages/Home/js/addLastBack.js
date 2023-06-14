if (!token) {
  alert("Você não tem autorização")
} else {
  var payload = token.split('.')[1];
  var decodedPayload = atob(payload);
  var userId = JSON.parse(decodedPayload).id;

  updateTime();


  const btnVolta = document.getElementById("button_userVolta")

  btnVolta.addEventListener('click', () => {
    fetch(`https://api-yourdp.onrender.com/user/${userId}/updateBreakLast`, {
      method: 'PUT',
      headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        volta: timeString
      })
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.msg) {
          alert(data.msg)
        }
      })
      .catch((err) => console.log(err))
  })


}