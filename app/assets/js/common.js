$(document).ready(function () {

    // табулятор строка/плитка на странице категорий товаров
    $(document).on('click','.js--categories-list-type',function(){
        $('.categories-list-type').addClass('active');
        $('.categories-tile-type').removeClass('active');
        $(this).addClass('active');
        $('.js--categories-tile-type').removeClass('active');
    });
    $(document).on('click','.js--categories-tile-type',function(){
        $('.categories-tile-type').addClass('active');
        $('.categories-list-type').removeClass('active');
        $(this).addClass('active');
        $('.js--categories-list-type').removeClass('active');
    });

    // табулятор строка/плитка на странице каталога
    $(document).on('click','.js--catalog-list-type',function(){
        $('.catalog-list-type').addClass('active');
        $('.catalog-tile-type').removeClass('active');
        $(this).addClass('active');
        $('.js--catalog-tile-type').removeClass('active');
    });
    $(document).on('click','.js--catalog-tile-type',function(){
        $('.catalog-tile-type').addClass('active');
        $('.catalog-list-type').removeClass('active');
        $(this).addClass('active');
        $('.js--catalog-list-type').removeClass('active');
    });

    // раскрывашка в истории заказов

    $(document).on('click','.js--history-table-headline__detail',function(){
        $(this).toggleClass('active');
        $('.js--products-table-mobile').toggleClass('active');
    });

    // раскрывашка в моих косметологах

    $(document).on('click','.js--mycosmetologists-list__item-show-orders',function(){
        $(this).toggleClass('active');
        $('.js--history-wrapper').toggleClass('history-wrapper_hide');
    });

    // открытие модального окна по ссылкам в футере и его закрытие по крестику

    $(document).on('click','.js--modal-link',function(){
        $('.modal').addClass('active');
    });
    $(document).on('click','.js--modal__close',function(){
        $('.modal').removeClass('active');
    });

    // MMenu


    let $menu = $("#mobile-burger-menu").mmenu({
        "navbars": [
            {
                "position": "top",
                "content": [
                    `<div class="mobile-menu__header">
                    <div class="mobile-menu__header-top">
                        <a href="index.html" class="mobile-menu__header-top-logo">
                            <img src="assets/img/logo.png" alt="">
                        </a>
                        <a class="mobile-menu__header-close js--mobile-menu__header-close" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path><path d="M0 0h24v24H0z" fill="none"></path></svg>
                        </a>
                    </div>
                    <a href="profile.html" class="mobile-menu__header-bottom">
                        <div class="mobile-menu__header-bottom-img-wrapper">
                            <img src="assets/img/avatar.png" alt="">
                        </div>
                        <div class="mobile-menu__header-bottom-text-wrapper">
                            <span>Иван Иванов</span>
                            <span>Перейти в личный кабинет</span>
                        </div>
                    </a>
                </div>`
                ]
            }
        ],
        "extensions": [
            "position-front",
            "position-right",
            "fullscreen"
        ],
        "navbar": {
            "add": false
        }
    });

    // close modal button
    $(document).on('click','.js--mobile-menu__header-close',function(){
        $('.mm-menu').removeClass('mm-menu_opened');
        $('html').removeClass('mm-wrapper_blocking');
        $('html').removeClass('mm-wrapper_opened');
        $('html').removeClass('mm-wrapper_background');
        $('html').removeClass('mm-wrapper_opening');
    });


    let $icon = $(".js--burger-button");
    let API = $menu.data("mmenu");



    $icon.on("click", function () {

        API.open();

    });


    API.bind("opened", function () {

        setTimeout(function () {

            $icon.addClass("is-active");

        }, 10);

        $icon.on("click", function () {

            API.close();

        });

    });

    API.bind("closed", function () {

        setTimeout(function () {

            $icon.removeClass("is-active");

        }, 10);

        $icon.on("click", function () {

            API.open();

        });

    });

    // Слайдеры в товаре

    $('.js--product-main__sliders-projector').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        swipe: false,
        speed: 700,
        fade: true,
        asNavFor: '.js--product-main__sliders-nav',
        responsive: [
            {
                breakpoint: 661,
                settings: {
                    arrows: true,
                    swipe: true
                }
            }
        ]
    });

    $('.js--product-main__sliders-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.js--product-main__sliders-projector',
        dots: false,
        focusOnSelect: true,
        vertical: true
    });

}); 
