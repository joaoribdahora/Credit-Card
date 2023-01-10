let cardNumb = [];
let dateMonth = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
let dateYear = '';
let dataCVC = [];
let alfabet = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let cvcNumber = '';
let cardName = '';
let arrayCardName = [];
let controlName = 0;
document.querySelector('button').addEventListener('click', send);

//Essa função irá enviar as informações do cartão.
//Mas para isso, é necessário fazer verificações se as informações cadastradas estão certas.

function send(){

// controle da informação do mês

    let controleMes = false;

    for(let i = 0; i<dateMonth.length; i++){
        if(document.querySelector('.month .inpDate').value === dateMonth[i]){
            controleMes = true;
           
        }
    }
    if(controleMes){
        //Permitir o envio do formulário
    }else{
        //Bloquear o envio do formulário
    }

// controle da informação do CVC

    cvcNumber = document.querySelector('.inpCVC').value;
    if(cvcNumber.length !== 3){
        //Bloquear o envio do formulário
    }else{
        //Permitir o envio do formulário
    }

//Verificação de nome correto
    controlName = 0;
    cardName = document.querySelector('.cardName .inportantInfo').value;
    arrayCardName = cardName.toLocaleUpperCase().split('');

    for(let i = 0; i<arrayCardName.length; i++){
        for(let j = 0; j<alfabet.length; j++){
            if(arrayCardName[i] === alfabet[j]){
                console.log(`${arrayCardName[i]} é igual ${alfabet[j]}`);
                controlName++;
            }
        }
    }

    if(controlName === arrayCardName.length){
        //Permitir o envio do formulário
    }else{ 
        //Bloquear o envio do formulário
    }

}