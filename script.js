let data = {};
let priceInBasket = 0;
let countElementInBasket = 0;

function deleteElement(index) {
    document.getElementById(index).remove();
    priceInBasket -=   data['produkt' + index].cena;
    document.getElementById("basketPrice").innerHTML = priceInBasket;

    countElementInBasket -=1;
}

function kup() {
    window.alert("Kupiles produkty za cene " + priceInBasket + " zł :), Dziekujemy!")
    priceInBasket = 0;
    document.getElementById("basketPrice").innerHTML = priceInBasket;
    document.getElementById("productsBasket").innerHTML = "";
}

function clearData() {
    document.getElementById("productsBasket").innerHTML = "";
    priceInBasket = 0;
    document.getElementById("basketPrice").innerHTML = priceInBasket;
    countElementInBasket = 0;
}

function clickedElement(index) {

    if(countElementInBasket > 7) {
        window.alert("nie mozesz dodac wiecej elementow niz 8 do koszyka!!!!!!!!!")
    }
    else {
        countElementInBasket +=1;
        let clickedElement = data['produkt' + index];
        priceInBasket += clickedElement.cena;
        document.getElementById("basketPrice").innerHTML = priceInBasket;

        let element = document.getElementById("productsBasket");
        element.innerHTML = element.innerHTML + "<div class='productBasket' id='"+index+"'>"+  clickedElement.nazwa + "<div>cena:" + clickedElement.cena +"</div> "+
            "<div class='kupprzycisk' onClick='deleteElement("+index+")'>Usuń mnie!</div></div>"
    }

}
function genrateProducts() {

    for(let i=0; i<15; i++)
    {
        let element = document.getElementById("listaProduktow");
        let genratedPrice = Math.floor(Math.random() * 200) + 2;

        data['produkt' + i] = {cena: genratedPrice, nazwa: "product " + i}

        element.innerHTML = element.innerHTML + "<div class='product'><div class='photo'><img src='jednorozec.jpg' alt='jednorozec' width='100%' height='100%'></div> "+
            "<div class='name'>Produkt " + i + "</div>" +
            "<div class='twice'><div class='price'>"+ genratedPrice +"zł</div><div class='add' onclick='clickedElement("+ i +")'>Dodaj</div></div>" +
            "</div>"
    }
}