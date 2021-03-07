
var inputHora = document.querySelector("#ganho-hora")
var inputMes = documento.querySelector("#total-mes")

function CalcularValorProjeto(){
   var hora = inputHora.valueAsNumber
   var mes = inputMes.valueAsNumber
   var mostrar = document.querySelector ("#resposta")

   var HorasMes = horas * 22
   var valorProjeto = salario/mes

   var valorDuasCasas = valorHora.toFixed(2);

   console.log(valorDuasCasas)
   mostrar.textContent = "R$"+valorDuasCasas

}