function calcula_imc(){
    altura = document.imcForm.altura.value
    peso = document.imcForm.peso.value
    calculo = (peso/(altura*altura))
    
    if(calculo<18.5){
        alert("Você está ABAIXO do PESO!!! Índice: "+ calculo)
    }
    else if (calculo >=18.5 && calculo<24.9){
            alert("Você está com o peso IDEAL! Índice: "+ calculo)
        }
    else if (calculo >=25 && calculo<29.9){
            alert("Você está com SOBREPESO!!! Índice: " + calculo)
   
           }
    else if (calculo >=30 && calculo<39.9){
            alert("Você está com OBESIDADE!!! Índice: "+ calculo)
   
           }
    else if (calculo >=40){ 
            alert("Você está com OBESIDADE MÓRBIDA!!! Índice: "+ calculo)
   
           }
}