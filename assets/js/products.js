document.addEventListener("DOMContentLoaded", () => {
    let urlApi = "//frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1";
    getProducts(urlApi);
});

document.getElementById("button-load-more").onclick = () => {
    startPreloader();
    getProducts(urlApi);
}

function getProducts(url) {
    axios.get(`https://${url}`)
        .then(response => {
            showProducts(response.data.products)
            urlApi = response.data.nextPage;
        })
        .catch(error => {
            console.log(error.message)
        })
        .finally(() => endPreloader());
}

function showProducts(data) {
    data.forEach(product => {
        const article = document.createElement('article');
        article.className = 'product animated fadeIn';
        article.innerHTML = `<figure style="background-image: url('https:${product.image}');"></figure>
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span class="old-price">De: R$${organizePrice(product.oldPrice)}</span>
            <span class="price">Por: R$${organizePrice(product.price)}</span>
            <span class="installment">ou ${organizePrice(product.installments.count)}x de R$${organizePrice(product.installments.value)}</span>
            <button>Comprar</button>`;

        document.getElementById("products").appendChild(article);
    });
} 

function organizePrice(price) {
    return price.toFixed(2).toString().replace(".", ",");
}

function startPreloader() {
    document.getElementById('preloader').style.display = 'block'
    document.getElementById('button-load-more').style.display = 'none'
}

function endPreloader() {
    document.getElementById('preloader').style.display = 'none'
    document.getElementById('button-load-more').style.display = 'block'
}
