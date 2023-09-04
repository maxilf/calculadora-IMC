//1-Crear las variables de la calculadora de IMC
//2-Crear la funcion que me arroje el resultado
//3-Agregar los prompt y los alert necesarios


function general(){
    let continuar = true;
    //Todo el calculo dentro de un While para que pueda calcular el IMC de varias personas si asi lo desea el usuario
    while (continuar){

        const altura = parseFloat(prompt("Por favor ingresa tu altura en metros: "));
        const peso = parseInt(prompt("Ahora por favor ingresa tu peso en kg: "));

        //Funcion general, inicia calculando numero de IMC
        function calculoImc (altura, peso){
            const resultado = peso / (altura * altura);
            alert("Tu resultado es: "+ resultado.toFixed(2));

            //Funcion para mostrar resultado segun rangos de IMC
            function mostrarIMC(){
                if(resultado <= 20){
                    alert("Ojo!, anda al medico porque estas desnutrido!");
                }else if(resultado>20 && resultado<=24.9){
                    alert("Tienes un IMC Optimo");
                }else if(resultado>24.9 && resultado<=30){
                    alert("Tienes un poco de sobrepeso");
                }else if(resultado>30 && resultado<=40){
                    alert("Consulta a un nutricionista, porque segun mis calculos tenes sobrepeso!");
                }else {
                    alert("Tienes Obesidad grave, por favor empeza a cuidarte!");
                }
            }    
            mostrarIMC();

            const respuesta = prompt("¿Quieres calcular el IMC de otra persona? (Sí/No)").toLowerCase();
            if (respuesta !== "si") {
            continuar = false;
            }

            
        }
        calculoImc(parseFloat(altura), parseFloat(peso));

        const calcularButton = document.getElementById("calcularButton");
        calcularButton.addEventListener("click", general);
    }

}

general();


