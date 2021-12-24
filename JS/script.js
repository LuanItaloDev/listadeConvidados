//Reculpera dentro de variaveis os campos listas, campo e botao no HTML
var elLista = document.getElementById('lista')
var elCampo = document.getElementById('campo')
var elBotao = document.getElementById('botao')
// Arrei com as informações dos usuários
var convidados = JSON.parse(localStorage.getItem('convidados')) || []

function salvarConvidados() {
  localStorage.setItem('convidados', JSON.stringify(convidados))
}

function listarConvidados() {
  elLista.innerHTML = ''

  for (const convidado of convidados) {
    var elConvidado = document.createElement('li')
    var elNome = document.createTextNode(convidado.nome)

    var elExcluir = document.createElement('a')
    elExcluir.setAttribute('href', '#')

    elExcluir.onclick = function () {
      convidados = convidados.filter(function (item) {
        return item.nome !== convidado.nome
      })

      listarConvidados()
      listarConvidados()
    }

    var elExcluirTexto = document.createTextNode('X')

    elExcluir.appendChild(elExcluirTexto)
    elConvidado.appendChild(elNome)
    elConvidado.appendChild(elExcluir)
    elLista.appendChild(elConvidado)
  }
}

listarConvidados()

var adicionarConvidado = function () {
  var nome = elCampo.value

  convidados.push({ nome: nome })
  listarConvidados()
  elCampo.value = ''
}

elBotao.onclick = adicionarConvidado
