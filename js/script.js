$('.main-slider-wrap').slick({
  infinite: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false
});


$('.flex-img-fl-slider').slick({
  infinite: true,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  mobileFirst: true, 
  responsive: [
   {
      breakpoint: 1024,
      settings: "unslick"
   }
  ]
});

$(function () {
  if($.magnificPopup) {
  $('.pop-up-click').magnificPopup({
    type: 'inline',
    preloader: false,
    modal: true
  });
  $(document).on('click', '.pop-up-close', function (e) {
    e.preventDefault();
    $.magnificPopup.close();
  });
}
});




$('.minus').click( function () {
        let total = $(this).next();
        let amount = $(this).parent().find('input').attr('data-price')
        if (total.val() > 1) {
            total.val(+total.val() - 1);
            total.trigger('change')
        }
        $(this).parents('.shopping-card-row').find('.price-shop-wrap span b').text(total.val())
       // $(this).parents('.shopping-card-row').find('.price-shop-wrap strong').text(quantity * amount)
    });

    // Увеличиваем на 1
    $('.plus').click(function () {
        let total = $(this).prev();
        let amount = $(this).parent().find('input').attr('data-price')
        total.val(+total.val() + 1);
        total.trigger('change')
        $(this).parents('.shopping-card-row').find('.price-shop-wrap span b').text(total.val())
      //  $(this).parents('.shopping-card-row').find('.price-shop-wrap strong').text(quantity * amount)
    });

    $('.configuration-details').text()


    $('.configuration-details').click(function (){
      if ($(this).text() == 'See configuration details'){
        $(this).text('Hide configuration details')
      }
      else {
        $(this).text('See configuration details')
      }
      $(this).parents('.shopping-card-row-script').find('.sub-option-menu').slideToggle(200)
      return false
    });




    $('.sofi-img-row img').click(function(){
       src = $(this).attr('src')
       $('.main-sofi-row img').attr('src', src)
    });

    $('.gumb').click(function(){
      $('body').toggleClass('overflow_hidden')
      $('.header-bottom').toggleClass('active')
    });

    $('.screen1-block1-product-page .left').click(function(){
      $('.').toggleClass('active')
    });






    $('.middle-configurator').hide().eq(0).show() // сначала скрываем все страницы середины и оставляем открытой только первую

    $('.element-configurator').click(function() {
      let index = $(this).index() // сохранем в переменную порядковый номер элемента на который мы кликнули     
      $('.middle-configurator').hide().eq(index).show() // скрываем все открытые "средние страницы" и пр клике на element-configurator открываем соответствующую "среднюю" страницу по соответствующему порядковому номеру
    })


    $('.dots-click').click(function(){
      $(this).parents('.shopping-card-row').find('.btn-shopping-card-row').toggleClass('active')
    })





    $('.basket').click(function(e){
      e.preventDefault()
      $('.shopping-card-menu-wrap').toggleClass('active')

    })
      $('.top-shopping-card .close-btn').click(function(){
        $('.shopping-card-menu-wrap').removeClass('active')
      })
   




    $('.filters-row').click(function(){
      $('.screen1-block1-product-page .left').toggleClass('active')
    });





    $('.geo.mobile').click(function(e){
      e.preventDefault()
      $('.search-menu-wrap-mobile').show()
    });

    $('.close-location').click(function(e){
      e.preventDefault()
      $('.search-menu-wrap-mobile').hide()
    })




    $('.li-click').click(function(e){
      if($( window ).width() <= 1024){
        e.preventDefault()
        let id = $(this).data("id")
        $('#' + id).show()
      }
    })

    $('.close-btn').click(function(e){
      e.preventDefault()
      $('.menu-close-jq').hide()
    })


    $('.show-page a:first-of-type').addClass('opened')
    $('.show-page a').click(function(e){
      e.preventDefault()
      if($(this).parents('.show-page').hasClass('active')){
        $('.show-page a').removeClass('opened active')
        $(this).addClass('opened active')
      }
      $(this).parents('.show-page').toggleClass('active')
    })









   /* if($('.middle-configurator input[name=material]').is(':checked')) {
      $('.element-configurator').eq(2).find('.title-configurator img').show()
    } else {
      $('.element-configurator').eq(2).find('.title-configurator img').hide()
    }


    if($('.middle-configurator input[name=krzyzaki]').is(':checked')) {
      $('.element-configurator').eq(0).find('.title-configurator img').show()
    } else {
      $('.element-configurator').eq(0).find('.title-configurator img').hide()
    }

    if($('.middle-configurator input[name=wheels]').is(':checked')) {
      $('.element-configurator').eq(1).find('.title-configurator img').show()
    } else {
      $('.element-configurator').eq(1).find('.title-configurator img').hide()
    }
*/



    $('.middle-configurator input[type=checkbox]').change(function() { // change - это тоже самле, что и click только для input, form
      let index = $(this).parents('.middle-configurator').index()
      
      if($(this).parents('.middle-configurator').find('input').is(':checked')) {
        $('.element-configurator').eq(index).find('.title-configurator img').show()
      } else {
        $('.element-configurator').eq(index).find('.title-configurator img').hide()

      }
    })


    $('.configuration-elements .settings').click(function(e){
      e.preventDefault()
      $('.screen1-configurator .left').toggleClass('active')
    })


    //Quantity shop cart
    $('.quantity-input input').on('change input', function() {
      let quantity = $(this).val() 
      let amount = $(this).attr('data-price')
      $(this).parents('.shopping-card-row').find('.price-shop-wrap span b').text(quantity)
      $(this).parents('.shopping-card-row').find('.price-shop-wrap strong').text(quantity * amount)
    })



    //   let i, element_configurator, middle_configurator;


    //   middle_configurator = document.getElementsByClassName("middle-configurator");
    //   for (i = 0; i < middle_configurator.length; i++) {
    //       middle_configurator[i].style.display = "none";
    //   }
    // $('.element-configurator').click(function(evt){
      
    //   element_configurator = document.getElementsByClassName("element-configurator");
    //   for (i = 0; i < element_configurator.length; i++) {
    //       element_configurator[i].className = element_configurator[i].className.replace(" active", "");
    //   }

    //   // Show the current tab, and add an "active" class to the link that opened the tab
    //   element_configurator.style.display = "block";
    //   evt.currentTarget.className += " active";

    // })
  




