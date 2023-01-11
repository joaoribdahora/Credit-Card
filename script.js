// Arrays necessários para fazer a validação do formulário
let cardNumb = ['0','1','2','3','4','5','6','7','8','9'];
let dateMonth = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
let alfabet = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];

// Arrays para as informações dadas pelo usuário
let arrayCardName = [];
let arrayCardNumber = [];

// Evento de envio do formulário
document.querySelector('button').addEventListener('click', send);

//Essa função irá enviar as informações do cartão.
//Mas para isso, é necessário fazer verificações se as informações cadastradas estão certas.

function send(){

    //Verificação de nome

        let controlName = 0;
        let cardName = document.querySelector('.cardName .importantInfo').value;
        arrayCardName = cardName.toLocaleUpperCase().split('');

        for(let i = 0; i<arrayCardName.length; i++){
            for(let j = 0; j<alfabet.length; j++){
                if(arrayCardName[i] === alfabet[j]){
                    controlName++;
                }
            }
        }

        if(controlName === arrayCardName.length){
            //Permitir o envio do formulário
        }else{ 
            //Bloquear o envio do formulário
        }


    //Verificação do número do cartão

        let controlCardNumber = false;
        let sumControl = 0;
        let inputCardNumber = document.querySelector('.number .importantInfo').value;
        
        arrayCardNumber = inputCardNumber.split('');

        if(inputCardNumber.length === 16){
            controlCardNumber = true;
            console.log('quantidade de números correta');

            for(let i = 0; i< arrayCardNumber.length; i++){
                for(let j = 0; j< cardNumb.length; j++){
                    if(arrayCardNumber[i] === cardNumb[j]){
                        sumControl++;
                    }
                }
            }

            if(sumControl === 16){
                //Permitir o envio do formulário
            }else{
                //Bloquear o envio do formulário
            }

        }else{
            //Bloquear o envio do formulário
        }


    //Verificação da informação do mês

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


    // Controle de informação do ano 

        let inputYear = document.querySelector('.year .inpDate').value;
        let controlYear = false;

        
        if(parseInt(inputYear) < 10 && parseInt(inputYear)>=0){
            for(let i = 0; i<numbers.length; i++){
                if(inputYear === numbers[i]){
                    controlYear = true;
                }
            }
        }else{
            if(parseInt(inputYear) >=10 && parseInt(inputYear)<=99){
                controlYear = true;
            }
        }

        if(controlYear){
            //Permitir o envio do formulário
        }else{
            //Bloquear o envio do formulário
        }


    // controle da informação do CVC

        let cvcNumber = document.querySelector('.inpCVC').value;
            if(cvcNumber.length !== 3){
                //Bloquear o envio do formulário
            }else{
                //Permitir o envio do formulário
            }
}