    var elLista = document.getElementById("lista");
    var elCampo = document.getElementById("campo");
    var elBotao = document.getElementById("botao");

      var convidados = [
        { id: 1, nome: "Bruno de Souza", idade: 28 },
        { id: 2, nome: "Jefferson Andrade", idade: 18 },
        { id: 3, nome: "Maria José", idade: 13 },
        { id: 4, nome: "José da Silva", idade: 33 }
      ];

      for (convidado of convidados) {
        var elConvidado = document.createElement("li");
        var elNome = document.createTextNode(convidado.nome);

        elConvidado.appendChild(elNome);
        elLista.appendChild(elConvidado);
      }
    