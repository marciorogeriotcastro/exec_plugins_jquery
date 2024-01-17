$(document).ready(function () {

   // Aplicar as máscaras
   $('#telefone').mask('(99) 9999-9999?9');
   $('#cpf').mask('999.999.999-99');
   $('#cep').mask('99999-999');

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
      mensagem: {
        required: true,
      },
     
    },
    messages: {
      nome: "Por favor, insira o seu nome",
    },
    subimitHandler: function (form) {
      console.log(form);
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    },
  });


})
