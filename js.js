/*fechar aba de busca quando clicar no carrinho*/

let navbar = document.querySelector('.navbar');

/*campo de busca*/

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}
/*carrinho de compras*/
let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let profileButton = document.getElementById('profile-btn');

profileButton.addEventListener('click', function() {
    /*direcionando o usuario para a pagina de login*/
    window.location.href = 'login.html'; 
});

/*validação de login*/

function validarLogin() {
        
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;

    
    if (nome === "" || senha === "") {
      alert("Por favor, preencha todos os campos.");
    } else {
    
      alert("Login válido! Você pode prosseguir.");
    }
  }

  function validarLogin() {
        
    const nome = document.getElementById("nome").value;
    const senha = document.getElementById("senha").value;

    
    if (nome === "" || senha === "") {
      alert("Por favor, preencha todos os campos.");
    } else {
    
      alert("Login válido! Você pode prosseguir.");
    }
  }