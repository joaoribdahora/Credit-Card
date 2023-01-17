// Arrays necessários para fazer a validação do formulário
let numb = ['0','1','2','3','4','5','6','7','8','9'];
let dateMonth = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
let alfabet = [' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let numbers = ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09'];

// Arrays para as informações dadas pelo usuário
let arrayCardName = [];
let arrayCardNumber = [];
let arrayCVC = [];

// Evento de envio do formulário
document.querySelector('button').addEventListener('click', send);

//Essa função irá enviar as informações do cartão.
//Mas para isso, é necessário fazer verificações se as informações cadastradas estão certas.

function send(){
    let sendForm = 0;

    //Verificação de nome

        let controlName = 0;
        let cardName = document.querySelector('.cardName .importantInfo').value;
        arrayCardName = cardName.toLocaleUpperCase().split('');

        if(cardName.length >= 2){
            for(let i = 0; i<arrayCardName.length; i++){
                for(let j = 0; j<alfabet.length; j++){
                    if(arrayCardName[i] === alfabet[j]){
                        controlName++;
                    }
                }
            }

            if(controlName === arrayCardName.length){
                document.querySelector('.cardName .importantInfo').classList.remove('erro');
                document.querySelector('.cardName .erroInfo').style.display = 'none';
                sendForm++;
            }else{ 
                document.querySelector('.cardName .importantInfo').classList.add('erro');
                document.querySelector('.cardName .erroInfo').style.display = 'block';
                sendForm = 0;
                //Bloquear o envio do formulário
            }
        }else{
            document.querySelector('.cardName .importantInfo').classList.add('erro');
            document.querySelector('.cardName .erroInfo').style.display = 'block';
            sendForm = 0;
                //Bloquear o envio do formulário
        }

    //Verificação do número do cartão

        let controlCardNumber = false;
        let sumControl = 0;
        let inputCardNumber = document.querySelector('.number .importantInfo').value;
        
        arrayCardNumber = inputCardNumber.split('');

        if(inputCardNumber.length === 16){
            controlCardNumber = true;
            
            for(let i = 0; i< arrayCardNumber.length; i++){
                for(let j = 0; j< numb.length; j++){
                    if(arrayCardNumber[i] === numb[j]){
                        sumControl++;
                    }
                }
            }

            if(sumControl === 16){
                document.querySelector('.number .importantInfo').classList.remove('erro');
                document.querySelector('.number .erroInfo').style.display = 'none';
                sendForm++;
                //Permitir o envio do formulário
            }else{
                document.querySelector('.number .importantInfo').classList.add('erro');
                document.querySelector('.number .erroInfo').style.display = 'block';
                sendForm = 0;
                //Bloquear o envio do formulário
            }

        }else{
            document.querySelector('.number .importantInfo').classList.add('erro');
            document.querySelector('.number .erroInfo').style.display = 'block';
            sendForm = 0;
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
            document.querySelector('.month .inpDate').classList.remove('erro');
            //Permitir o envio do formulário
        }else{
            document.querySelector('.month .inpDate').classList.add('erro');
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
            if(inputYear.length === 2){
                if(parseInt(inputYear) >=10 && parseInt(inputYear)<=99){
                    controlYear = true;
                }
            }else{
                controlYear = false;
            }
        }

        if(controlYear){
            document.querySelector('.year .inpDate').classList.remove('erro');
            //Permitir o envio do formulário
        }else{
            document.querySelector('.year .inpDate').classList.add('erro');
            //Bloquear o envio do formulário
        }

        if(document.querySelector('.year .inpDate').classList.contains('erro') ||  document.querySelector('.month .inpDate').classList.contains('erro')){
            document.querySelector('.dataInput .erroInfo').style.display = 'block';
            sendForm = 0;
        }else{
            document.querySelector('.dataInput .erroInfo').style.display = 'none';
            sendForm++;
        }

    // controle da informação do CVC

        let cvcNumber = document.querySelector('.inpCVC').value;
        let cvcNumbControl = 0;

        arrayCVC = cvcNumber.split('');
        
        

            if(cvcNumber.length === 3){
                for(let i = 0; i < arrayCVC.length; i++){
                    for(let j = 0; j< numb.length; j++){
                        if(arrayCVC[i] === numb[j]){
                            cvcNumbControl++;
                        }
                    }
                }
                if(cvcNumbControl === cvcNumber.length){
                    document.querySelector('.inpCVC').classList.remove('erro');
                    document.querySelector('.cvcInput .erroInfo').style.display = 'none';
                    sendForm++;
                    //Permitir o envio do formulário
                }else{
                     document.querySelector('.inpCVC').classList.add('erro');
                     document.querySelector('.cvcInput .erroInfo').style.display = 'block';
                     sendForm = 0;
                    //Bloquear o envio do formulário
                }
               
            }else{
                document.querySelector('.inpCVC').classList.add('erro');
                document.querySelector('.cvcInput .erroInfo').style.display = 'block';
                sendForm = 0;
                //Bloquear o envio do formulário
            }

            if(sendForm === 4){
                formSent();
            } else{
                sendForm = 0;
            }
}

function formSent(){
    
}