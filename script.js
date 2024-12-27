const addProduct = () => {
    const proName = document.getElementById('product-name')
    const proQuan = document.getElementById('product-quantity')
    const proNameValue = proName.value
    const proQuanValue = proQuan.value
    proName.value = ""
    proQuan.value = ""
    displayProduct(proNameValue, proQuanValue)
    saveProductToLocalStorage(proNameValue, proQuanValue)
}

const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container')
    const li = document.createElement('li')
    li.innerText = `${product} : ${quantity}`
    ul.appendChild(li)
}

const getStored = () => {
    let cart = {}
    const storedCart = localStorage.getItem('cart')
    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    return cart;
}

const saveProductToLocalStorage = (product, quantity) => {
    const cart = getStored()
    cart[product] = quantity
    const cartStr = JSON.stringify(cart);
    localStorage.setItem('cart', cartStr)
}

const displayProductLocalStrg = () => {
    const show = getStored()
    console.log(show);
    for(let i in show){
        const q = show[i]
        console.log(i, q);
        displayProduct(i, q)
    }
}
displayProductLocalStrg()