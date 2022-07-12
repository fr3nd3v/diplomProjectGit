<?php
    session_start();
    if  ($_SESSION['user']['login'] != 'admin'){
        header('Location: /');
    }
    else{
        
    }
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/style/style.css">
    <link rel="stylesheet" href="/style/admin.css">
    <title>admin</title>
</head>
<body>
    <div class="page">
        <header class="header">
            <div class="wrap">
                <div class="header__container">
                    <a href="/"class="header__logo">Лазерный центр РТ</a>
                    <div class="header__item">
                        <a  href="../php/logout.php" class="item__signup">
                            <div class="signup__img"></div>
                            <div class="signup__text">выйти</div>
                        </a>
                    </div>
                </div>
            </div>
        </header>
        <main class="main">
            <div class="wrap">
                <div class="admin">
                    <div class="admin__module">
                        <h3 class="module__title">товары:
                        
                        </h3>
                        <div class="module__products_container">
                            
                        </div>
                    </div>
                    <div class="admin__module">
                        <div class="admin__module_container" >
                            <div class="module" id="editProducts">
                                <form class="module__form" action="../php/addProduct.php">
                                    <h3 class="module__title" id="addProducts">Добавить товар</h3>
                                    <input name="addName1" id="addName" placeholder="название товара"  type="text" class="admin__input">
                                    <input name="addImage" id="addImage" placeholder="ссылка на изображение"  type="text" class="admin__input">
                                    <input name="addCost" id="addCost" placeholder="цена"type="text" class="admin__input">
                                    <select name="addAtribute" class="admin__input " name="" id="addSelect">
                                        <option value="all">все</option>
                                        <option value="bracelets">браслеты</option>
                                        <option value="amulets">амулеты</option>
                                        <option value="earrings">сережки</option>
                                        <option value="box">шкатулки</option>
                                        <option value="art">картины</option>
                                    </select>
                                    <textarea name="addDesk" placeholder="описание товара" class="admin__input_desk" name="deckription" id="addDeckription" class="editDescription">
                                    </textarea>
                                    <button id="addProductBtn" class="admin__btn gradient">добавить</button>
                                    <div class="addMesage _msg"></div>
                                </form>
                                <form class="module__form" action="">
                                    <h3 class="module__title" id="editProducts">Редактировать товар</h3>
                                    <input readonly id="editIndex" placeholder="index товара"type="text" class="admin__input"> 
                                    <input id="editName" placeholder="новое название"type="text" class="admin__input">                                  
                                    <input id="editImage" placeholder="ссылка на изображение"type="text" class="admin__input">
                                    <input id="editCost" placeholder="новая цена"type="text" class="admin__input">
                                    <select class="admin__input " name="" id="editSelect">
                                        <option value="all">все</option>
                                        <option value="bracelets">браслеты</option>
                                        <option value="amulets">амулеты</option>
                                        <option value="earrings">сережки</option>
                                        <option value="box">шкатулки</option>
                                        <option value="art">картины</option>
                                    </select>
                                    <textarea placeholder="новое описание"class="admin__input_desk" name="deckription" id="editDeckription"  class="editDescription">
                                    </textarea>
                                    <button id="editProsuctBtn" class="admin__btn gradient">редактировать</button>
                                    <div class="editMesage _msg"></div>
                                </form>
                                <form class="module__form" action="">
                                    <input id="deleteId" placeholder="index товара"type="text" class="admin__input">  
                                    <h3 class="module__title" id="deleteProducts">Удалить товар</h3>
                                    <button id="deleteBtn" class="admin__btn gradient">удалить</button>
                                    <div class="deleteMessage _msg"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="offers" id="offersModule">
                                <div class="admin__module">
                                    <div class="admin__module_container" >
                                        <div class="module moduleSearch" id="editProducts">
                                            <h3 class="module__title">поиск заказа</h3>
                                            <select class="admin__input " name="" id="searchSelect">
                                                    <option value="login">login</option>
                                                    <option value="offerid">offer id</option>
                                                    
                                                </select>
                                                <input class="admin__input " type="text" id="searchInput">
                                                <button class="admin__btn gradient" id='searchOfferBtn'> найти заказ</button>
                                            <div class="module__products_container" id="searchOffer">
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="admin__module">
                                    <div class="admin__module_container" >
                                        <div class="module" id="">
                                            <h3 class="module__title">Заказы</h3>
                                            <div class="module__products_container" id="offersProcessing">
                                                <!-- <div class="offer__processing offer_admin">
                                                    <div class="offer__id">Ноиер заказа:<span>11</span></div>
                                                    <div class="offer__info">
                                                        <div class="info__name">Имя:<span>Ива</span></div>
                                                        <div class="info__family">Фамилия:<span>Ивава</span></div>
                                                        <div class="info__tel">Телефон:<span>+7968213256</span></div>
                                                        <div class="info__email">Емайл:<span>ывав@df</span></div>
                                                        <div class="info__addres">Адрес:<span>г. Городовой у. Уличная</span></div>
                                                        <div class="info__post-index">Индекс:<span>999-414</span></div>
                                                        <div class="info__accname">Логин:<span>kikik</span></div>
                                                        <button class="info__goods">
                                                        товары
                                                        </button>
                                                    </div>
                                                    <select class="offer__change-status">
                                                        <option value="processing">в обработке</option>
                                                        <option value="send">отправлен</option>
                                                        <option value="finish">исполнен</option>
                                                        <option value="rejected">отказано</option>
                                                    </select>
                                                    <button id="offerInfoGoods" class="offer__btn-change">
                                                        потвердить
                                                    </button>
                                                </div> -->
                                            </div>
                                        </div>    
                                    </div>
                               </div>  
                          
                                <div class="admin__module">
                                    <div class="admin__module_container" >
                                        <div class="module" id="editProducts">
                                            <h3 class="module__title">Отправленые</h3>
                                            <div class="module__products_container" id="offersSend">
                                                <div class="offer__send">
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="admin__module">
                                    <div class="admin__module_container" >
                                        <div class="module" id="">
                                            <h3 class="module__title">Исполненые</h3>
                                            <div class="module__products_container" id="offersReady">
                                                <div class="offer__finish ">
                                                        
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="admin__module">
                                    <div class="admin__module_container" >
                                        <div class="module" id="">
                                            <h3 class="module__title">отказаны</h3>
                                            <div class="module__products_container" id="offersRejected">
                                                <div class="offer__finish ">
                                                        
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>    
                        </div>
                    </div>
                 </div>
                </div>
            </div>
        </main>
        <footer class="footer">
            <div class="wrap">
                <div class="footer__grid">
                    <div class="footer__info">
                        <a href="#！" class="footer__link">договор</a>
                        <a href="#！" class="footer__link">гарантии</a>
                        
                    </div>
                    <div class="footer__pay">
                        <a href="#！" class="footer__link">доставка</a>
                        <a href="#！" class="footer__link">оплата</a>
                    </div>
                    <div class="footer__open">Адрес: 420107, Россия, Республика Татарстан,
                        г. Казань, ул. Петербургская, 50 (в здании Технопарка "Идея", корпус № 31)
                        Тел.: (843) 258-72-64</div>
                    <div class="footer__social-links">
                        <a href="#！"class="social-links__vk footer__link"></a>
                        <a href="#！" class="social-links__telegram footer__link"></a>
                        <a href="#！" class="social-links__pinterest footer__link"></a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
    <div class="popup__wrapper ">
        <div class="product__popup_close"></div>
        <div class="porduct__popup">
            
            
        </div>
    </div>
    <script src="/js/jquery-3.4.1.min.js"></script>
    <script src="/js/main.js"></script>
    <script src="/js/admin.js"></script>

</body>
</html>

