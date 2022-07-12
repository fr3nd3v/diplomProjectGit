"use strict"
document.addEventListener('DOMContentLoaded', function(){
    let message = document.querySelector('.message__reg');
    const form = document.getElementById('formRegistration');
    form.addEventListener('submit', formSend)
    
    async function formSend(event){
        event.preventDefault();
        let error = validateForm(form);
    
        if (error === 0){
            let login = document.querySelector('#login').value;
            let email = document.querySelector('#email').value;
            let password = document.querySelector('#password').value;
            

            $.ajax({
                url: '../php/regastration.php',
                type: 'POST',
                dataType: 'json',
                data:{
                    login: login,
                    email: email,
                    password: password
                },
                success (data){
                    if(data.status){
                        document.location.href = '/page/authpage.php'
                    }
                    else{
                        console.log(data)
                        message.textContent = data.message;
                    }
                }
            });






            // let jsonstr = {
            //     login: login,
            //     email: email,
            //     password: password,
            // }

            // let jsonstr = dataFormToJSON();
            
            // let response = await fetch('http://diplom/php/regastration.php',{
            //     method:'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(jsonstr), 
            // });

            // let body = "jsonstr=" + 
            // encodeURIComponent(jsonstr);
            // let xhr = new XMLHttpRequest();
            // xhr.open("POST", "http://formdatasender/php/catchData.php", true);
            // xhr.setRequestHeader('Content-Type', 
            // 'application/x-www-form-urlencoded');
            // xhr.send(body);
        }
        else{
            alert("неккоректные поля подвечны кра свны")
        }
    }
    function validateForm(form){
        let error = 0;
        let checkInput = document.querySelectorAll("._check");
       
        for(let i = 0; i < checkInput.length; i++){
            let input = checkInput[i];
            
            inputRemoveError(input);

            if(input.getAttribute("name") === "email"){
                if(input.value.length < 5 || input.value.length > 30){
                    inputAddError(input)

                    error++;
                }
            }
            if(input.getAttribute("name") === "password"){
                
                if(input.value.length < 5 || input.value.length > 30){
                    inputAddError(input);

                    error++;
                }
            }
            if(input.getAttribute("name") === "repassword"){
                if(input.value !== input.previousElementSibling.value){
                    inputAddError(input)
                }
            }
            if(input.getAttribute("name") === "login"){
                if(input.value.length < 5 || input.value.length > 30){
                    inputAddError(input)

                    error++;
                }
            }
            if(input.getAttribute("name") === "checkbox" && input.checked === false){
                inputAddError(input);

                 error++;
            }
            if(input.getAttribute("name") === "checkbox" && input.checked === false){
                inputAddError(input);

                 error++;
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
        console.log(error)
        return error;  
    }

    // function validateForm(form){
    //     let error = 0;
    //     let formCheck = document.querySelectorAll('._check');
        
    //     for (let i = 0; i < formCheck.length; i++){
    //         const input = formCheck[i];
            
    //         inputRemoveError(input)
    //         if(input.getAttribute("type") === "checkbox" && input.checked === false){
    //             inputAddError(input);
    //             error++;
    //         }
    //         else if(input.getAttribute("name") === "login"){
    //             if(input.value.length <= 5 || input.value.length >= 40 ){
    //                 inputAddError(input);
    //                 error++;
    //                 alert('логин должен быть больше 5 символов и меньше 40 символов')
    //             }
    //         }
    //         else if(input.value === ''){
    //             inputAddError(input);
    //             error++;
    //         }
            
    //     }
        
    //     let userPassword = document.querySelector('#getSignUpPassword');
    //     let userRepeatPassword = document.querySelector('#getSignUpRepeatPassword');
    //     if (userPassword.value != userRepeatPassword.value){
    //         inputAddError(userPassword);
    //         inputAddError(userRepeatPassword);
    //         error++;
    //     }
    //     if (userPassword.value.length <= 5 || userPassword.value.length >= 40){
    //         inputAddError(userPassword);
    //         inputAddError(userRepeatPassword);
    //         error++;
    //         alert("пароль должен быть больше 5 символов и меньше 40 символов")
    //     }
        
    //     return error;
    // }
    // function inputAddError(input){
    //     input.classList.add("_erorr");
    // }
    // function inputRemoveError(input){
    //     input.classList.remove("_erorr");
    // }
    // form.addEventListener('click', function(event){
    //     inputRemoveError(event.target)
        
    // })
    
 
});
