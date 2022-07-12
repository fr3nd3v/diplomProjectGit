"use strict"

document.addEventListener('DOMContentLoaded', function(){
    getProducts();

    function curry (fn){
        return function curried(...args){
            if(args.length >= fn.length){
               return fn.apply(this, args);
            }
            return curried.bind(this, ...args);
        }
    }
    let curriedPushValueStep
    const curriedPushValue = curry (pushValue);
    const popUp = document.querySelector(".popup__wrapper");
    const popUpProductPlace = document.querySelector('.porduct__popup')
    const productContainer = document.querySelector('.module__products_container');
    const offerProcessingContainer = document.querySelector('#offersProcessing');
    const searchOfferContainer = document.querySelector('#searchOffer');
    const offersRejected = document.querySelector('#offersRejected');
    const offersSend = document.querySelector("#offersSend");
    const offersReady = document.querySelector("#offersReady");
    const offersModule = document.querySelector('#offersModule');
    const asyncProductArr = [];


    function pushProduct(product){
        product.map((item) => {
            asyncProductArr.push(item)
        })
    }
    
    // INPUTS
    let addInputName = document.querySelector('#addName');
    let addInputImage = document.querySelector('#addImage');
    let addInputCost = document.querySelector('#addCost');
    let addInputAttribute = document.querySelector('#addSelect');
    let addInputText = document.querySelector('#addDeckription');
    let addId 

    let editInputIndex = document.querySelector('#editIndex');
    let editInputName = document.querySelector('#editName');
    let editInputImage = document.querySelector('#editImage');
    let editInputCost = document.querySelector('#editCost');
    let editInputAttribute = document.querySelector('#editSelect');
    let editInputText = document.querySelector('#editDeckription');

    let deleteId = document.querySelector('#deleteId');

    let deleteMessage = document.querySelector('.deleteMessage')
    let editeMessage = document.querySelector('.editMesage')
    let addMessage = document.querySelector('.addMesage')
    // INPUTS END
    
    async function getProducts(){
        const response = await fetch('/js/goods.json');
        const productsArray = await response.json();
        renderAdminProducts(productsArray);
        curriedPushValueStep = curriedPushValue(productsArray);
        addId = choiseItemId(productsArray)
        pushProduct(productsArray)

    }
    function renderAdminProducts(productsArray){
        productsArray.forEach(function(item){
            
            const product = `<div class="product__card">
            <img  class="product__img" src="/img/${item.image}" alt="">
            <div class="product__name">${item.name}</div>
            <div class="product__cost">${item.cost}</div>
            <div class="product__cost">ID:${item.id}</div>
            <button class='info__btn' name="${item.id}">push</button>
        </div>
        `
            productContainer.insertAdjacentHTML('beforeend', product)
        });  
    }

    productContainer.addEventListener('click', function(e){
        if(e.target.classList == 'info__btn'){
            curriedPushValueStep(e.target.name)
        }
    })

    function pushValue(productArray, target){
        productArray.forEach(function(item) {
            if(item.id == target){
                // editInputIndex.value = target;
                editInputIndex.value = item.id;
                editInputName.value = item.name;
                editInputImage.value =  item.image;
                editInputCost.value = item.cost;
                editInputAttribute.value = item.atribute;
                editInputText.value = item.text;
            }
        });
    }
    function choiseItemId(productArray){
        return productArray.length;
    }

    
    document.querySelector('#addProductBtn').onclick = function(event){
        event.preventDefault();
        $.ajax({
            url: '../php/addProduct.php',
            type: 'POST',
            dataType: 'json',
            data:{
                addInputId: addId,
                addName: addInputName.value,
                addCost: addInputCost.value,
                addImage: addInputImage.value,
                addAtribute: addInputAttribute.value,
                addDesk: addInputText.value
            },
            success (data){
                if(data.status){
                    addMessage.textContent = data.product + '  ' + data.message;
                }
            }
        });
    }
    document.querySelector('#editProsuctBtn').onclick = function(event){
        event.preventDefault();
        $.ajax({
            url: '../php/editProduct.php',
            type: 'POST',
            dataType: 'json',
            data:{
                editInputId: editInputIndex.value,
                editName: editInputName.value,
                editCost: editInputCost.value,
                editImage: editInputImage.value,
                editAtribute: editInputAttribute.value,
                editDesk: editInputText.value
            },
            success (data){
                if(data.status){
                    editeMessage.textContent = data.product + '  ' + data.message;
                }
            }
        });
    }
    document.querySelector('#deleteBtn').onclick = function(event){
        event.preventDefault();
        $.ajax({
            url: '../php/deletProduct.php',
            type: 'POST',
            dataType: 'json',
            data:{
                $deletId: deleteId.value
            },
            success (data){
                if(data.status){
                    deleteMessage.textContent = data.product + '  ' + data.message;
                }
            }
        });
    }
    $.ajax({
        url: '../php/renderOfferProcessing.php',
        type: 'POST',
        dataType: 'json',
        data:{
        },
        success (data){
            if(data.status){
                renderOffers(data.userInfo)
            }
        }
    });
    function renderOffers(useroffer){
        const usersOffers = useroffer;

        // заказы
        usersOffers.forEach(function(offer){
            if(offer[10] == "processing"){
                const offerHTML =  `<div class="offer__processing offer_admin" id="${offer[0] + 'offer'}">
                <div class="offer__id">Номер заказа:<span>${offer[0]}</span></div>
                <div class="offer__info">
                    <div class="info__name">Имя:<span>${offer[1]}</span></div>
                    <div class="info__family">Фамилия:<span>${offer[2]}</span></div>
                    <div class="info__tel">Телефон:<span>${offer[3]}</span></div>
                    <div class="info__email">Емайл:<span>${offer[4]}</span></div>
                    <div class="info__addres">Адрес:<span>${offer[5]}</span></div>
                    <div class="info__post-index">Индекс:<span>${offer[6]}</span></div>
                    <div class="info__accname">Логин:<span>${offer[8]}</span></div>
                    <button id="offerInfoGoods"  class="info__goods">
                    товары
                    </button>
                </div>
                <select class="offer__change-status">
                    <option value="current">${offer[10]}</option>
                    <option value="processing">в обработке</option>
                    <option value="send">отправлен</option>
                    <option value="finish">исполнен</option>
                    <option value="rejected">отказано</option>
                </select>
                <button  id="offerStatusSend"  class="offer__btn-change">
                    потвердить
                </button>
            </div>`
            offerProcessingContainer.insertAdjacentHTML('beforeend', offerHTML)
            }
        })
        // заказы end

        // send
        usersOffers.forEach(function(offer){
            if(offer[10] == "send"){
                    const offerHTML =  `<div class="offer__processing offer_admin" id="${offer[0] + 'offer'}">
                    <div class="offer__id">Номер заказа:<span>${offer[0]}</span></div>
                    <div class="offer__info">
                        <div class="info__name">Имя:<span>${offer[1]}</span></div>
                        <div class="info__family">Фамилия:<span>${offer[2]}</span></div>
                        <div class="info__tel">Телефон:<span>${offer[3]}</span></div>
                        <div class="info__email">Емайл:<span>${offer[4]}</span></div>
                        <div class="info__addres">Адрес:<span>${offer[5]}</span></div>
                        <div class="info__post-index">Индекс:<span>${offer[6]}</span></div>
                        <div class="info__accname">Логин:<span>${offer[8]}</span></div>
                        <button id="offerInfoGoods"  class="info__goods">
                        товары
                        </button>
                    </div>
                    <select class="offer__change-status">
                        <option value="current">${offer[10]}</option>
                        <option value="processing">в обработке</option>
                        <option value="send">отправлен</option>
                        <option value="finish">исполнен</option>
                        <option value="rejected">отказано</option>
                    </select>
                    <button id="offerStatusSend" class="offer__btn-change">
                        потвердить
                    </button>
                </div>`
                offersSend.insertAdjacentHTML('beforeend', offerHTML)
            }
        })
        // send end

        // finish
        usersOffers.forEach(function(offer){
            if(offer[10] == "finish"){
                    const offerHTML =  `<div class="offer__processing offer_admin" id="${offer[0] + 'offer'}">
                    <div class="offer__id">Номер заказа:<span>${offer[0]}</span></div>
                    <div class="offer__info">
                        <div class="info__name">Имя:<span>${offer[1]}</span></div>
                        <div class="info__family">Фамилия:<span>${offer[2]}</span></div>
                        <div class="info__tel">Телефон:<span>${offer[3]}</span></div>
                        <div class="info__email">Емайл:<span>${offer[4]}</span></div>
                        <div class="info__addres">Адрес:<span>${offer[5]}</span></div>
                        <div class="info__post-index">Индекс:<span>${offer[6]}</span></div>
                        <div class="info__accname">Логин:<span>${offer[8]}</span></div>
                        <button id="offerInfoGoods"  class="info__goods">
                        товары
                        </button>
                    </div>
                </div>`
                offersReady.insertAdjacentHTML('beforeend', offerHTML)
            }
        })
        // finish end
        // rejected
        usersOffers.forEach(function(offer){
            if(offer[10] == "rejected"){
                    const offerHTML =  `<div class="offer__processing offer_admin" id="${offer[0] + 'offer'}">
                    <div class="offer__id">Номер заказа:<span>${offer[0]}</span></div>
                    <div class="offer__info">
                        <div class="info__name">Имя:<span>${offer[1]}</span></div>
                        <div class="info__family">Фамилия:<span>${offer[2]}</span></div>
                        <div class="info__tel">Телефон:<span>${offer[3]}</span></div>
                        <div class="info__email">Емайл:<span>${offer[4]}</span></div>
                        <div class="info__addres">Адрес:<span>${offer[5]}</span></div>
                        <div class="info__post-index">Индекс:<span>${offer[6]}</span></div>
                        <div class="info__accname">Логин:<span>${offer[8]}</span></div>
                        <button id="offerInfoGoods"  class="info__goods">
                        товары
                        </button>
                    </div>
                </div>`
                offersRejected.insertAdjacentHTML('beforeend', offerHTML)
            }
        })
        // rejected end


        offersModule.addEventListener('click', function(e){
            
            if(e.target.id === 'offerInfoGoods'){
                let offerId = e.target.parentNode.parentNode.id.replace(/[^0-9]/g,"")
                
                renderPopUpGoods(offerId)
             
            }
            if(e.target.id === 'offerStatusSend'){
                let getOfferId = e.target.parentNode.id.replace(/[^0-9]/g,"");
                let getStatus = e.target.parentNode.querySelector('.offer__change-status').value
               
                changeOfferStatus(getOfferId, getStatus)
            }
            if(e.target.id === 'searchOfferBtn'){
                let getValueSelect = document.querySelector('#searchSelect').value
                let getValueInput = document.querySelector('#searchInput').value
                searchOffer(getValueSelect, getValueInput)
            }
        })
        function renderPopUpGoods (offerId){
            popUpProductPlace.innerHTML = ""
            let userGoodsArr = [];
            let productArray = asyncProductArr;
            for(let i = 0; i < usersOffers.length; i++){
                if(usersOffers[i][0] == offerId){
                    userGoodsArr = JSON.parse(usersOffers[i][7]);
                }
            }
            console.log(productArray)
            
            
            userGoodsArr.forEach(function(item){
                console.log(item)
                const userGoodsPopup = `<div class="popUp_product">
                <div class="goods__id">id товара: <span>${item[0]}</span></div>
                <div class="goods__quntility">шт:<span>${item[1]}</span> </div>
                </div>`
                popUpProductPlace.insertAdjacentHTML('beforeend', userGoodsPopup)

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
        function changeOfferStatus(offerId, status){
           (offerId )
            console.log(status )
            $.ajax({
                url: '../php/editofferstatus.php',
                type: 'POST',
                dataType: 'json',
                data:{
                   offerId: offerId,
                   status: status
                },
                success (data){
                    console.log(data)
                }
            });
        }

        function searchOffer(valueSelect, valueInput){
            searchOfferContainer.innerHTML = "";
            console.log(valueSelect)
            let select;
            switch (valueSelect) {
                case "login":
                    select =  8;
                  break;
                case 'offerid':
                  select =  0;
                  break;
              }
              console.log(select)
            console.log(valueInput)
            usersOffers.forEach(function(offer){
                console.log(offer)
                if(offer[select] == valueInput){
                    const offerHTML =  `<div class="offer__processing offer_admin" id="${offer[0] + 'offer'}">
                    <div class="offer__id">Номер заказа:<span>${offer[0]}</span></div>
                    <div class="offer__info">
                        <div class="info__name">Имя:<span>${offer[1]}</span></div>
                        <div class="info__family">Фамилия:<span>${offer[2]}</span></div>
                        <div class="info__tel">Телефон:<span>${offer[3]}</span></div>
                        <div class="info__email">Емайл:<span>${offer[4]}</span></div>
                        <div class="info__addres">Адрес:<span>${offer[5]}</span></div>
                        <div class="info__post-index">Индекс:<span>${offer[6]}</span></div>
                        <div class="info__accname">Логин:<span>${offer[8]}</span></div>
                        <button id="offerInfoGoods"  class="info__goods">
                        товары
                        </button>
                    </div>
                    <select class="offer__change-status">
                        <option value="current">${offer[10]}</option>
                        <option value="processing">в обработке</option>
                        <option value="send">отправлен</option>
                        <option value="finish">исполнен</option>
                        <option value="rejected">отказано</option>
                    </select>
                    <button  id="offerStatusSend"  class="offer__btn-change">
                        потвердить
                    </button>
                </div>`
                   searchOfferContainer.insertAdjacentHTML('beforeend', offerHTML)
                }
            })

        }
        
    }
    

})



