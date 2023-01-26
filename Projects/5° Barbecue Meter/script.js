let buttonCalc = document.querySelector('.calc')
buttonCalc.addEventListener('click', recieve)

function recieve(){
    let arr = {}
    let itens = document.querySelectorAll('.itens')
    arr.adults = itens[0].value
    arr.childs = itens[1].value
    arr.time = itens[2].value == 0 ? 1 : itens[2].value
    calc(arr)
}

function calc(arr){
    let meat, beer, drink
    let mMeat = 400, mBeer = 1200, mDrink = 1000 // (m) == multiplicator
    
    if (arr.time >= 6) {
        let mTime = Math.floor(arr.time / 6)
        mMeat = 650 * mTime
        mBeer = 2000 * mTime
        mDrink = 1500 * mTime
    }

    // ADULTS
    meat = (arr.adults * mMeat) / 1000 
    beer = Math.ceil((arr.adults * mBeer) / 400)
    drink = Math.ceil((arr.adults * mDrink) / 2000)

    // CHILDS
    meat += (arr.childs * (mMeat / 2)) / 1000
    drink += Math.ceil((arr.childs * (mDrink / 2)) / 2000)
 
    let qtde = [meat < 1 ? meat.toFixed(3) : meat.toFixed(1), beer, drink]

    insertElem(qtde)
}

function insertElem(qtde){
    let results = document.querySelector('.result')
    results.classList.add('active')
    buttonCalc.parentElement.classList.add('anim')

    results.innerHTML = `<p>${qtde[0]}${qtde[0] < 1 ? "g" : "Kg"} de carne.<span></span></p>`
    results.innerHTML += `<p>${qtde[1]} latas de cerveja.<span></span></p>`
    results.innerHTML += `<p>${qtde[2]} pet's de refrigerante 2l.<span></span></p>`
}

function log(text){
    console.log(text)
}