<?php session_start();?>
 <?php
  

    if  ($_SESSION['user']){
        $userStatus = $_SESSION['user']['login'];
    }
    else{
        $userStatus = 'войти';
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
    <title>myoffer</title>
    <link rel="stylesheet" href="/style/myOffers.css">
</head>
<body>
    <div class="page">
        <header class="header">
            <div class="wrap">
                <div class="header__container">
                    <a href="/"class="header__logo">Лазерный центр РТ</a>
                    <div class="header__item">
                        <a  href="<?php if  ($_SESSION['user'])
                        {
                            echo "/page/myOffers.php";
                        }
                        else{
                            echo "/page/authpage.php";
                        }
                        ?>" class="item__signup">
                            <div class="signup__img"></div>
                            <div class="signup__text"><? echo $userStatus?></div>
                        </a>

                        <a href="/" class="item__tomain ">
                            <div class="tomain__img"></div>
                            <div class="tomain__text">домой</div>
                        </a>
                        

                        <?php
                        if  ($_SESSION['user']){
                            echo '<a  href="/php/logout.php" class="item__logout">
                            <div class="logout__img"></div>
                            <div class="logout__text">выйти</div>
                            
                        </a>';
                        }?> 
                        
                </div>
                </div>
            </div>
        </header>
        <main class="main">
            <div class="wrap">
                <div class="myoffers" >
                    <h2 class="myoffers__title">Мои заказы</h2>
                    <div id="myoffer" class="myoffers__offers_container" >
                        <!-- <div class="myoofers__offers">
                            <div class="offers__id sub">номер заказа: <span class="id__number value">45</span></div>
                            <div class="offer__about">
                                <div class="offer__card">
                                    <img src="/img/item1.jpg"  class="offers__img product-card__img" alt="">
                                    <div class="product__name ">lororor</div>
                                    <div class="product__cost sub">цена за 1 шт: <span class="cost value"> 13213</span> </div>
                                    <div class="product__quntility sub">шт:<span class="quntility value">4</span></div>
                                </div>
                            </div>
                            <div class="offers__cost_final sub">Итого:
                                 <span class="cost__final value">
                                     3030303
                                 </span>
                            </div>
                            <div class="offers__status sub">
                                стастус: <span class="status value">в оброботке</span>
                            </div>
                        </div>

                        <div class="myoofers__offers">
                            <div class="offers__id sub">номер заказа: <span class="id__number value">45</span></div>
                            <div class="offer__about">
                                <div class="offer__card">
                                    <img src="/img/item1.jpg"  class="offers__img product-card__img" alt="">
                                    <div class="product__name ">lororor</div>
                                    <div class="product__cost sub">цена за 1 шт: <span class="cost value"> 13213</span> </div>
                                    <div class="product__quntility sub">шт:<span class="quntility value">4</span></div>
                                </div>
                                <div class="offer__card">
                                    <img src="/img/item1.jpg"  class="offers__img product-card__img" alt="">
                                    <div class="product__name ">lororor</div>
                                    <div class="product__cost sub">цена за 1 шт: <span class="cost value"> 13213</span> </div>
                                    <div class="product__quntility sub">шт:<span class="quntility value">4</span></div>
                                </div>
                                <div class="offer__card">
                                    <img src="/img/item1.jpg"  class="offers__img product-card__img" alt="">
                                    <div class="product__name ">lororor</div>
                                    <div class="product__cost sub">цена за 1 шт: <span class="cost value"> 13213</span> </div>
                                    <div class="product__quntility sub">шт:<span class="quntility value">4</span></div>
                                </div>
                                <div class="offer__card">
                                    <img src="/img/item1.jpg"  class="offers__img product-card__img" alt="">
                                    <div class="product__name ">lororor</div>
                                    <div class="product__cost sub">цена за 1 шт: <span class="cost value"> 13213</span> </div>
                                    <div class="product__quntility sub">шт:<span class="quntility value">4</span></div>
                                </div>
                                <div class="offer__card">
                                    <img src="/img/item1.jpg"  class="offers__img product-card__img" alt="">
                                    <div class="product__name ">lororor</div>
                                    <div class="product__cost sub">цена за 1 шт: <span class="cost value"> 13213</span> </div>
                                    <div class="product__quntility sub">шт:<span class="quntility value">4</span></div>
                                </div>
                                <div class="offer__card">
                                    <img src="/img/item1.jpg"  class="offers__img product-card__img" alt="">
                                    <div class="product__name ">lororor</div>
                                    <div class="product__cost sub">цена за 1 шт: <span class="cost value"> 13213</span> </div>
                                    <div class="product__quntility sub">шт:<span class="quntility value">4</span></div>
                                </div>
                            </div>
                            <div class="offers__cost_final sub">Итого:
                                 <span class="cost__final value">
                                     3030303
                                 </span>
                            </div>
                            <div class="offers__status sub">
                                стастус: <span class="status value">в оброботке</span>
                            </div>
                        </div>        -->

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
        
    </div>
    <script src="/js/jquery-3.4.1.min.js"></script>
    <script src="/js/main.js"></script>
    <script src="/js/renderOffer.js"></script>

</body>
</html>