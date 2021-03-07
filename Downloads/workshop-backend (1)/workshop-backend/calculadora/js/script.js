var inputSalario = document.querySelector("#ganho-mes")  
var inputHoras = document.querySelector("#horas-dia") 
function calcularValorHora(){ 
    var salario = inputSalario.valueAsNumber 
    var horas = inputHoras.valueAsNumber 
    var mostrar = document.querySelector("#resposta")

    var horasMes = horas *  22 
        var valorHora = salario/horasMes 

    var valorDuasCasas = valorHora.toFixed(2); 

    console.log(valorDuasCasas) 

    mostrar.textContent = "R$ "+ valorDuasCasas 
}