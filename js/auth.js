//LOGIN SERVER

const formLogin = document.getElementById('formLogin');

formLogin.addEventListener('submit', function(event)  {
  event.preventDefault()

  let emailUser = document.getElementById('emailUser').value;
  let passwordUser = document.getElementById('passwordUser').value;

  let data ={
    email: emailUser,
    password: passwordUser
  }

  document.getElementById('loading-spinner').style.display = 'block';
  //Post validation
  fetch('https://api-yourdp.onrender.com/auth/user', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((res) => res.json())
  .then((data) => {
    document.getElementById('loading-spinner').style.display = 'none';
    document.cookie = 'token=' + data.token + '; path=/';

    if(!data.token){
      alert(data.msg)

      setTimeout(function() {
        window.location.href = '/';
      }, 2000);
    
      
      
    } else {
      // Redirecione para a página restrita
      window.location.href = '/pages/Home/Home.html';
      alert('Logado com sucesso')
    }
    
    
  })
  .catch((error) => {
    alert(error.message)
  })

})