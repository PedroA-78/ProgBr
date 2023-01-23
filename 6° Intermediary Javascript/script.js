// CONSTRUCT FUNCTIONS

function createCode(loc, text, opt){
    let pre = document.createElement('pre')
    let code = document.createElement('code')
    code.innerHTML = text
    pre.innerHTML = code.outerHTML

    if (opt == 'return') return pre

    insertElem(loc, pre)
}

function createTitle(loc, text, nv, className){
    let title = document.createElement(`${nv}`)
    title.innerHTML = text
    title.setAttribute('class', 'center-text')
    if (className != "") title.classList.add(className)

    insertElem(loc, title)
}

function createParagraph(text, opt, loc){
    let paragraph = document.createElement('p')
    paragraph.innerHTML = text
    paragraph.setAttribute('class', 'center-text')

    if (opt == "return") return paragraph

    insertElem(loc, paragraph)
}

function insertElem(loc, elem){
    loc.appendChild(elem);
}

// AUX FUNCTIONS

function insertTitle(){
    let parent = document.querySelector('.titleContainer')
    if (parent.querySelectorAll('h2').length >= 1) return

    createTitle(parent, "Esse título foi inserido através do evento onclick", "h2")
}

function changeParagraph(elem, i){
    let p = document.querySelectorAll('.paragraphInput')
    p[i].innerText = elem.value

    if (i == 1) localStorage.setItem('text', elem.value)
}

function changeClass(){
    if (this.classList.contains('onmouse')) {
        this.innerText = 'passe o mouse por cima'
        this.classList.remove('onmouse')
    } else {
        this.innerText = 'agora sou roxo'
        this.classList.add('onmouse')
    }
}

function transformText(str){
    let text = str.outerHTML.replaceAll("                ", "    ").replaceAll("            ", "")
    text = text.replaceAll("<", "&lt").replaceAll(">", "&gt")
    return text
}

let arr = []
function showList(loc){
    try {
        arr = JSON.parse(localStorage.getItem('itens'))
    } catch (error) {
        return
    }
    
    if (arr == null) {
        arr = new Array
        localStorage.setItem('itens', arr)
    }

    let itens = arr
    let list = document.querySelector('.list')

    if (list == null){
        createList(loc)
        for (item of itens){
            let li = document.createElement('li')
            li.innerText = item
            list = document.querySelector('.list')
            insertElem(list, li)
        }
        return
    }

    let li = document.createElement('li')
    li.innerText = arr[arr.length - 1]
    insertElem(document.querySelector('.list'), li)
}

function createList(loc){
    let ul = document.createElement('ul')
    ul.setAttribute('class', 'list')
    insertElem(loc, ul)
}

function insertStorage(){
    arr.push(this.value)
    this.value = ""
    
    localStorage.setItem('itens', JSON.stringify(arr))
    showList(this.parentElement)
}



window.onload = ()=>{
    // WINDOW
    let wind = document.querySelector('.wind')
    createCode(wind, "window.console.log('Olá')<br>window.alert('Tudo bem?')")

    // DOCUMENT
    let dcmt = document.querySelector('.dcmt')
    createCode(dcmt, "let dcmt = document.querySelector('.dcmt')<br>dcmt.innerHTML = '&lth2&gtEsse titulo foi inserido<br>                      através do Javascript&lt/h2&gt'")
    createTitle(dcmt, "Esse titulo foi inserido através do Javascript", 'h2')

    // DOM EVENTS
    let events = document.querySelector('.events')

    createCode(events, "let button = document.createElement('button')<br>button.innerText = 'Clique'<br>button.setAttribute('onclick', 'insertTitle()')<br>button.setAttribute('class', 'button')<br>let cont = document.createElement('div')<br>cont.setAttribute('class', 'titleContainer')<br>events.appendChild(button)<br>events.appendChild(cont)<br><br>function insertTitle(){<br>    let parent = document.querySelector('.titleContainer')<br>    if (parent.querySelectorAll('h2').length >= 1) return<br>    // createTitle é uma função p/ inserir títulos de diferentes níveis no DOM<br>    createTitle(parent, 'Esse título foi inserido através do evento onclick', 'h2')<br>}")

    let button = document.createElement('button')
    button.innerText = 'Clique'
    button.setAttribute('onclick', 'insertTitle()')
    button.setAttribute('class', 'button')
    let cont = document.createElement('div')
    cont.setAttribute('class', 'titleContainer')
    events.appendChild(button)
    events.appendChild(cont)

    createCode(events, "let input = document.createElement('input')<br>input.setAttribute('oninput', 'changeParagraph(this)')<br>let paragraph = document.createElement('p')<br>paragraph.setAttribute('class', 'paragraphInput')<br>paragraph.innerText = 'Lorem Ipsum!'<br>events.appendChild(paragraph)<br>events.appendChild(input)")

    let input = document.createElement('input')
    input.setAttribute('oninput', 'changeParagraph(this, 0)')
    input.setAttribute('maxlength', 30)
    input.setAttribute('placeholder', 'Digite algum texto...')
    let paragraph = document.createElement('p')
    paragraph.setAttribute('class', 'paragraphInput')
    paragraph.innerText = 'Lorem Ipsum!'
    events.appendChild(paragraph)
    events.appendChild(input)

    createCode(events, "paragraph = createParagraph('passe o mouse por cima')<br>paragraph.setAttribute('class', 'pom')<br>insertElem(events, paragraph)<br>let pom = document.querySelector('.pom')<br>pom.onmouseover = changeClass<br>pom.onmouseout = changeClass<br><br>function changeClass(){<br>    if (this.classList.contains('onmouse')) {<br>        this.innerText = 'passe o mouse por cima'<br>        this.classList.remove('onmouse')<br>    } else {<br>        this.innerText = 'agora sou roxo'<br>        this.classList.add('onmouse')<br>    }<br>}")

    paragraph = createParagraph('passe o mouse por cima', 'return')
    paragraph.setAttribute('class', 'pom') //pom == 'Paragraph on mouse'
    insertElem(events, paragraph)
    let pom = document.querySelector('.pom')
    pom.onmouseover = changeClass
    pom.onmouseout = changeClass

    // PARENT AND CHILD ELEMENTS
    let parent = document.querySelector('.parent-elem')
    let screenElem = document.querySelector('.screen-elem')

    let titles = parent.getElementsByTagName('h3')
    for (let title of titles) {
        title.addEventListener('click', function(){
            if (screenElem.innerText != "") screenElem.innerText = ""
            createCode(screenElem, `<h4>Parent:</h4><br>${transformText(title.parentElement)}`)
        })
    }

    let paragraphs = parent.getElementsByTagName('p')
    for (let paragraph of paragraphs) {
        paragraph.addEventListener('click', function(){
            if (screenElem.innerText != "") screenElem.innerText = ""
            createCode(screenElem, `<h4>Parent:</h4><br>${transformText(paragraph.parentElement)}</`)
            for (let child of paragraph.children) {
                createCode(screenElem, `<h4>Child:</h4><br>${transformText(child)}`)
            }
        })
    }

    createCode(parent, "let parent = document.querySelector('.parent-elem')<br>let screenElem = document.querySelector('.screen-elem')<br><br>let titles = parent.getElementsByTagName('h3')<br>for (let title of titles) {<br>    title.addEventListener('click', function(){<br>    if (screenElem.innerText != '') screenElem.innerText = ''<br>    // A função 'createCode' coloca texto dentro da tag code<br>    // A função transformText foi criada apenas para formatação de texto<br>    createCode(screenElem, `h4&gt;Parent:&lt;/h4&gt;&lt;br&gt;${transformText(<br>    title.parentElement)}`)<br>    })<br>}<br><br>let paragraphs = parent.getElementsByTagName('p')<br>for (let paragraph of paragraphs) {<br>    paragraph.addEventListener('click', function(){<br>        if (screenElem.innerText != '') screenElem.innerText = ''<br>        createCode(screenElem, `h4&gt;Parent:&lt;/h4&gt;&lt;br&gt;${transformText(<br>        paragraph.parentElement)}`)<br>        for (let child of paragraph.children) {<br>            createCode(screenElem, `h4&gt;Child:&lt;/h4&gt;&lt;br&gt;${transformText(child)}`)<br>        }<br>    })<br>}")

    // LIBRARY MATH
    let math = document.querySelector('.math')

    createParagraph(`PI (Math.PI): ${Math.PI}`, 'void', math)
    createParagraph(`Euler (Math.E): ${Math.E}`, 'void', math)
    createParagraph(`RAIZ (Math.sqrt): &radic;16 = ${Math.sqrt(16)}`, 'void', math)
    createParagraph(`POTENCIA (Math.pow): 2 ^ 3 = ${Math.pow(2, 3)}`, 'void', math)
    createParagraph(`RANDOM (Math.random): ${Math.random()}`, 'void', math)
    createParagraph(`ROUND (Math.round): Math.round(2.7) = ${Math.round(2.7)}`, 'void', math)
    createParagraph(`FLOOR (Math.floor): Math.floor(7.99) = ${Math.floor(7.99)}`, 'void', math)
    createParagraph(`CEIL (Math.ceil): Math.ceil(9.01) = ${Math.ceil(9.01)}`, 'void', math)

    // JSON
    let json = document.querySelector('.json')

    let a = {name: "Pedro", idade: 22}
    let b = '{"name": "Pandora", "idade": 6}'

    let a2 = JSON.stringify(a)
    let b2 = JSON.parse(b)

    createCode(json, `<h3>JSON.stringfy</h3>let a = {name: "Pedro", idade: 22}<br><b>to String with JSON.stringfy</b><br>${a2}`)
    createCode(json, `<h3>JSON.parse</h3>let b = '{"name": "Pandora", "idade": 6}'<br><b>to JSON with JSON.parse</b><br>{name: "Pandora", idade: 6}`)
    createParagraph(`b.name = <b>${b2.name}</b>`, 'void', json)

    // LOCAL STORAGE
    let storage = document.querySelector('.storage')

    paragraph = createParagraph('Lorem Ipsum!', 'return')
    paragraph.setAttribute('class', 'paragraphInput center-text')
    
    if (localStorage.getItem('text') == null) localStorage.setItem('text', 'Lorem Ipsum!')
    if (localStorage.getItem('text') != "") paragraph.innerHTML = (localStorage.getItem('text'))

    insertElem(storage, paragraph)

    input = document.createElement('input')
    input.setAttribute('placeholder', 'Digite algum texto')
    input.setAttribute('oninput', 'changeParagraph(this, 1)')
    insertElem(storage, input)

    createCode(storage, "let storage = document.querySelector('.storage')<br>paragraph = createParagraph('Lorem Ipsum!', 'return')<br>paragraph.setAttribute('class', 'paragraphInput center-text')<br>if (localStorage.getItem('text') != '') paragraph.innerHTML = (<br>localStorage.getItem('text'))")

    // CHALLENGE

    cont = document.createElement('div')
    cont.setAttribute('class', 'chllStorage')
    insertElem(storage, cont)

    let chllStorage = document.querySelector('.chllStorage')
    createTitle(chllStorage, 'Desafio', 'h3')
    createParagraph('Crie uma lista de tarefas que tenha um input para receber a tarefa, e armazene na memória utilizando o LocalStorage.<hr>', "void", chllStorage)

    input = document.createElement('input')
    input.setAttribute('class', 'listInput')
    insertElem(chllStorage, input)

    let inp = document.querySelector('.listInput')
    inp.addEventListener('change', insertStorage)

    createParagraph("<strong>Pressione enter p/ adiconar a tarefa.</strong>", 'void', chllStorage)

    showList(chllStorage)

    createCode(storage, "cont = document.createElement('div')<br>cont.setAttribute('class', 'chllStorage')<br>insertElem(storage, cont)<br><br>let chllStorage = document.querySelector('.chllStorage')<br>input = document.createElement('input')<br>input.setAttribute('class', 'listInput')<br>insertElem(chllStorage, input)<br><br>let inp = document.querySelector('.listInput')<br>inp.addEventListener('change', insertStorage)<br><br>showList(chllStorage)<br><br>let arr = []<br>function showList(loc){<br>    try {<br>        arr = JSON.parse(localStorage.getItem('itens'))<br>    } catch (error) {<br>        return<br>    }<br><br>    if (arr == null) {<br>        arr = new Array<br>        localStorage.setItem('itens', arr)<br>    }<br><br>    let itens = arr<br>    let list = document.querySelector('.list')<br><br>    if (list == null){<br>        createList(loc)<br>        for (item of itens){<br>            let li = document.createElement('li')<br>            li.innerText = item<br>            list = document.querySelector('.list')<br>            insertElem(list, li)<br>        }<br>        return<br>    }<br><br>    let li = document.createElement('li')<br>    li.innerText = arr[arr.length - 1]<br>    insertElem(document.querySelector('.list'), li)<br>}<br><br>function createList(loc){<br>    let ul = document.createElement('ul')<br>    ul.setAttribute('class', 'list')<br>    insertElem(loc, ul)<br>}<br><br>function insertStorage(){<br>    arr.push(this.value)<br>    this.value = ''<br><br>    localStorage.setItem('itens', JSON.stringify(arr))<br>    showList(this.parentElement)<br>}")
    
    //TIMER AND INTERVAL
    let timer = document.querySelector('.timer')

    document.querySelector('.timeout').addEventListener('click', function(){
        setTimeout(function(){
            createTitle(document.querySelector('.timeout-cont'), 'Esse é o setTimeout definido em 3seg!', 'h2')
        }, 3000)
    })

    let msgTimer = createCode(timer, "document.querySelector('.timeout').addEventListener('click', function(){<br>    setTimeout(function(){<br>        createTitle(document.querySelector('.timeout-cont'), 'Esse é o <br>    setTimeout definido em 3seg!', 'h2')<br>    }, 3000)<br>})", 'return')
    document.querySelector('.timeout-cont').insertAdjacentHTML('afterend', msgTimer.outerHTML)

    let counter = document.querySelector('.counter')
    let sec = 0, min = 0
    let secs, mins
    let interval = setInterval(function(){
        sec++
        if (sec > 59 ) {
            sec = 0
            min++
        }
        secs = ("0" + sec).slice(-2)
        mins = ("0" + min).slice(-2)
        counter.innerText = `${mins}:${secs}`
        if(min == 10) {
            sec = 0
            min = 0
        }
    }, 1000)

    createCode(timer, "let counter = document.querySelector('.counter')<br>let sec = 0, min = 0<br>let secs, mins<br>let interval = setInterval(function(){<br>    sec++<br>    if (sec > 59 ) {<br>        sec = 0<br>        min++<br>    }<br>        secs = ('0' + sec).slice(-2)<br>        mins = ('0' + min).slice(-2)<br>        counter.innerText = `${mins}:${secs}`<br>    if(min == 10) clearInterval(interval)<br>}, 1000)")
}

function log(str){
    console.log(str)
}
