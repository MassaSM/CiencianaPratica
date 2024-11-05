/*Menu Mobile*/
$(".nav__mobile").click(function (e) {
  e.preventDefault();
  $('.nav__menu').toggleClass('active');
  
  if ($('.nav__menu').hasClass('active')) {
    $('.nav__mobile').html('<i class="fa-light fa-xmark"></i>');
  } else {
    $('.nav__mobile').html('<i class="fa-regular fa-bars"></i>');
  }  
});

/*Link Submenu*/
$(".link__submenu").click(function (e) {
  e.preventDefault();
  $(this).parent().toggleClass('active')
  $('.submenu').toggleClass('active');
});

/*Click Out*/
$(document).mouseup(function (e) {
  var container = $(".link__submenu");

  if (!container.is(e.target) && container.has(e.target).length === 0 && !$('.link__submenu').is(e.target)) {
    $('.submenu').removeClass('active');     
  }
});

// Verificar se os Campos estão vazios//
$('#email__contato').submit(function(e){
  e.preventDefault();
  
  $('.required').each(function(){        
        if($(this).val().length !== 0){
          $('#email__contato').find('.formulario_error_mensagem').css('display','none');
          $('#email__contato').find('.input').removeClass('formulario_error_box')
          $('#email__contato').find('.input__area').removeClass('formulario_error_box')
        }else{
            $('#email__contato').find('.formulario_error_mensagem').css('display','block');
            $('#email__contato').find('.input').addClass('formulario_error_box')
            $('#email__contato').find('.input__area').addClass('formulario_error_box')
        }
    })
});

$('#newsletter').submit(function(e){
  e.preventDefault();
  
  $('.required').each(function(){        
        if($(this).val().length !== 0){
          $('#newsletter').find('.formulario_error_mensagem').css('display','none');
          $('#newsletter').find('.input').removeClass('formulario_error_box')
        }else{
            $('#newsletter').find('.formulario_error_mensagem').css('display','block');
            $('#newsletter').find('.input').addClass('formulario_error_box')
        }
    })
});

/*Carrossel*/
var cursos = {
  init:function(){
      $('.container__cursos').slick({
          infinite: false,
          speed: 300,
          arrows: true,
          slidesToShow: 3,
          prevArrow: '<div class="slider-arrow slider-prev fal fa-chevron-left"></div>',
          nextArrow: '<div class="slider-arrow slider-next fal fa-chevron-right"></div>',
          dots: false,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            }
          ]
      });
  }
}

var exemplos = {
  init:function(){
      $('.container__exemplos__atualizacao').slick({
          infinite: false,
          speed: 300,
          arrows: true,
          slidesToShow: 3,
          prevArrow: '<div class="slider-arrow slider-prev fal fa-chevron-left"></div>',
          nextArrow: '<div class="slider-arrow slider-next fal fa-chevron-right"></div>',
          dots: false,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
              }
            }
          ]
      });
  }
}

var planos = {
  init:function(){
      $('.container__planos').slick({
          infinite: false,
          speed: 300,
          arrows: true,
          slidesToShow: 3,
          prevArrow: '<div class="slider-arrow slider-prev fal fa-chevron-left"></div>',
          nextArrow: '<div class="slider-arrow slider-next fal fa-chevron-right"></div>',
          dots: false,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
              }
            }
          ]
      });
  }
}

var publicoalvo = {
  init:function(){
      $('.container__publico__alvo').slick({
          infinite: false,
          speed: 300,
          arrows: true,
          slidesToShow: 4,
          prevArrow: '<div class="slider-arrow slider-prev fal fa-chevron-left"></div>',
          nextArrow: '<div class="slider-arrow slider-next fal fa-chevron-right"></div>',
          dots: false,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: true
              }
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
              }
            }
          ]
      });
  }
}

var depoimentos = {
  init:function(){
      $('.container__depoimentos').slick({
          infinite: false,
          speed: 300,
          arrows: true,
          slidesToShow: 2,
          prevArrow: '<div class="slider-arrow slider-prev fa-thin fa-arrow-left"></div>',
          nextArrow: '<div class="slider-arrow slider-next fa-thin fa-arrow-right"></div>',
          dots: false,
          slidesToScroll: 1,
          responsive: [
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                arrows: false
              }
            }
          ]
      });
  }
}



/*Hover*/
$(".container__areas__atuacao .item__atuacao, .container__planos .item__plano, .container__cursos .item__curso").hover(function () {
  $(".container__areas__atuacao .item__atuacao, .container__planos .item__plano, .container__cursos .item__curso").not($(this)).css({ "opacity": 0.6 });
},
  function () {
      $(".container__areas__atuacao .item__atuacao, .container__planos .item__plano, .container__cursos .item__curso").css({ "opacity": 1 });
  });

/*Checkbox*/
$('input:checkbox').change(function(){
  if($(this).prop("checked")) {
      $('.btn__continuar').prop("disabled", false)
  } else {
      $('.btn__continuar').prop("disabled", true)
  }
});