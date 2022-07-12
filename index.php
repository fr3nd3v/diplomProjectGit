<?php session_start();?>

<?php  if  ($_SESSION['user']){
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
    <link rel="stylesheet" href="/style/formstyle.css">
    <link rel="stylesheet" href="/style/offerstyle.css">
    <title>main</title>
</head>
<body>
    <div class="page">
        <header class="header">
            <div class="wrap">
                <div class="header__container">
                    <a href=""class="header__logo">Лазерный центр РТ</a>
                    <div class="header__item">
                        
                        <a  href="<?php if  ($_SESSION['user'])
                        {
                            echo "/page/myoffers.php";
                        }
                        else{
                            echo "/page/authpage.php";
                        }
                        ?>" class="item__signup">
                            <div class="signup__img"></div>
                            <div class="signup__text"><? echo $userStatus?></div>
                        </a>
                         
                       
                       
                        <a  class="item__shop">
                            <div class="shop__place">
                                <div class="shop__img"></div>
                                <div class="shop__circle"><span class="shop__quantility">0</span></div>
                            </div>
                            <div class="shop__text">корзина</div>
                        </a>
                        <div class="item__tomain positionElJs">
                            <div class="tomain__img"></div>
                            <div class="tomain__text">домой</div>
                        </div>
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
                <div class="main__interface">
                    <div class="changer changer__phone">
                        <div class="changer__container">
                            <select class="form__input " name="" id="changerSelect">
                                <option value="all">все</option>
                                <option value="bracelets">браслеты</option>
                                <option value="amulets">амулеты</option>
                                <option value="earrings">сережки</option>
                                <option value="box">шкатулки</option>
                                <option value="art">картины</option>
                            </select>
                            <div class="changer__minmax">
                                <input min="0" value="" id="minCost" class="form__input changer__input" type="number" placeholder="от">
                                <input min="0" value="" id="maxCost" class="form__input changer__input"type="number" placeholder="до">
                            </div>
                            <button id="changeButton" class="changer__button form__btn gradient">Показать</button>
                        </div>
                    </div>
                    <div class="product">
                        <div class="product__grid">
                            <!-- <div class="product__card">
                                <div class="card__about">
                                    <img class="card__img" src="/img/item1.jpg" alt="">
                                    <div class="card__container">
                                        <div class="card__info">
                                            <div class="card__title">штукадрюка 1</div>

                                            <div class="card__cost">1333 <span>р</span></div>
                                        </div>
                                        <div class="card__buy gradient">buy</div>
                                    </div>
                                  
                                </div>
                            </div> -->
                        </div>
                    </div>
                </div>
                <div id="offer" class="offer__container positionElJs">
                    <div id="shop" class="offer offer__module">
                        <h2 class="offer__title">корзина</h2>
                        <!-- <div class="offer__product-card">
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
                        </div> -->
                    </div>
                    <form id="userOfferForm" class="offer__order">
                        <div class="offer__form offer__module">
                            <h2 class="offer__title">
                                   ваши данные
                            </h2>
                            <input id="name" placeholder="имя" type="text" class="form__input _check">
                            <input id="family" placeholder="фамилия" type="text" class="form__input _check">
                            <input id="tel" placeholder="телефон" type="text" class="form__input _check" >
                            <input id="email" placeholder="email" type="text" class="form__input _check">
                            <span class="form__span"  >введите город и улицу</span>
                            <input  id="adress" placeholder="адрес доставки" type="text" class="form__input _check" onkeydown="this.style.weight = ((this.value.length + 1) * 8) + 'px';">
                            <input id="postIndex" placeholder="индекс" type="text" class="form__input _check">         
                        
                        </div>
                        <div class="offer__to-order offer__module">
                            <div class="to-order__final-cost">
                                <div class="final-cost__text">
                                    Итого 
                                </div>
                                <div id="finalCost" class="final-cost">0
                                    <span>р</span>
                                </div>
                            </div>    
                            <div class="to-order__link">
                                <input name="checkbox" class="order__checkbox _check" type="checkbox">
                                <div class="link__text">
                                    Согласен с условиями <a href="#">Правил пользования торговой площадкой</a> и <a href="">правилами возврата</a>
                                </div>
                            </div>
                            <button class="order__button gradient">Заказать</button>
                        </div>
                        
                    </form>
                
            </div>
            
        </main>
        <section class="about-us">
            <div class="wrap">
                <h2 class="about-us__title">
                    О нас
                </h2>
                <div class="about-us__container">
                    <div class="about-us__text">
                        <p class="about-us__text">
                            Миссия компании: сделать услуги по профессиональной лазерной обработке доступнее для малого бизнеса и населения Татарстана.
                            Специализированный центр компетенции Республики Татарстан по лазерным технологиям.
                        </p>    
                        <p class="about-us__text">
                            За время нашей работы:
                            - более 10000 субъектов МСБ в НТС пользуются нашими услугами на постоянной основе;
                            - около 15000 жителей Татарстана ежегодно пользуются нашими услугами;
                            - в реальные производства было внедрено более 500 лазерных установок различного назначения;
                            - мы социально ориентированная компания - на нашей базе создан первый в России Центр молодежного инновационного творчества «Идея» (Программа Минэкономразвития РФ).
                        </p>
                        <p class="about-us__text"> 
                            По нашей инициативе, при поддержке Правительства РТ компетенция лазерные технологий включена в линейку Национальных чемпионатов сквозных рабочих профессий высокотехнологичных отраслей промышленности по методике WorldSkills (Письмо Минпромторга России от 14.08.2015 № НГ-29520\12). Мы партнер уровня Diamond Агентства развития профессий и навыков (Ворлдскиллс Россия), официальный партнер и спонсор 45 мирового чемпионата сквозных рабочих специальностей Worldskills Kazan 2019.
        
                            Партнер уровня Diamond Союза Worldskills.
                            ТОП-10 лучших образовательных практик в системе СПО.
                            ТОП-10 урок технологии глазами ребенка.
                        </p>
                    </div>
                    <div class="about-us__icons">
                        <img src="/img/icon1.JPG" alt="" class="icons">
                        <img src="/img/icon2.JPG" alt="" class="icons">
                        <img src="/img/icon3.JPG" alt="" class="icons">
                    </div>
                </div>
            </div>
        </section>
        <section class="geo__container">
            <div class="wrap">
                
                <div class="container">
                    <!-- <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A6e534d8f65a7579782c8ee866222ed171a62f5371c0d7577754fd1a4646b699e&amp;source=constructor" width="900" height="400" frameborder="0"></iframe> -->
                    
                    <!-- <div class="sendMessage">
                        <h3 class="message__title">Напишите нам</h3>
                        <input class="sendMessage__input" placeholder="ФИО" type="text">
                        <input class="sendMessage__input" placeholder="email" type="text">
                        <textarea name="" id="" class="sendMessage__text"></textarea>
                        <button class="sendMessage__btn gradient">отправить</button>
                    </div> -->
                </div>
            </div>
        </section>
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
    <script src="/js/jquery.maskedinput.min.js"></script>
    <script src="/js/basketToPhp.js"></script>
    <script src="/js/main.js"></script>
    <script src="/js/rendergoods.js"></script>
    <script src="/js/validationBasket.js"></script>
    
</body>
</html>