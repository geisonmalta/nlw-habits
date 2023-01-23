const form = document.querySelector("#form-habits")
// iniciano biblioteca do Mayk Brito
const nlwSetup = new NLWSetup(form)
const  button = document.querySelector("header button")

// Executa a função add ao clicar no botão
button.addEventListener('click', add)
// Salva os dados registrados
form.addEventListener("change", save)

// função
function add(){
    const today = new Date().toLocaleDateString('pt-br').slice(0,-5)
    const dayExists = nlwSetup.dayExists(today)

    if (dayExists) {
        alert("Dia já incluso!")
        return
    }

    alert("Adicionado com sucesso!")
    nlwSetup.addDay (today)
}

function save(){
    localStorage.setItem('NLWSetup@habits', JSON.stringify (nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()