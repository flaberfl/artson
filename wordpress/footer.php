<footer class="footer">
  <div class="button__up">
    <a href="#" class="button__up-box">
      <svg width="12" height="19" viewBox="0 0 12 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.53033 0.469669C6.23744 0.176777 5.76256 0.176777 5.46967 0.469669L0.696699 5.24264C0.403805 5.53553 0.403805 6.01041 0.696699 6.3033C0.989592 6.59619 1.46447 6.59619 1.75736 6.3033L6 2.06066L10.2426 6.3033C10.5355 6.59619 11.0104 6.59619 11.3033 6.3033C11.5962 6.01041 11.5962 5.53553 11.3033 5.24264L6.53033 0.469669ZM6.75 19L6.75 1L5.25 1L5.25 19L6.75 19Z" fill="white" />
      </svg>

    </a>
    <span>подняться вверх</span>
  </div>

  <div class="footer__container">
    <div class="footer__wrapper">
      <div class="contacts">

        <div class="contacts__body">
          <h2 class="contacts__title title-h2" data-watch anim-up-down delay10>Контакты</h2>
          <ul class="contacts__list">
            <li class="contacts__item" data-watch anim-up-down delay20>
              <p class="contacts__name">Звоните</p>
              <div class="contacts__value">
                <a href="tel:<?= CFS()->get('phone_num'); ?>"><?= CFS()->get('phone_num_link'); ?></a>
              </div>
            </li>
            <li class="contacts__item" data-watch anim-up-down delay30>
              <p class="contacts__name">Почта</p>
              <div class="contacts__value">
                <a href="mailto:<?= CFS()->get('menu_link-email'); ?>"><?= CFS()->get('menu_link-email'); ?></a>
              </div>
            </li>
            <li class="contacts__item" data-watch anim-up-down delay40>
              <p class="contacts__name">Адрес</p>
              <div class="contacts__value">
                <?= CFS()->get('adress'); ?>
              </div>
            </li>
            <li class="contacts__item" data-watch anim-up-down delay50>
              <p class="contacts__name">Работаем</p>
              <div class="contacts__value">
                <?= CFS()->get('time_period'); ?>
              </div>
            </li>
          </ul>

          <div class="contacts__social-list" data-watch anim-up-down>
            <a href="<?= CFS()->get('menu_link-wp'); ?>" target="_blank" class="contacts__link">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.25548 0.0188235C7.77448 0.160794 6.67296 0.474326 5.42588 1.10886C3.9486 1.86046 2.62297 3.04899 1.65639 4.48844C1.02005 5.43607 0.437597 6.82517 0.214074 7.92826C0.0459233 8.75784 0.0149739 9.07997 0.0149739 9.99997C0.0149739 10.9207 0.0460796 11.2437 0.214347 12.0717C0.410868 13.0387 0.901995 14.2922 1.41645 15.1398L1.59066 15.4268L0.80688 17.1521C0.328962 18.2041 0.0158727 18.9415 0.00457932 19.0417C-0.03993 19.4369 0.24557 19.8669 0.619425 19.9677C0.967645 20.0616 1.42434 19.9564 4.2103 19.1404L5.28079 18.8268L5.73432 19.0419C6.98105 19.6332 8.26729 19.943 9.68533 19.9937C11.9551 20.0747 14.1473 19.3778 16.0159 17.9812C16.5335 17.5943 17.486 16.662 17.8602 16.176C19.7985 13.6583 20.452 10.5715 19.6893 7.53584C19.4589 6.61874 18.9761 5.48325 18.4933 4.72297C17.7222 3.50875 16.6634 2.42603 15.4688 1.63018C14.9629 1.29316 13.8694 0.748495 13.3195 0.559618C12.5231 0.286074 11.7037 0.109392 10.8772 0.0330128C10.4791 -0.00376985 9.574 -0.0117049 9.25548 0.0188235ZM11.0413 1.8114C14.6599 2.27562 17.5205 5.04303 18.1522 8.69049C18.2498 9.2538 18.2505 10.7201 18.1535 11.296C17.5587 14.8276 14.8431 17.5543 11.3266 18.1509C10.8147 18.2378 9.65102 18.27 9.13825 18.2114C8.12192 18.0954 7.1934 17.8162 6.23627 17.3387C5.72307 17.0828 5.58821 17.0312 5.42791 17.03C5.30177 17.029 4.76219 17.1585 3.86126 17.4061C3.10542 17.6137 2.47948 17.7761 2.47029 17.7669C2.46107 17.7577 2.67346 17.2656 2.94223 16.6734C3.21097 16.0812 3.4418 15.5284 3.45512 15.445C3.49213 15.2135 3.41835 15.0137 3.13922 14.5896C2.21711 13.1885 1.75259 11.651 1.75259 9.99997C1.75259 5.81293 4.85347 2.32249 9.04055 1.79647C9.49315 1.73963 10.5428 1.74745 11.0413 1.8114ZM6.53959 5.46109C6.02627 5.59606 5.42065 6.25025 5.22096 6.88556C5.14636 7.12287 5.13346 7.24721 5.13702 7.69373C5.14062 8.14575 5.15632 8.27185 5.24648 8.57322C5.82951 10.5224 7.95142 12.7671 10.291 13.9097C10.9336 14.2235 11.4501 14.4129 11.9356 14.5127C13.2958 14.7923 14.3078 14.3946 14.8077 13.3841C14.956 13.0845 14.9801 13.0017 14.9787 12.7978C14.9765 12.4796 14.8637 12.2418 14.5812 11.9598C14.304 11.6831 13.9209 11.4556 13.4563 11.2917C13.0198 11.1378 12.5386 11.0908 12.3576 11.1844C12.1995 11.2662 11.9888 11.5045 11.7705 11.8483C11.3915 12.4453 11.318 12.4632 10.6232 12.1274C9.52664 11.5975 8.64841 10.8357 7.96361 9.82067C7.6796 9.39964 7.63857 9.28953 7.70621 9.13024C7.73587 9.06039 7.86022 8.88175 7.98253 8.73337C8.39003 8.2389 8.46545 7.99666 8.37444 7.47475C8.22942 6.64298 7.72192 5.81816 7.18726 5.54532C7.00356 5.45159 6.71739 5.41438 6.53959 5.46109Z" fill="white" />
            </a>
            <a href="<?= CFS()->get('menu_link-tg'); ?>" target="_blank" class="contacts__link">
              <svg width="21" height="17" viewBox="0 0 21 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.5856 0.0923476C18.1877 0.592133 0.960005 7.02475 0.706261 7.14167C-0.136912 7.53008 -0.235485 8.04312 0.46644 8.39014C0.534209 8.42363 1.70029 8.78605 3.05773 9.19554L5.52585 9.94003L11.1302 6.53267C14.2125 4.6586 16.7965 3.10423 16.8724 3.07856C17.0627 3.01405 17.2265 3.02008 17.303 3.09441C17.3565 3.14643 17.3587 3.17253 17.3162 3.24898C17.288 3.29955 15.2412 5.10621 12.7676 7.26375C10.294 9.42128 8.26352 11.2034 8.25534 11.2241C8.24721 11.2447 8.16355 12.3219 8.06941 13.6178L7.8983 15.974L8.08424 15.9496C8.18651 15.9362 8.34845 15.8849 8.44411 15.8356C8.53981 15.7863 9.18378 15.2193 9.87523 14.5757C10.5666 13.932 11.1563 13.3965 11.1856 13.3855C11.2148 13.3746 12.316 14.1327 13.6325 15.0701C14.949 16.0075 16.1293 16.8209 16.2554 16.8775C16.5861 17.026 16.9586 17.0407 17.2006 16.9149C17.4167 16.8025 17.628 16.5233 17.7168 16.2326C17.7512 16.12 18.5038 12.7401 19.3894 8.72155C20.8637 2.03089 20.9995 1.38313 21 1.03587C21.0005 0.707778 20.9864 0.629736 20.896 0.457047C20.8322 0.335294 20.7234 0.210987 20.6172 0.138334C20.3741 -0.0278084 19.9718 -0.045732 19.5856 0.0923476Z" fill="white" />
              </svg>
            </a>
            <a href="<?= CFS()->get('menu_link-vk'); ?>" target="_blank" class="contacts__link">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 1000 1000">
                <path fill="currentColor" d="M196.031.063C88.252.063.062 88.253.062 196.032V804.22c0 107.779 88.19 195.969 195.969 195.969h608.188c107.779 0 195.969-88.19 195.969-195.969V196.032c0-107.779-88.19-195.969-195.969-195.969zm112.188 225.656H505.5c40.972 0 72.094 1.499 93.219 4.719c21.125 3.059 40.968 9.616 59.406 19.594c19.953 10.749 34.941 25.224 44.813 43.156c9.87 18.038 14.875 38.771 14.875 62.344c0 27.244-6.798 51.461-20.5 72.719c-13.57 21.258-32.399 36.89-56.344 47v2.906c34.454 7.317 62.087 22.036 82.813 44.438c20.757 22.428 31.125 52.618 31.125 90.531c0 27.75-5.239 52.227-15.75 73.219c-10.507 20.992-24.577 38.29-42.375 52.125c-20.992 16.496-44.033 28.137-69.281 35.188c-25.089 7.024-56.959 10.531-95.75 10.531H308.22V225.72zM447.75 328.094v118.188h17.656c23.945 0 40.864-.246 50.469-.75c9.605-.504 19.601-3.077 29.844-7.813c11.121-5.241 18.953-12.518 23.156-21.75c4.23-9.339 6.406-20.123 6.406-32.281c0-9.072-2.308-18.31-6.938-27.781c-4.603-9.472-11.754-16.395-21.625-20.625c-9.206-4.097-20.091-6.257-32.781-6.656c-12.664-.4-31.482-.531-56.438-.531zm0 213.844v139.813h7.563c36.503 0 61.715-.275 75.656-.781c13.941-.504 28.303-3.815 42.75-10.094c12.824-5.507 22.031-13.577 27.938-24.219c5.88-10.616 8.813-22.658 8.813-36.094c0-17.294-3.418-30.731-10.469-40.469c-7.024-9.844-17.532-17.154-31.5-22.156c-8.461-3.326-20.248-5.128-35.094-5.5c-14.846-.372-34.799-.5-59.781-.5z" />
              </svg>
            </a>
          </div>
        </div>

      </div>
      <div class="footer__body" data-watch anim-up-down delay20>
        <div class="footer__items">
          <div class="footer__item footer__item_1">
            <img src="<?php bloginfo('template_url'); ?>/img/logo-black.svg" alt="Логотип" class="footer__logo">
            <div class="footer__developer" data-da=".footer__copyright, 680, 1">
              <span>Сайт <br> создан</span>
              <a href="#"><img src="<?php bloginfo('template_url'); ?>/img/develop-logo.svg" alt="Логотип разработчика"></a>
            </div>
          </div>

          <div class="footer__item footer__item_2 footer__item_links">
            <a href="" data-goto=".images" class="footer__link">О нас</a>
            <a href="" data-goto=".objects" class="footer__link">Объекты в работе</a>
            <a href="" data-goto=".types" class="footer__link">Цены</a>
            <a href="" data-goto=".discount" class="footer__link">Акции</a>
          </div>
          <div class="footer__item footer__item_3 footer__item_links">

            <span id="#section-hideen"><?= CFS()->get('checkbox'); ?></span>

            <a href="" data-goto=".warranty" class="footer__link">Гарантия</a>
            <a href="" data-popup="#interview-popup" class="footer__link">Вызвать замерщика</a>
            <a href="" data-goto=".contacts" class="footer__link">Контакты</a>
            <a href="" class="footer__link not-visible">Контакты</a>

          </div>
          <div class="footer__item footer__item_4 footer__item_tel">
            <img src="<?php bloginfo('template_url'); ?>/img/icons/tel.svg" alt="Иконка телефона">
            <div class="footer__tel">
              <span class="footer__time"><?= CFS()->get('time_period-small'); ?></span>
              <a href="tel:<?= CFS()->get('phone_num'); ?>"><?= CFS()->get('phone_num_link'); ?></a>
            </div>
          </div>

        </div>
      </div>

    </div>

    <div class="footer__copyright">
      <a href="#">Политика конфедициальности</a>
      <span>Все права защищены © 2024</span>
    </div>


  </div>
</footer>
</div>
<div id="quiz-popup" aria-hidden="true" class="quiz-popup popup">
  <div class="popup__wrapper quiz-popup__wrapper">
    <div class="popup__content quiz-popup__content">
      <button data-close type="button" class="popup__close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L22 22M22.8787 2L2.87868 22" stroke="black" stroke-width="3" />
        </svg>

      </button>
      <div class="popup__body quiz-popup__body">
        <?php echo do_shortcode('[contact-form-7 id="c82ae1d" title="Квиз Посчитать смету"]'); ?>

      </div>
    </div>
  </div>
</div>

<div id="interview-popup" aria-hidden="true" class="interview-popup popup">
  <div class="popup__wrapper">
    <div class="popup__content">
      <button data-close type="button" class="popup__close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L22 22M22.8787 2L2.87868 22" stroke="black" stroke-width="3" />
        </svg>

      </button>
      <div class="popup__body">


        <?php echo do_shortcode('[contact-form-7 id="c49338b" title="Записаться на встречу"]'); ?>


      </div>
    </div>
  </div>
</div>

<div id="old-fond-popup" aria-hidden="true" class="old-fond-popup popup">
  <div class="popup__wrapper">
    <div class="popup__content">
      <button data-close type="button" class="popup__close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L22 22M22.8787 2L2.87868 22" stroke="black" stroke-width="3" />
        </svg>

      </button>
      <div class="popup__body">

        <?php echo do_shortcode('[contact-form-7 id="6fae30a" title="Заказать ремонт  в старом фонде"]'); ?>


      </div>
    </div>
  </div>
</div>

<div id="get-contract-popup" aria-hidden="true" class="get-contract-popup popup">
  <div class="popup__wrapper">
    <div class="popup__content">
      <button data-close type="button" class="popup__close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 2L22 22M22.8787 2L2.87868 22" stroke="black" stroke-width="3" />
        </svg>

      </button>
      <div class="popup__body">

        <?php echo do_shortcode('[contact-form-7 id="7abf96d" title="Получить пример договора"]'); ?>

      </div>
    </div>
  </div>
</div>

////..............

<?php

$loop = CFS()->get('types_popups_new');

foreach ($loop as $row) {

?>


  <div id="types-works-popup-new" aria-hidden="true" class="types-works-popup types-works-popup_new popup popup_show1">
    <div class="popup__wrapper">
      <div class="popup__content">
        <button data-close type="button" class="popup__close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L22 22M22.8787 2L2.87868 22" stroke="black" stroke-width="3" />
          </svg>

        </button>
        <div class="popup__body">

          <h3 class="types-works-popup__title"><?= $row['types-name-1']; ?></h3>
          <div class="types-works-popup__wrapper">

            <div class="item-types__content">
              <ul class="item-types__list">

                <?php

                $loop2 = $row['types_loop_items-popup-1'];

                foreach ($loop2 as $row2) {

                ?>

                  <li class="item-types__item"> <?= $row2['types_item-popup_new-1']; ?></li>


                <?php
                }
                ?>

              </ul>
            </div>

            <div class="item-types__content">
              <ul class="item-types__list">

                <?php

                $loop2 = $row['types_loop_items-popup-2'];

                foreach ($loop2 as $row2) {

                ?>

                  <li class="item-types__item"> <?= $row2['types_item-popup_new-2']; ?></li>


                <?php
                }
                ?>

              </ul>
            </div>

          </div>

          <div class="types-works-popup__footer">
            <div class="types-works-popup__price">
              <div class="item-types__price-old"><?= $row['types_price-old-popup_new']; ?></div>
              <div class="item-types__price-new">
                <?= $row['types_price-new-popup_new']; ?>
              </div>
            </div>
            <a href="" data-close data-goto=".discount" class="item-types__button button types-works-popup__button">получить смету</a>
          </div>

        </div>
      </div>
    </div>
  </div>

<?php
}
?>




////..............

<?php

$loop = CFS()->get('types_popups_old');

foreach ($loop as $row) {

?>


  <div id="types-works-popup-old" aria-hidden="true" class="types-works-popup types-works-popup_old popup popup_show1">
    <div class="popup__wrapper">
      <div class="popup__content">
        <button data-close type="button" class="popup__close">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 2L22 22M22.8787 2L2.87868 22" stroke="black" stroke-width="3" />
          </svg>

        </button>
        <div class="popup__body">

          <h3 class="types-works-popup__title"><?= $row['types-name-2']; ?></h3>
          <div class="types-works-popup__wrapper">

            <div class="item-types__content">
              <ul class="item-types__list">

                <?php

                $loop2 = $row['types_loop_items-popup-11'];

                foreach ($loop2 as $row2) {

                ?>

                  <li class="item-types__item"> <?= $row2['types_item-popup_old-1']; ?></li>


                <?php
                }
                ?>

              </ul>
            </div>

            <div class="item-types__content">
              <ul class="item-types__list">

                <?php

                $loop2 = $row['types_loop_items-popup-22'];

                foreach ($loop2 as $row2) {

                ?>

                  <li class="item-types__item"> <?= $row2['types_item-popup_old-2']; ?></li>


                <?php
                }
                ?>

              </ul>
            </div>

          </div>

          <div class="types-works-popup__footer">
            <div class="types-works-popup__price">
              <div class="item-types__price-old"><?= $row['types_price-old-popup_old']; ?></div>
              <div class="item-types__price-new">
                <?= $row['types_price-new-popup_old']; ?>
              </div>
            </div>
            <a href="" data-close data-goto=".discount" class="item-types__button button types-works-popup__button">получить смету</a>
          </div>

        </div>
      </div>
    </div>
  </div>

<?php
}
?>


/////////////



<?php

$loop = CFS()->get('video_popups');

foreach ($loop as $row) {

?>

  <div id="video-popup" aria-hidden="true" class="video-popup popup">
    <div class="popup__wrapper">
      <div class="video-popup__content popup__content">
        <button data-close type="button" class="popup__close"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="31.1128" y="4.94971" width="37" height="7" rx="3" transform="rotate(135 31.1128 4.94971)" fill="#D9D9D9" />
            <rect width="37" height="7" rx="3" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 31.1128 26.1636)" fill="#D9D9D9" />
          </svg>
        </button>
        <div data-youtube-place class="popup__text">

        </div>
      </div>
    </div>
  </div>

<?php
}
?>


<span id="section-false">
  <?= CFS()->get('block_del'); ?>
</span>


<span id="block-false">
  <?= CFS()->get('block_del2'); ?>
</span>

<span id="block-video">
  <?= CFS()->get('block_del3'); ?>
</span>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const checkDel = document.getElementById('section-false');
    const result = checkDel.innerHTML;
    const sectionDel = document.getElementById('sec-map');

    const checkDel2 = document.getElementById('block-false');
    const result2 = checkDel2.innerHTML;
    const blockDelName = document.getElementById('sec-block-name');
    const blockDel = document.getElementById('sec-block');

    const checkVideo = document.getElementById('block-video');
    const result3 = checkVideo.innerHTML;
    const blockDelVideo = document.getElementById('sec-block-video');

    if (result == 0) {
      sectionDel.style.display = 'block';
    }
    if (result == 1) {
      sectionDel.style.display = 'none';
    }

    if (result2 == 0) {
      blockDelName.style.display = '';
      blockDel.style.display = '';
    }
    if (result2 == 1) {
      blockDelName.style.display = 'none';
      blockDel.style.display = 'none';
    }



    if (result3 == 0) {
      blockDelVideo.style.display = 'block';
    }
    if (result3 == 1) {
      blockDelVideo.style.display = 'none';
    }


  });
</script>



<script>
  document.addEventListener('wpcf7mailfailed', function(event) {

    location = '';
    // 	location.reload(true);

    setTimeout(() => {
      location = '';
    }, 3000);


  }, false);



  document.addEventListener('wpcf7mailsent', function(event) {
    location = '';
    // 	location.reload(true);



  }, false);
</script>


<script src="https://api-maps.yandex.ru/2.1/?apikey=e3e9c1e9-ed50-437e-8bac-fef79d59faf9&lang=ru_RU&_v=20240522023751"></script>

</body>
<?php wp_footer(); ?>
</body>

</html>