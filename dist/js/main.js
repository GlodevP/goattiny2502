$(function () {

	/*FORM*/
	$(document).ready(function () {

		//E-mail Ajax Send
		$("form").submit(function () { //Change
			var th = $(this);
			$.ajax({
				type: "POST",
				url: "http://goattiny.ru/mail.php", //Change
				data: th.serialize()
			}).done(function () {
				$('.overflow').fadeIn();
				setTimeout(function () {
					// Done Functions
					th.trigger("reset");
				}, 1000);
			});
			return false;
		});

	});

	/*PHONE MASK*/
	$(".ph").mask("+8 (999) 999-9999");

	/*SLIDER*/

	$('.slider').slick({
		dots: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 2000,
		responsive: [{
			breakpoint: 580,
			settings: {
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	$('.buy-slider').slick({
		dots: true,
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: true,
		centerMode: false,
		responsive: [{
				breakpoint: 1320,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					variableWidth: false,
					centerMode: false
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: false,
					centerMode: false
				}
			}
		]
	});


	$('.product-slider').slick({
		dots: false,
		slidesToShow: 4,
		slidesToScroll: 1,
		variableWidth: true,
		centerMode: false,
		responsive: [{
				breakpoint: 1320,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					variableWidth: false,
					centerMode: false
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: false,
					centerMode: false
				}
			}
		]
	});

	// reinit product-slider tab
	$('#slideApdate').click(() => {$('.product-slider').slick("setPosition")});

	/*TABS*/

	$('.tabs-nav a').click(function (e) {
		e.preventDefault();

		$(this).parent().find('a').removeClass('active');
		$(this).addClass('active');
		var tHref = $(this).attr('href');

		$(this).parent().parent().find('.tab').removeClass('active');
		$(tHref).addClass('active');
	});

	/*SINGLE-TABS*/

	/*TABS*/

	$('.single-tabs-nav a').click(function (e) {
		e.preventDefault();

		$(this).parent().find('a').removeClass('active');
		$(this).addClass('active');
		var tHref = $(this).attr('href');

		$('.single-tabs-block').removeClass('active');
		$(tHref).addClass('active');
	});


	/*CATALOG*/

	$('.stores-more').click(function (e) {
		e.preventDefault();
		$(this).parent().parent().find('.stores-all').css('display', 'block');
	});

	$('.stores-close').click(function (e) {
		e.preventDefault();
		$(this).parent().css('display', 'none');
	});


	/*SCROLL*/


	$(document).ready(function () {
		$(".scroll").on("click", function () {
			//отменяем стандартную обработку нажатия по ссылке


			//забираем идентификатор бока с атрибута href
			var id = $(this).attr('href'),

				//узнаем высоту от начала страницы до блока на который ссылается якорь
				top = $(id).offset().top;

			//анимируем переход на расстояние - top за 1500 мс
			$('body,html').animate({
				scrollTop: top
			}, 1500);
		});
	});


	/*MENU*/

	$('.m-menu').click(function () {
		$('.menu').slideToggle();
	});

	/*MODAL CLOSE*/

	$('.modal-close').click(function () {
		$('.overflow').fadeOut();
		$('.overflow2').fadeOut();
	});


	/*SINGLE SLIDER*/

	$('.slider-for').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: true,
		asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.slider-for',
		dots: false,
		centerMode: false,
		focusOnSelect: true,
		arrows: false,
		vertical: true,
		responsive: [{
				breakpoint: 767,
				settings: {
					vertical: false
				}
			},
			{
				breakpoint: 580,
				settings: {
					vertical: false,
					slidesToShow: 3
				}
			},
			{
				breakpoint: 420,
				settings: {
					vertical: false,
					slidesToShow: 2
				}
			}
		]
	});

	/*SCROLL TOP*/

	$(window).scroll(function () {
		if ($(this).scrollTop() > 400) {
			$('#scroller').fadeIn();
		} else {
			$('#scroller').fadeOut();
		}
	});
	$('#scroller').click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 600);
		return false;
	});


	$(document).mouseup(function (e) { // событие клика по веб-документу
		var div = $(".stores-all"); // тут указываем ID элемента
		if (!div.is(e.target) // если клик был не по нашему блоку
			&&
			div.has(e.target).length === 0) { // и не по его дочерним элементам
			div.hide(); // скрываем его
		}
	});



	/*COUNTER*/
	var target = $('#number');
	var targetPos = target.offset().top;
	var winHeight = $(window).height();
	var scrollToElem = targetPos - winHeight;
	$(window).scroll(function () {
		var winScrollTop = $(this).scrollTop();
		if (winScrollTop > scrollToElem) {
			var comma_separator_number_step = $.animateNumberberStepFactories.separator(' ');
			$(".count").each(function () {
				var tcount = $(this).data("count");
				$(this).animateNumber({
						number: tcount,
						numberStep: comma_separator_number_step
					},
					3000);
			});
		}
	});

	if ($.cookie('the_cookie')) {
		$('.overflow2').hide();
	} else {
		$('.overflow2').show();
	}
	$.cookie('the_cookie', 'the_value');



});
/*BENEFITS*/
$('.benefits-accardeon__title').click(function (e) {
	e.preventDefault;
	e.target.parentNode.classList.toggle('active');
});
$('.benefits-subaccardeon__title').click(function (e) {
	e.preventDefault;
	e.target.parentNode.classList.toggle('active');
});



// benfits-1 tabs


$('.benefits__block').each(function () {
	let ths = $(this);
	ths.find('.benefits-accardeon').not(':first').hide();
	ths.find('.tabs-nav__item').click(function () {
		ths.find('.tabs-nav__item').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.benefits-accardeon').hide().eq($(this).index()).fadeIn(100)
	}).eq(0).addClass('active');
});

// benfits-2 tabs

$('.benfits-2 > .benefits__block').each(function () {
	let ths = $(this);
	ths.find('.benefits-accardeon').not(':first').hide();
	ths.find('.tabs-nav__item').click(function () {
		ths.find('.tabs-nav__item').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.benefits-accardeon').hide().eq($(this).index()).fadeIn(100)
	}).eq(0).addClass('active');
});


// benefits-3 tabs
$('.benfits-3 > .benefits__block').each(function () {
	let ths = $(this);
	ths.find('.benefits-accardeon').not(':first').hide();
	ths.find('.tabs-nav__item').click(function () {
		ths.find('.tabs-nav__item').removeClass('active').eq($(this).index()).addClass('active');
		ths.find('.benefits-accardeon').hide().eq($(this).index()).fadeIn(100)
	}).eq(0).addClass('active');
});

const imageWrappers = document.querySelectorAll('.image-wrapper');

    imageWrappers.forEach(wrapper => {
        const img = wrapper.querySelector('img');
        const tooltip = wrapper.querySelector('.tooltip');

        wrapper.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.1)'; 
            tooltip.style.visibility = 'visible'; 
            tooltip.style.opacity = '1'; 
        });

        wrapper.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)'; 
            tooltip.style.visibility = 'hidden'; 
            tooltip.style.opacity = '0'; 
        });
    });

	let currentSlide = 0;

function moveSlide1(direction) {
    const slides = document.querySelector('.slides-facts');
    const totalSlides = document.querySelectorAll('.slide-facts').length;

    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    const offset = -currentSlide * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

// Другая страница с другими слайдами
let currentSlide2 = 0;

function moveSlide2(direction) {
    const slides = document.querySelector('.slides-facts2');
    const totalSlides = document.querySelectorAll('.slide-facts2').length;

    currentSlide2 += direction;
    if (currentSlide2 < 0) {
        currentSlide2 = totalSlides - 1;
    } else if (currentSlide2 >= totalSlides) {
        currentSlide2 = 0;
    }

    const offset = -currentSlide2 * 100;
    slides.style.transform = `translateX(${offset}%)`;
}

document.addEventListener("DOMContentLoaded", function() {
    function updateImagesForMobile() {
        if (window.innerWidth <= 780) { 
            const slides = document.querySelectorAll('.slide-facts img');
            slides.forEach(slide => {
                const mobileSrc = slide.getAttribute('data-mobile-src');
                if (mobileSrc) {
                    slide.src = mobileSrc;
                }
            });
        }
    }

    updateImagesForMobile();

    window.addEventListener('resize', updateImagesForMobile);
});
document.addEventListener("DOMContentLoaded", function() {
    function updateImagesForMobileSlider2() {
        if (window.innerWidth <= 768) { 
            const slides2 = document.querySelectorAll('.slide-facts2 img');
            slides2.forEach(slide => {
                const mobileSrc2 = slide.getAttribute('data-mobile-src');
                if (mobileSrc2) {
                    slide.src = mobileSrc2;
                }
            });
        }
    }

    updateImagesForMobileSlider2();

    window.addEventListener('resize', updateImagesForMobileSlider2);
});