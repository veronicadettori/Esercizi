//let changeH1 = document.getElementById("h1");
//changeH1.innerText = "Qualcosa";
//alternativa:
function changeH1(){
    document.getElementById("h1").innerHTML = "Sito";
}
changeH1();

function changeColorBack(){
    document.body.style.backgroundColor = "pink";
}
changeColorBack();

//function 9 ??? non ho capito cosa chiede

function link(){
    let aggiungi = document.getElementsByName("a");
    aggiungi.classList.add("classeChe")
}
link();

function addCss(){
    let table = document.getElementById("tableId");
    let images = table.getElementsByTagName("img");

    for(let image of images) {
        image.classList.add("hiddenClass")
    }
}
addCss();

// Il parametro id è l'id dell'elemento DOM di cui cambiare il colore del testo
function colorChange(id) {
    const possibleColors = ["purple","violet","green","blue","red"]
    let elementToChangeColor = document.getElementById(id);

    let randomIndex =  Math.floor(Math.random() * ((possibleColors.length - 1) - 0 + 1) + 0)
    elementToChangeColor.style.color = possibleColors[randomIndex]
}
