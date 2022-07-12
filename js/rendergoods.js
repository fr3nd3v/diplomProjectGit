const productContainer = document.querySelector('.product__grid');
const productPopUp = document.querySelector(".porduct__popup");
const popUp = document.querySelector(".popup__wrapper");
let minCostInput = document.querySelector('#minCost');
let maxCostInput = document.querySelector('#maxCost');


getProducts()

async function getProducts(){
   const response = await fetch('./js/goods.json');
   const productsArray = await response.json();

   renderProducts(productsArray);

   popUpRender (productsArray)
}

function renderProducts(productsArray){
    let costArray = [];
    const removeAllProduct = '';
    // startpage allproduct render
    let changeButton = document.querySelector('#changeButton');
    productsArray.forEach(function(item){
        costArray.push(parseInt(item.cost))
        const productHTML = `<div class="product__card">
        <div name="${item.id}"  class="card__about">
            <img class="card__img" src="/img/${item.image}" alt="">
            <div class="card__container">
                <div class="card__info">
                    <div class="card__title">${item.name}</div>
                    <div class="card__cost">${item.cost}<span> ₽</span></div>
                </div>
                <div idProduct="${item.id}" id="btnBuy" class="card__buy gradient">buy</div>
            </div>
        </div>
    </div>`
       productContainer.insertAdjacentHTML('beforeend', productHTML);
       minCostInput.value = Math.min(...costArray);
       maxCostInput.value = Math.max(...costArray);
    });
    //startpage allprocuct render end

    changeButton.addEventListener('click', function(){
        costArray = [];
        
        let select = document.querySelector('#changerSelect').value;
        
        productContainer.innerHTML = removeAllProduct;

        // braslets render
        if(select == 'all'){   
            productsArray.forEach(function(item){
                if(parseInt(item.cost) >= minCostInput.value && parseInt(item.cost) <= maxCostInput.value){
                    const productHTML = `<div class="product__card">
                    <div name="${item.id}" class="card__about">
                        <img class="card__img" src="/img/${item.image}" alt="">
                        <div class="card__container">
                            <div class="card__info">
                                <div class="card__title">${item.name}</div>
                                <div class="card__cost">${item.cost}<span> ₽</span></div>
                            </div>
                            <div idProduct="${item.id}" id="btnBuy"  class="card__buy gradient">buy</div>
                        </div>
                    </div>
                    </div>`
                    productContainer.insertAdjacentHTML('beforeend', productHTML);
                }
            });
            
             
         }

        // braslets render
        if(select == 'bracelets'){
            productsArray.forEach(function(item){
                 if(item.atribute == 'bracelets' && parseInt(item.cost) >= minCostInput.value && parseInt(item.cost) <= maxCostInput.value){
                     const productHTML = `<div class="product__card">
                     <div name="${item.id}" class="card__about">
                         <img class="card__img" src="/img/${item.image}" alt="">
                         <div class="card__container">
                             <div class="card__info">
                                 <div class="card__title">${item.name}</div>
                                 <div class="card__cost">${item.cost}<span> ₽</span></div>
                             </div>
                             <div idProduct="${item.id}" id="btnBuy" class="card__buy gradient">buy</div>
                         </div>
                     </div>
                 </div>`
                 productContainer.insertAdjacentHTML('afterbegin', productHTML);
                 }
            })
         }
        // braslets render end

        // amulets render start
        if(select == 'amulets'){
            productsArray.forEach(function(item){
                 if(item.atribute == 'amulets' && parseInt(item.cost) >= minCostInput.value && parseInt(item.cost) <= maxCostInput.value){
                     const productHTML = `<div class="product__card">
                     <div name="${item.id}" class="card__about">
                         <img class="card__img" src="/img/${item.image}" alt="">
                         <div class="card__container">
                             <div class="card__info">
                                 <div class="card__title">${item.name}</div>
                                 <div class="card__cost">${item.cost}<span> ₽</span></div>
                             </div>
                             <div idProduct="${item.id}" id="btnBuy" class="card__buy gradient">buy</div>
                         </div>
                     </div>
                 </div>`
                 productContainer.insertAdjacentHTML('afterbegin', productHTML);
                 }
            })
         }
        //  earrings amulet render end
        if(select == 'earrings'){
            productsArray.forEach(function(item){
                 if(item.atribute == 'earrings' && parseInt(item.cost) >= minCostInput.value && parseInt(item.cost) <= maxCostInput.value){
                     const productHTML = `<div class="product__card">
                     <div name="${item.id}" class="card__about">
                         <img class="card__img" src="/img/${item.image}" alt="">
                         <div class="card__container">
                             <div class="card__info">
                                 <div class="card__title">${item.name}</div>
                                 <div class="card__cost">${item.cost}<span>₽</span></div>
                             </div>
                             <div idProduct="${item.id}" id="btnBuy"  class="card__buy gradient">buy</div>
                         </div>
                     </div>
                 </div>`
                 productContainer.insertAdjacentHTML('afterbegin', productHTML);
                 }
            })
         }
        //  box render end
        if(select == 'box'){
            productsArray.forEach(function(item){
                 if(item.atribute == 'box' && parseInt(item.cost) >= minCostInput.value && parseInt(item.cost) <= maxCostInput.value){
                     const productHTML = `<div class="product__card">
                     <div name="${item.id}" class="card__about">
                         <img class="card__img" src="/img/${item.image}" alt="">
                         <div class="card__container">
                             <div class="card__info">
                                 <div class="card__title">${item.name}</div>
                                 <div class="card__cost">${item.cost}<span>₽</span></div>
                             </div>
                             <div idProduct="${item.id}" id="btnBuy"  class="card__buy gradient">buy</div>
                         </div>
                     </div>
                 </div>`
                 productContainer.insertAdjacentHTML('afterbegin', productHTML);
                 }
            })
         }
        //  box render end
        //  box render end
        if(select == 'art'){
            productsArray.forEach(function(item){
                 if(item.atribute == 'art' && parseInt(item.cost) >= minCostInput.value && parseInt(item.cost) <= maxCostInput.value){
                     const productHTML = `<div class="product__card">
                     <div name="${item.id}" class="card__about">
                         <img class="card__img" src="/img/${item.image}" alt="">
                         <div class="card__container">
                             <div class="card__info">
                                 <div class="card__title">${item.name}</div>
                                 <div class="card__cost">${item.cost}<span>₽</span></div>
                             </div>
                             <div idProduct="${item.id}" id="btnBuy"  class="card__buy gradient">buy</div>
                         </div>
                     </div>
                 </div>`
                 productContainer.insertAdjacentHTML('afterbegin', productHTML);
                 }
            })
         }
        //  box render end
    });
}
function popUpRender (productsArray){
    productContainer.addEventListener('click', function(e){
        if(e.target.classList.value == "card__img"){
            popUp.innerHTML = "";
            productsArray.forEach(function(item){
                if(e.target.parentElement.getAttribute("name") == item.id){
                    const productHTMLPoPup = `<div class="porduct__popup">
                    <div class="product__popup_close"></div>
                    <img class="popup__card__img" src="/img/${item.image}" alt="">
                            <div class="popup__card__container">
                                <div class="popup__card_wrap">
                                    <div class="popup__card__title">${item.name}</div>
                                    <h3 class="product__title_about">описание:</h3>
                                    <p class="product__text">${item.text}</p>       
                                     <div class="popup__card__cost">${item.cost}<span>₽</span></div>    
                                </div>
                            <div idProduct="${item.id}" id="btnBuy"  class="popup__card_buy card__buy gradient">buy</div>   
                    </div>
                </div> `
                    popUp.insertAdjacentHTML('beforeend', productHTMLPoPup);
                }
           })
           popUp.style.visibility = "visible";
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
        }
    })
}





{/* <img class="popup__card__img" src="/img/item1.jpg" alt="">
<div class="popup__card__container">
    <div class="popup__card_wrap">
        <div class="popup__card__title">штукадрюка 1</div>
        <h3 class="product__title_about">описание:</h3>
        <p class="product__text"></p>       
         <div class="popup__card__cost">1333 <span>р</span></div>    
    </div> */}





// function popUp(){
//     let popUpOpen = document.querySelector(".card__img");
//     let popUp = document.querySelector(".popup__wrapper");
//     let popUpClose = document.querySelector('.product__popup_close');
//     console.log(popUpOpen)
//     console.log(popUp)

//     popUpOpen.addEventListener('click', function(){
//         popUp.style.visibility = "visible";
//     })
//     popUpClose.addEventListener('click', function(){
//         popUp.style.visibility = "hidden";
//     })
   
// }




   
             
