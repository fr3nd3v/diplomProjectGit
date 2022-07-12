<?php
    session_start();
    if  ($_SESSION['user']){
        header('Location: /');
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/style/style.css">
    <link rel="stylesheet" href="/style/formstyle.css">
    <title>reg</title>
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
                <form action="" class="form" id="formRegistration" >
                        
                        <div class="form__container">
                            <h2 class="form__title">
                                Регистрация
                            </h2>
                            <input id="email" name="email" type="email" placeholder="email" class="form__input _check">
                            <span class="form__span">* не менее 5 и не более 30 символов</span>
                            <input id="login"  name="login" type="text" placeholder="Логин" class="form__input _check">
                            <span class="form__span">* не менее 5 и не более 30 символов</span>
                            <input  id="password"  name="password"  type="password" placeholder="Пароль" class="form__input _check">
                            <input name="repassword"  type="password" placeholder="Повторите пароль" class="form__input _check">
                            <p class="form__text">
                                Ваша персональная информация будет использована исключительно в целях обработки и доставки заказа.
                            </p>
                            <div class="form__checkbox_container" ><input name="checkbox" class="form__checkbox _check _error" type="checkbox"><a target=»_blank» href="https://vivat-talent.com/soglasie/" class="form__link">согласен с условиями обработки данных</a></div>
                            <button class="form__btn gradient">
                                зарегестрироваться
                            </button>
                            <div class="message__reg"></div>
                        </div>
                    </div>
                </form>
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
    <script src="/js/validationFormReg.js"></script>
</body>

</html>
