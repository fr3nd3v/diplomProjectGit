'use strict'
document.addEventListener('DOMContentLoaded', function(){
    console.log(1)
    let productQuntility = document.querySelector(".shop__quantility");
    const basketLink = document.querySelector(".item__shop");
    const makeUniq = (arr) => [...new Set(arr)];
    const shopProduct =  [];
    const shopBasket = document.querySelector('#shop');
    let mainInterFace = document.querySelector('.main__interface');
    let offerInterFace = document.querySelector('.offer__container');
    let itemToMain = document.querySelector('.item__tomain');
    let basketUser 
    function curry (fn){
        return function curried(...args){
            if(args.length >= fn.length){
            return fn.apply(this, args);
            }
            return curried.bind(this, ...args);
        }
    }


    const curriedRenderBasket = curry(renderBasket);


    getProducts()
    async function getProducts(){
        const response = await fetch('./js/goods.json');
        const productsArray = await response.json();
        basketUser = curriedRenderBasket(productsArray);
        console.log(productsArray);
    }
    document.addEventListener('click', function(e){
        
        if(e.target.id == "btnBuy"){
            shopProduct.push(e.target.getAttribute("idproduct"));
            productQuntility.textContent =  makeUniq(shopProduct).length ;
        }
    })
    basketLink.onclick = ()=> {
        const filtredShopProduct = makeUniq(shopProduct);
        $.ajax({
            url: '../php/renderGoods.php',
            type: 'POST',
            dataType: 'json',
            data:{
            productArray: filtredShopProduct,
            },
            success (data){
                basketUser(data)
                console.log(data);         
            }
        });
        mainInterFace.classList.add("positionElJs");
        basketLink.style.display = "none";

        offerInterFace.classList.remove("positionElJs");
        offerInterFace.classList.add('_active');

        itemToMain.classList.remove("positionElJs");
        itemToMain.classList.add("_active_fadeIn");

        mainInterFace.classList.remove("active_backInLeft");
        // offerInterFace.style.display = "flex";
        // basketLink.style.display = 'none';
        itemToMain.style.display = "block";
    }
    itemToMain.onclick = ()=> {
        offerInterFace.classList.add("positionElJs");
        offerInterFace.classList.remove('_active');

        itemToMain.style.display = "none";

        mainInterFace.classList.remove("positionElJs");
        mainInterFace.classList.add("active_backInLeft");

        basketLink.style.display = "block"
    }

    const preRenderBasket = [];

    function renderBasket(productArray, data){
        // shopBasket.innerHTML = "";
        let basketState = document.querySelectorAll('.offer__product-card')
        console.log(productArray)
        console.log(data)
       
        if(basketState.length == 0){
            productArray.forEach(function(item){
                if(data.includes(item.id)){
                    const productHTML = `<div id="${item.id}" class="offer__product-card">
                        <div class="product__container_about">
                            <div class="product__about">
                                <img src="/img/${item.image}" alt="" class="product-card__img">
                            <div class="product-card__name">${item.name}</div>
                            </div>
                            <div class="product__quantity">
                                <button id="minusBtn" class="quantity__minus quantity__active"></button>
                                <input class="quantity__number " value="${1}" >
                                <button id="plusBtn" class="quantity__plus quantity__active"></button>
                            </div>
                        </div>
                        <div startCost="${item.cost}" class="product-card__cost">${item.cost}<span>₽</span></div>
                        <div id="cardDelete" class="product-card__delete"></div>                          
                    </div>`
                    shopBasket.insertAdjacentHTML('beforeend', productHTML);
                }
            });
        }
        if(basketState.length != 0){
            const postRender = data;
            let preRender;
            for(let i = 0; i < basketState.length; i++){
                // if(data.includes(basketState[i].id)){
                // }
                // console.log(data.includes(basketState[i].id))
                if(postRender.includes(basketState[i].id)){
                    let deleteElIndex = postRender.indexOf(basketState[i].id);
                    // console.log("yes" + "" + postRender.indexOf(basketState[i].id))
                    postRender.indexOf(basketState[i].id)
                    preRender = postRender.splice(deleteElIndex, 1)
                    // console.log(basketState[i].id)
                }
                // preRender = postRender.filter(function(item){
                //     console.log(item + "~" + basketState[i].id);
                //     console.log(!item.includes(basketState[i].id));
                //     if(item.includes(basketState[i].id)){
                //         preRender
                //     }
                //     return !item.includes(basketState[i].id)  ;
                // })
                
            }
            
            // console.log(preRender);
            // console.log(postRender);
            
            productArray.forEach(function(item){
                if(postRender.includes(item.id)){
                    const productHTML = `<div id="${item.id}" class="offer__product-card">
                    <div class="product__container_about">
                        <div class="product__about">
                            <img src="/img/${item.image}" alt="" class="product-card__img">
                        <div class="product-card__name">${item.name}</div>
                        </div>
                        <div class="product__quantity">
                            <button id="minusBtn" class="quantity__minus quantity__active"></button>
                            <input class="quantity__number " value="${1}" >
                            <button id="plusBtn" class="quantity__plus quantity__active"></button>
                        </div>
                    </div>
                    <div startCost="${item.cost}" class="product-card__cost">${item.cost}<span>₽</span></div>
                    <div id="cardDelete" class="product-card__delete"></div>                          
                </div>`
                    shopBasket.insertAdjacentHTML('beforeend', productHTML);
                }
            });
        }

        let arrCost = document.querySelectorAll('.product-card__cost');
        let finalCostPost = document.querySelector('.final-cost');
        let summator = 0;
        for(let i = 0; i < arrCost.length; i++){
            if(arrCost[i].parentNode.style.display == 'none'){
                continue;
            }
            summator = summator + parseInt(arrCost[i].textContent)
            finalCostPost.textContent = summator + "₽";
        }
        console.log(summator);
    }

})






// function filterRange(arr, a, b) {
//     return arr.filter(item => (a <= item && item <= b));
// }





// const productHTML = `<div class="offer__product-card">
//                 <div class="product__container_about">
//                     <div class="product__about">
//                         <img src="/img/${item.image}" alt="" class="product-card__img">
//                        <div class="product-card__name">${item.name}</div>
//                     </div>
//                     <div class="product__quantity">
//                         <button class="quantity__minus quantity__active"></button>
//                         <input class="quantity__number " value="1" >
//                         <button class="quantity__plus quantity__active"></button>
//                     </div>
//                 </div>
//                 <div class="product-card__cost">${item.cost}<span>р</span></div>
//                 <div class="product-card__delete"></div>                          
//             </div>`
//             shopBasket.insertAdjacentHTML('beforeend', productHTML);





