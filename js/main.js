'use strict'

{


  // sp nav 表示
  $('#open_sp_nav_button').click( () => {
    $('#sp_nav').fadeIn();
  });

  // sp nav 非表示
  $('#close_sp_nav_button').click( () => {
    $('#sp_nav').fadeOut();
  });

  // スワイプスライドショー
  let mySwiper = new Swiper ('.swiper-container', {
    // 以下にオプションを設定
    loop: true, //最後に達したら先頭に戻る
    slidesPerView: 1, //いくつ画面に表示するか
  	spaceBetween: 60, // 要素と要素の幅
    centeredSlides : true, 
    speed: 800,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false, 
    },
    
    breakpoints: {
      // when window width is >= 650px
      650: {
        slidesPerView: 2,
        spaceBetween: 60,
      }
    }
  })

  // マウスホバーで画像をscaleupする
  $('.swiper-slide').mouseover(function() {
    $(this).find('.case_img').addClass('scaleup');
  });
  
  $('.swiper-slide').mouseleave(function() {
    $(this).find('.case_img').removeClass('scaleup');
  });

  // FAQクリックで表示非表示
  $('.faq-item').click(function() {

    // Answer 表示非表示
    $(this).children('dd.faq-answer').toggleClass('open-answer');

    // 表示非表示の矢印回転用class
    $(this).toggleClass('active');

    const h = $(this).find('.faq-answer-inner').innerHeight();

    if( $(this).find('.faq-answer').hasClass('open-answer') ) {
      $(this).find('.faq-answer').css('maxHeight', h);
    } else {
      $(this).find('.faq-answer').css('maxHeight', '0');
    }

    

  });




}


