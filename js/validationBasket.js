'use strict'
let shopQuantility = document.querySelector('.shop__quantility')
let productQuntilityBasket = document.querySelector(".shop__quantility");

const mainInterFaceBasket = document.querySelector('.main__interface')


mainInterFaceBasket.addEventListener('click', function(e){
    
    if(e.target.id == "btnBuy"){
        let allproducts = document.querySelectorAll(".offer__product-card");
        let indexQ = e.target.getAttribute("idproduct");
        
        for(let i = 0; i < allproducts.length; i++){
            if(allproducts[i].id == indexQ){
            
                allproducts[i].style.display = 'flex';
            }
        }
        for(let i = 0; i < allproducts.length; i++){
            if(allproducts[i].style.display == 'none'){
               
            }
            
        }
        
    }    
    
})

const itemToBasket = document.querySelector('.item__tomain')
const offerShop = document.querySelector('#offer');
offerShop.addEventListener('click', function(e){
    if(e.target.id == "minusBtn"){
        minusCost(e.target)
    }
    if(e.target.id == "plusBtn"){
        plusCost(e.target)
    }
    if(e.target.id == "cardDelete"){
        deleteProduct(e.target)
        
    }

})

function plusCost(target){
    let arrCostBasket = document.querySelectorAll('.product-card__cost');

    let valueText = target.parentNode.querySelector('.quantity__number ').value;
    let cost =  target.parentNode.parentNode.parentNode.querySelector('.product-card__cost').getAttribute("startcost");
    let value = parseInt(valueText) + 1;

    target.parentNode.querySelector('.quantity__number ').value = value;
    target.parentNode.parentNode.parentNode.querySelector('.product-card__cost').textContent = value * cost + "₽";
    // console.log(summator) 
  
    
    getFinalCost(arrCostBasket);
}

function minusCost(target){
    let arrCostBasket = document.querySelectorAll('.product-card__cost');

    let valueText = target.parentNode.querySelector('.quantity__number ').value;
    let cost =  target.parentNode.parentNode.parentNode.querySelector('.product-card__cost').getAttribute("startcost");
    let value = parseInt(valueText) - 1;
    target.parentNode.querySelector('.quantity__number ').value = value;
    target.parentNode.parentNode.parentNode.querySelector('.product-card__cost').textContent = value * cost + "₽";
    if(value === 0){
        target.parentNode.parentNode.parentNode.style.display = "none";
       
        value =+ 1;
        target.parentNode.querySelector('.quantity__number ').value = value;
        target.parentNode.parentNode.parentNode.querySelector('.product-card__cost').textContent = value * cost + "₽";
    }
    getFinalCost(arrCostBasket);
}
function deleteProduct(target){
    
    let arrCostBasket = document.querySelectorAll('.product-card__cost');
    target.parentNode.style.display = "none";
    getFinalCost(arrCostBasket);
    // target.parentNode.remove();
}
// const time = 10;
// const step = 50;
// let n 
// function animateCost(num, elem){
//     let l = document.querySelector("#" + elem);
//     n = 0;
//     let t = Math.round(time/(num/step));
//     let interval = setInterval(() =>{
//         n = n + step;
//         if(n == num){
//             clearInterval(interval)
//         }
//         if(num == 0){
//             clearInterval(interval)
//         }
//         console.log(n)
//         console.log(l)
//         l.textContent = n + "" + "₽";
//     },t);
    
// }

function getFinalCost(arrCost){
   
    let finalCostPre = document.querySelector('.final-cost');
    let summatorFinal = 0;
    for(let i = 0; i < arrCost.length; i++){
        if(arrCost[i].parentNode.style.display == 'none'){
            continue
        }
        
        summatorFinal = summatorFinal + parseInt(arrCost[i].textContent)
    }
    for(let i = 0; i < summatorFinal; i++){
        // finalCostPre.textContent = i;
        // console.log(i)
    }
    finalCostPre.textContent = summatorFinal + "₽";
    getQuntilityProducts()
    // animateCost(summatorFinal, 'finalCost');
}

function getQuntilityProducts(){
    let quntilityProducts = document.querySelectorAll(".offer__product-card");
    let quntility = 0;
    for(let i = 0; i <  quntilityProducts.length; i++){
        if(quntilityProducts[i].style.display == "none"){
            continue
        }
        quntility++;
    }
    shopQuantility.textContent = quntility;
   
}

function valadationUserInput(){

}

function sendUserBasket(){

}


document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('userOfferForm');
    form.addEventListener('submit', formSend)
    
    async function formSend(event){
        event.preventDefault();
        let nameUser = document.querySelector('#name').value ;
        let familyUser = document.querySelector('#family').value;
        let telUser = document.querySelector('#tel').value;
        let emailUser = document.querySelector('#email').value;
        let adressUser = document.querySelector('#adress').value ;
        let postIndexUser = document.querySelector('#postIndex').value; 
        let userGoods = getUserProducts();
        let error = validateForm(form);
        console.log(error)
        if (error === 0){
            console.log("send")
            $.ajax({
                url: '../php/userBasket.php',
                type: 'POST',
                dataType: 'json',
                data:{
                    name: nameUser,
                    family: familyUser,
                    tel: telUser,
                    email: emailUser,
                    addres: adressUser,
                    postIndex: postIndexUser,
                    userGoods: userGoods
                    
                },
                success (data){
                    if(data.status){
                        document.location.href = '/page/myoffers.php'
                    }
                }
            });
        }
        else{
            console.log("no error, error")
        }
    }
    function getUserProducts(){
        let basketGoods = document.querySelectorAll('.offer__product-card')
        let userProductArr = [];
        for(let i = 0; i < basketGoods.length; i++ ){
            if(basketGoods[i].style.display == 'none'){
                continue
            }
            let productAndQuntilityArr = [] 
            productAndQuntilityArr.push(basketGoods[i].id)
            productAndQuntilityArr.push(basketGoods[i].querySelector('.quantity__number ').value)
            userProductArr.push(productAndQuntilityArr)
        }
      
        return userProductArr;
    }
    
    function validateForm(form){
        let error = 0;
        let checkInput = document.querySelectorAll("._check");
       
        console.log(checkInput)
        for(let i = 0; i < checkInput.length; i++){
            let input = checkInput[i];
            inputRemoveError(input);
            if(input.value == ''){
                inputAddError(input)
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
        return error
    }
});    

$(function(){
    //2. Получить элемент, к которому необходимо добавить маску
    $("#tel").mask("+7(999) 999-99-99");
    $("#postIndex").mask("999-999");
    
  });

// itemToMain.onclick = ()=> {
//     $.ajax({
//         url: '../php/renderGoods.php',
//         type: 'POST',
//         dataType: 'json',
//         data:{
//         productArray: filtredShopProduct,
//         },
//         success (data){
//             productQuntility.textContent = makeUniq(shopProduct).length;
//             basketUser(data)
//         }
//     });
// }