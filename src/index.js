fetch("http://localhost:3000/burgers")
.then(resp => resp.json())
.then(burgers => {
    burgers.forEach(burger => {
        //console.log(burger)
        addBurgerNames(burger)

    });
    addBurgerDetails(burgers[0])
})

function addBurgerNames(burger){
    const spanElement = document.createElement("span")
    spanElement.textContent = burger.name

    const burgerMenuDiv = document.getElementById("restaurant-menu")
    burgerMenuDiv.appendChild(spanElement)

    spanElement.addEventListener("click", () => {
        addBurgerDetails(burger)
    })
}

function addBurgerDetails(burger){
    const burgerImage = document.getElementById("image")
    burgerImage.src = burger.image

    const burgerName = document.getElementById("name")
    burgerName.textContent = burger.name

    const burgerInCart = document.getElementById("number-in-cart-count")
    burgerInCart.textContent = burger.number_in_cart
}

const cartForm = document.getElementById("add-to-cart-form")
cartForm.addEventListener("submit", (e) => {
    e.preventDefault()

const cartInput = document.getElementById("number-to-add")
const cartAmount = document.getElementById("number-in-cart-count")

cartAmount.textContent = parseInt(cartAmount.textContent,10) + parseInt(cartInput.value,10)

cartForm.reset()



})