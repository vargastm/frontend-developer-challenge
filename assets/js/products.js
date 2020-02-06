function getApi(url) {
    axios.get(url)
        .then(response => {
          

        })
        .catch(error => {
            console.log(error)
        });
}


function showProducts(data){
    data.forEach(element => {
        document.getElementById("products").innerHTML = 
        `<article class="product">
        <figure style="background-image: url('http://imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=5783178');"></figure>
        <h3>${element}</h3>
        <p>Descrição do produto um pouco maior, com duas linhas ou três que explica melhor do que se trata.</p>
        <span class="old-price">De: R$23,99</span>
        <span class="price">Por: R$19,99</span>
        <span class="installment">ou 2x de R$9,99</span>
        <button>Comprar</button>
        </article>`;
    });
    
}

function nextPage(url){
   try {
    const response = getData(url);
    return response.data.nextPage;
   } catch (error) {
       console.log(error)
   }
}
