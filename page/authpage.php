<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/style/style.css">
    <link rel="stylesheet" href="/style/formstyle.css">
    <title>auth</title>
</head>
<body>
    <div class="page">
        <header class="header">
            <div class="wrap">
                <div class="header__container">
                    <a href="/"class="header__logo">Лазерный центр РТ</a>
              
                </div>
              
            </div>
        </header>
        <main class="main">
            <div class="wrap">
                <div class="wrap">
                    <form action="" class="form" id="formLogin">
                            
                            <div class="form__container">
                                <h2 class="form__title">
                                    авторизация
                                </h2>
                                <input id="emailOrLogin" name="email" type="text" placeholder="email или логин" class="form__input _check">
                                <input id="password"  name="password"  type="password" placeholder="Пароль" class="form__input _check">                   
                                <a href="/page/regpage.php" class="form__link form__link_reg">не зарегистрированы? нажмите что-бы заегистрироваться</a>
                               
                                <button class="form__btn gradient">
                                    авторизация
                                </button>
                                <div class="messageFromPhp">
                                    
                                </div>
                            </div>
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
    <script src="/js/validationFormLog.js"></script>
</body>
</html>