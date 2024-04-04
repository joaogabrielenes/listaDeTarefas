let contador = 0;
let input = document.getElementById("inputTarefa");
let btnAdd = document.getElementById("btn-add");
let main = document.getElementById("areaLista");


function addTarefa(){
    //pegar valor digitado no input
    let valorInput = input.value;

    //checagem
    if(valorInput !== "" && valorInput !== null && valorInput !== undefined) {

        ++contador;


        let novoItem = `
        <div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="itemIcone">
                <i id="icone_${contador}" class="fa-regular fa-circle"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="itemNome">
           ${valorInput }
        </div>
        <div class="itemBotao">
            <button onclick="deletar(${contador})" class="delete"> <i class="fa-solid fa-trash"></i></button>
        </div>
    </div>`;

    //add novo item
    main.innerHTML += novoItem;

    //limpar barra
    input.value = "";
    input.focus();
    }    
}


//para deletar o botão
function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove();
}


//Para marcar o "check" de clicado ou não
function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute("class");
    console.log(classe);
  
 
    if (classe == "item") {
        item.classList.add("clicado");
    
        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("fa-circle");
        icone.classList.add("fa-check-circle");

        item.parentNode.appendChild(item)
    
        item.parentNode.appendChild(item);
      } else {
        item.classList.remove("clicado");
    
        var icone = document.getElementById("icone_" + id);
        icone.classList.remove("fa-check-circle");
        icone.classList.add("fa-circle");
      }
    }


function editarTarefa(id) {
    var item = document.getElementById(id);
    var itemNome = item.querySelector('.itemNome');
    var itemTexto = itemNome.innerText;

    // Criar um campo de edição
    var inputEdicao = document.createElement('input');
    inputEdicao.type = 'text';
    inputEdicao.value = itemTexto;

    // Substituir o texto atual pelo campo de edição
    itemNome.innerHTML = '';
    itemNome.appendChild(inputEdicao);
    inputEdicao.focus();

    // Adicionar um evento de escuta para detectar quando o usuário pressiona Enter
    inputEdicao.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            finalizarEdicao(id, inputEdicao.value);
        }
    });

    // Adicionar um evento de escuta para detectar quando o usuário clica fora do campo de edição
    inputEdicao.addEventListener('blur', function() {
        finalizarEdicao(id, inputEdicao.value);
    });
}

function finalizarEdicao(id, novoTexto) {
    var item = document.getElementById(id);
    var itemNome = item.querySelector('.itemNome');

    // Substituir o campo de edição pelo novo texto
    itemNome.innerHTML = novoTexto;
}



//Para clicar com o ENTER
 document.addEventListener('keypress', function(e){
     if(e.which == 13){
        btnAdd.click()
        console.log('a tecla enter foi pressionada');
        }
  }, false);

