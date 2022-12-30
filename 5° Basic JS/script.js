function createElem(text){
    let paragraph = document.createElement("p")
    paragraph.innerHTML = text

    return paragraph
}

function insertElem(loc, elem){
    loc.appendChild(elem);
}

function lazy(loc, text){
    insertElem(loc, createElem(text))
}

window.onload = ()=>{
    // VARIAVEIS
    let variable = document.querySelector('.variable')
    let anyVar = 7
    lazy(variable, `let number: ${anyVar}`)

    // TIPOS DE DADOS
    let data_types = document.querySelector('.data_types')
    let string = "lorem ipsum!"
    let number = 8
    let boolean = true
    lazy(data_types, `let string: ${string}`)
    lazy(data_types, `let number: ${number}`)
    lazy(data_types, `let boolean: ${boolean}`)

    // OPERADORS ARITMÉTICOS
    let arithmetic = document.querySelector('.arithmetic')
    lazy(arithmetic, `adição: 10 + 10 = ${10 + 10}`)
    lazy(arithmetic, `subtração: 10 - 7 = ${10 - 7} `)
    lazy(arithmetic, `multiplicação: 3 * 8 = ${3 * 8} `)
    lazy(arithmetic, `divisão: 14 / 2 = ${14 / 2} `)
    lazy(arithmetic, `módulo(resto): 15 % 2 = ${15 % 2} `)
    lazy(arithmetic, `incremento: ${number}++ = ${number+=1} `)
    lazy(arithmetic, `decremento: ${number-=1}-- = ${number-=1} `)

    // OPERADORES COMPARATIVOS
    let comparative = document.querySelector('.comparative')
    lazy(comparative, `igual a: 14 == 7 : ${14 == 7}`)
    lazy(comparative, `igual a e do mesmo tipo: 14 === 7 : ${14 === 7}`)
    lazy(comparative, `diferente: 14 != 7 : ${14 != 7}`)
    lazy(comparative, `diferente inclusive do tipo: 14  !== 7 : ${14 !== 7}`)
    lazy(comparative, `maior que: 14 > 7 : ${14 > 7}`)
    lazy(comparative, `menor que: 14 < 7 : ${14 < 7}`)
    lazy(comparative, `maior ou igual que: 14 >= 7 : ${14 >= 7}`)
    lazy(comparative, `menor ou igual que: 14 <= 7 : ${14 <= 7}`)

    // OPERADORES LÓGICOS
    let logical = document.querySelector('.logical')
    lazy(logical, `&& (e): true && true : ${true && true}`)
    lazy(logical, `&& (e): true && false : ${true && false}`)
    lazy(logical, `|| (ou): true || false : ${true || false}`)
    lazy(logical, `|| (ou): false || false : ${false || false}`)
    lazy(logical, `! (não): !true : ${!true}`)
    lazy(logical, `! (não): !false : ${!false}`)

    // TRANSFORMANDO STRING EM NÚMEROS
    let parse = document.querySelector('.parse')
    lazy(parse, `ParseInt: "7" + "8" = ${parseInt("7") + parseInt("8")}`)
    lazy(parse, `ParseFloat: "9.4" + "14.5" = ${parseFloat("9.4") + parseFloat("14.5")}`)

    // CONDICIONAIS
    let conditional = document.querySelector('.conditional')
    lazy(conditional, "<pre><code>let age = 17<br>if (age>= 18) {<br>  console.log('released')<br>else {<br>  console.log('acess denied')<br>}</code><pre>")
    lazy(conditional, "acess denied")

    // OPERADOR TERNÁRIO
    let ternary = document.querySelector('.ternary')
    lazy(ternary, "<pre><code>let age = 18<br>age >= 18 ? console.log('released') : console.log('acess denied')</code></pre>")
    lazy(ternary, "released")

    // SWITCH-CASE
    let swt = document.querySelector('.swt')
    lazy(swt, "<pre><code>let choice = 1<br>switch(choice) {<br>    case 1:<br>       console.log('Chocolate')<br>    break;<br>    case 2:<br>       console.log('Morango')<br>    break;<br>    deafault:<br>       console.log('Opção inválida')<br>    break;<br>}</code></pre>")
    lazy(swt, "Chocolate")

    // ITERADORES
    let iterator = document.querySelector('.iterator')
    lazy(iterator, "<pre><code>for(let i = 0; i <= 2; i++) {<br>    console.log('Olá mundo!')<br>}</code></pre>")
    for (let i = 0; i <= 2; i++) lazy(iterator, "Olá mundo!")
    lazy(iterator, "<pre><code>let i = 0<br>while(i <= 2) {<br>    console.log('Olá mundo!')<br>    i++<br>}</code></pre>")
    let i = 0
    while(i <= 2) {
        lazy(iterator, 'Olá mundo!')
        i++
    }

    // ARRAY
    let arr = document.querySelector('.arr')
    lazy(arr, "<pre><code>let arr = ['A', 'B', 'C']<br>console.log(arr)<br>console.log(arr[2])</code></pre>")
    lazy(arr, "['A', 'B', 'C']")
    lazy(arr, "C")

    // FUNCTION
    let funct = document.querySelector('.funct')
    lazy(funct, "<pre><code>function funct() {<br>    console.log('console.log de dentro de uma função')<br>}<br>funct()</code></pre>")
    lazy(funct, "console.log de dentro de uma função")

    // FUNÇÕES ANÔNIMAS
    let anon = document.querySelector('.anon')
    lazy(anon, "<pre><code>let average = function(number1, number2){<br>    return (number1 + number2) / 2<br>}<br>console.log(a média é: + average(8, 9))</code></pre>")
    lazy(anon, `a média é: ${(8 + 9) / 2}`)

    // OBJETOS
    let obj = document.querySelector('.obj')
    lazy(obj, "<pre><code>let student = {<br>    name: 'Pedro',<br>    grades: [7.5, 9]<br>}<br>student.registry = 'A71b4M5'<br>console.log(student.name)<br>console.log(student.registry)</code></pre>")
    lazy(obj, "Pedro")
    lazy(obj, "A71b4M5")
    lazy(obj, "<pre><code>function calc_aver(){<br>    return (this.grades[0] + this.grades[1]) / 2<br>}<br>student.average = calc_aver<br>console.log('a média é ', student.average())<br></code></pre>")
    lazy(obj, `a média é ${(7.5 + 9) / 2}`)

    // OBJECT CONSTRUCTOR

    let construct = document.querySelector('.construct')
    lazy(construct, "<pre><code>function student(name, gr1, gr2) {<br>    this.name = name, <br>    this.grade1 = gr1,<br>    this.grade2 = gr2,<br>    this.average = ()=> {<br>        return (this.grade1 + this.grade2) / 2<br>    }<br>}<br>let classRoom = [<br>    new student('Pedro', 8, 9.5),<br>    new student('Gyovana', 8,9, 9.5),<br>    new student('Pandora', 7.4, 8.8)<br>]<br>classRoom.forEach((elem)=>{<br>    console.log(elem.name)<br>})</code></pre>")
    lazy(construct, "Pedro")
    lazy(construct, "Gyovana")
    lazy(construct, "Pandora")

    // DATAS
    let dt = document.querySelector('.dt')
    let d = new Date()
    lazy(dt, "<pre><code>let d = new Date()<br>console.log(d)<br>console.log(`${d.getHours()}:${d.getMinutes()`)</code></pre>")
    lazy(dt, d)
    let min = "0" + d.getMinutes()
    lazy(dt, `${d.getHours()}:${min.slice(-2)}`)
}