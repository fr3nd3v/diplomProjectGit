'use strict'

document.addEventListener('DOMContentLoaded', function(){
    const popUp = document.querySelector(".popup__wrapper");
    getProducts();
    const makeUniq = (arr) => [...new Set(arr)];
    const containerForOffer = document.querySelector('#myoffer');
    let userName = document.querySelector('.signup__text').textContent;
    let getInfo
    function parsejson(json){
        return JSON.parse(json);
    }
    function curry (fn){
        return function curried(...args){
            if(args.length >= fn.length){
               return fn.apply(this, args);
            }
            return curried.bind(this, ...args);
        }
    }
    const curriedRenderProduct = curry(renderProducts);
  
    async function getProducts(){
        const response = await fetch('/js/goods.json');
        const productsArray = await response.json();
        getInfo = curriedRenderProduct(productsArray);
        getOffers();
    }
    
    async function getOffers(){
        $.ajax({
            url: '../php/offerinfo.php',
            type: 'POST',
            dataType: 'json',
            data:{
            },
            success (data){
                if(data.status){
                    getInfo(data.userInfo)
                }
            }
        });
        
    }
    

    function renderProducts(productArray, userProductArr){
        console.log(productArray)
        console.log(userProductArr)
        let offerId = [];
        let status = [];
        for(let i = 0; i < userProductArr.length; i++){

            let products = [];
            for (let index = 0; index < userProductArr[i].length; index++) {
                
                if(userProductArr[i][index] === userProductArr[i][7]){
                    products.push(parsejson(userProductArr[i][7]))
                }
                if(userProductArr[i][index] === userProductArr[i][0]){
                    offerId.push(userProductArr[i][0])
                }
                if(userProductArr[i][index] === userProductArr[i][10]){
                   status.push(userProductArr[i][10])
                }

            }
            
            const productHTML = `<div class="myoofers__offers">
            <div class="offers__id sub">номер заказа: <span class="id__number value">${offerId[i]}</span></div>
            <div class="offer__about">

            </div>
            <div class="offers__status sub">
                стастус: <span class="status value">${status[i]}</span>
            </div>
            <button id="offersBtn" name="${offerId[i]}" class="myOfferInfo_btn gradient">информация</button>
            </div>`
            containerForOffer.insertAdjacentHTML('beforeend', productHTML);

            let offerAbout = document.querySelectorAll('.offer__about')[i]
            products.forEach(function(item){
                item.forEach(function(product){
                    let cardInfoArr = [];
                    for(let cardJson = 0; cardJson < productArray.length; cardJson++ ){
                        if(productArray[cardJson].id == product[0]){
                            cardInfoArr.push(productArray[cardJson].image)
                            cardInfoArr.push(productArray[cardJson].name)
                            cardInfoArr.push(productArray[cardJson].cost)

                        }
                    }
                    const oneCard = `<div class="offer__card" name='${product[0]}'>
                                    <img src="/img/${cardInfoArr[0]}"  class="offers__img product-card__img" alt="">
                                    <div class="product__name ">${cardInfoArr[1]}</div>
                                    <div class="product__cost sub">цена за 1 шт: <span class="cost value"> ${cardInfoArr[2]} ₽</span> </div>
                                    <div class="product__quntility sub">шт:<span class="quntility value">${product[1]}</span></div>
                                    </div>`
                     
                     offerAbout.insertAdjacentHTML('beforeend', oneCard);               
                })
            })
            
        }
        
        containerForOffer.addEventListener('click', function(e){
            if(e.target.id == "offersBtn"){
                userProductArr.forEach(function(item){
                    if(item[0] == e.target.name){
                        popUp.innerHTML = ''
                        const popUpInfo = `<div class="porduct__popup">
                        <div class="product__popup_close">
                        </div>
                        <div class="offers__cost_final sub">Имя:
                             <span class="cost__final value">
                                ${item[1]}
                             </span>
                        </div>
                        <div class="offers__cost_final sub">Фамилия:
                             <span class="cost__final value">
                                 ${item[2]}
                             </span>
                        </div>
                        <div class="offers__cost_final sub">Телефон:
                             <span class="cost__final value">
                                 ${item[3]}
                             </span>
                        </div>
                        <div class="offers__cost_final sub">email:
                             <span class="cost__final value">
                                ${item[4]}
                             </span>
                        </div>
                        <div class="offers__cost_final sub">Адрес:
                             <span class="cost__final value">
                                 ${item[5]}
                             </span>
                        </div>
                        <div class="offers__cost_final sub">Индекс:
                             <span class="cost__final value">
                                ${item[6]}
                             </span>
                        </div>
                        
                    </div>`
                        popUp.insertAdjacentHTML('beforeend', popUpInfo)
                    }
                  
               })
                popUp.style.visibility = "visible";
            }
            let popUpClose = document.querySelector('.product__popup_close');
            popUpClose.addEventListener('click', function(){
                     popUp.style.visibility = "hidden";
                     popUp.classList.remove("popup__wrapper_animation");
             })
             popUp.addEventListener('click', function(e){
                 if(e.target == popUp){
                     popUp.style.visibility= "hidden";
                     popUp.classList.remove("popup__wrapper_animation");
                 }
             })
             popUp.classList.add("popup__wrapper_animation");
        })
    }
});    


// const productHTML = `<div class="myoofers__offers">
//             <div class="offers__id sub">номер заказа: <span class="id__number value">45</span></div>
//             <div class="offer__about">
//                 <div class="offer__card">
//                     <img src="/img/item1.jpg"  class="offers__img product-card__img" alt="">
//                     <div class="product__name ">lororor</div>
//                     <div class="product__cost sub">цена за 1 шт: <span class="cost value"> 13213</span> </div>
//                     <div class="product__quntility sub">шт:<span class="quntility value">4</span></div>
//                 </div>
//             </div>
//             <div class="offers__cost_final sub">Итого:
//                  <span class="cost__final value">
//                      3030303
//                  </span>
//             </div>
//             <div class="offers__status sub">
//                 стастус: <span class="status value">в оброботке</span>
//             </div>
//         </div>`
//         containerForOffer.insertAdjacentHTML('beforeend', productHTML);

{/* <div class="offer__card">
                <img src="/img/item1.jpg"  class="offers__img product-card__img" alt="">
                <div class="product__name ">lororor</div>
                <div class="product__cost sub">цена за 1 шт: <span class="cost value"> 13213</span> </div>
                <div class="product__quntility sub">шт:<span class="quntility value">4</span></div>
               </div> */}



{/* <div class="porduct__popup">
            <div class="product__popup_close">
            </div>
            <div class="offers__cost_final sub">Имя:
                 <span class="cost__final value">
                     Андрей
                 </span>
            </div>
            <div class="offers__cost_final sub">Фамилия:
                 <span class="cost__final value">
                     алеексев
                 </span>
            </div>
            <div class="offers__cost_final sub">Телефон:
                 <span class="cost__final value">
                     +798999599
                 </span>
            </div>
            <div class="offers__cost_final sub">email:
                 <span class="cost__final value">
                     3030303@11
                 </span>
            </div>
            <div class="offers__cost_final sub">Город:
                 <span class="cost__final value">
                     жопа
                 </span>
            </div>
            <div class="offers__cost_final sub">Индекс:
                 <span class="cost__final value">
                     303003
                 </span>
            </div>
            <div class="offers__cost_final sub">Итого:
                 <span class="cost__final value">
                     3030303Р
                 </span>
            </div>
        </div>                */}