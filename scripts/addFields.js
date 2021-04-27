// document.querySelector('#container').style.backgroundColor = "red" 

//procurar o botao
document.querySelector("#add-time")
//quando clicarno botao
.addEventListener('click', cloneField) //ouvir um evento, por exemplo, clique

// executar uma açao
function cloneField() {
    console.log("cheguei")
    //duplicar os campos. Quem campos??
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos. Que campos??
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function(field) {
        // pega o field do momento e limpa
        field.value = ""
    })

    //colocar na pagina, Colocar onde??
        document.querySelector('#schedule-items').appendChild(newFieldContainer)
}