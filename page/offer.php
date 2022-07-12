<?php
    session_start();
    if  ($_SESSION['user']){
        $userStatus = $_SESSION['user']['login'];
    }
    $productUser = $_SESSION['userGoods']['goods'];

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/style/style.css">
    <link rel="stylesheet" href="/style/offerstyle.css">
    <link rel="stylesheet" href="/style/formstyle.css">
 
    <title>offer</title>
</head>
<body>
    <div class="">
        <header class="header">
            <div class="wrap">
                <div class="header__container">
                    <a href="!#"class="header__logo">Лазерный центр РТ <? print_r ($productUser) ?><? echo $userStatus?></a>
                    <div class="header__item">
                        <a  href="/php/logout.php" class="item__signup">
                            <div class="signup__img"></div>
                            <div class="signup__text">выйти</div>
                        </a>
                </div>
                </div>
            </div>
        </header>
        <main class="main">
            <div class="wrap">
                <div class="offer__container">
                    <div class="offer offer__module">
                        <h2 class="offer__title">корзина</h2>
                        <div class="offer__product-card">
                            <div class="product__container_about">
                                <div class="product__about">
                                    <img src="/img/item2.jpg" alt="" class="product-card__img">
                                   <div class="product-card__name">штукадрюцка 1</div>
                                </div>
                                <div class="product__quantity">
                                    <button class="quantity__minus quantity__active"></button>
                                    <input class="quantity__number " value="1" >
                                    <button class="quantity__plus quantity__active"></button>
                                </div>
                            </div>
                            <div class="product-card__cost">1322 <span>р</span></div>
                            <div class="product-card__delete"></div>                          
                        </div>
                    </div>
                    <form class="offer__order">
                        <div class="offer__form offer__module">
                            <h2 class="offer__title">
                                   ваши данные
                            </h2>
                            <input placeholder="имя" type="text" class="form__input">
                            <input placeholder="фамилия" type="text" class="form__input">
                            <input placeholder="телефон" type="text" class="form__input">
                            <input placeholder="email" type="text" class="form__input">
                            <input placeholder="адрес доставки" type="text" class="form__input">
                            <input placeholder="индекс" type="text" class="form__input">         
                        
                        </div>
                        <div class="offer__to-order offer__module">
                            <div class="to-order__final-cost">
                                <div class="final-cost__text">
                                    Итого 
                                </div>
                                <div class="final-cost">123231
                                    <span>р</span>
                                </div>
                            </div>    
                            <div class="to-order__link">
                                <input class="order__checkbox" type="checkbox">
                                <div class="link__text">
                                    Согласен с условиями <a href="#">Правил пользования торговой площадкой</a> и <a href="">правилами возврата</a>
                                </div>
                            </div>
                            <button class="order__button gradient">Заказать</button>
                        </div>
                        
                    </form>
                    
                   
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
    <script src="/js/jquery-3.4.1.min.js"></script>
    <script src="/js/main.js"></script>
    <script src="/js/renderBasket.js"></script>

</body>
</html>