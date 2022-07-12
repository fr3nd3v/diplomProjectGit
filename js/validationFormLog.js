"use strict"
console.log("check")
document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('formLogin');
    form.addEventListener('submit', formSend)
    let message = document.querySelector('.messageFromPhp')
    async function formSend(event){
        event.preventDefault();
        let error = validateForm(form);
        console.log(error)
        if (error === 0){
            let emailOrLogin = document.querySelector('#emailOrLogin').value;
            let password = document.querySelector('#password').value;
            console.log("send")
            $.ajax({
                url: '../php/login.php',
                type: 'POST',
                dataType: 'json',
                data:{
                    emailOrLogin: emailOrLogin,
                    password: password
                },
                success (data){
                    if(data.status){
                        document.location.href = '/'
                    }
                    else{
                        
                        console.log(data.message)
                        message.textContent = data.message
                    }
                }
            });
        }
        else{
            console.log("no error, error")
        }
    }
    function validateForm(form){
        let error = 0;
        let checkInput = document.querySelectorAll("._check");
       
        console.log(checkInput)
        for(let i = 0; i < checkInput.length; i++){
            let input = checkInput[i];
            inputRemoveError(input);
            if(input.getAttribute("name") === "password"){
                
                if(input.value.length < 5 || input.value.length > 30){
                    inputAddError(input);

                    error++;
                }
            }
           
        }

        form.addEventListener('click',  (e) => {
            inputRemoveError(e.target)
        })
        
       function inputAddError(input){
        input.classList.add("_erorr");
        }   
        function inputRemoveError(input){
        input.classList.remove("_erorr");
        }
        return error
    }
});    