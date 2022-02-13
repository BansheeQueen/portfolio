
//  Navigation indicator movement
/*Setting each li ID number*/ 
$($('.menu-item').get().reverse()).each(function(index) {
    $(this).attr('id', 'item-'+(index));
});

/*Toggle li's active class */
$('.menu-item').on('click', function() {
    $('.menu-item').each(function(index, item) {
        $(item).removeClass('active');
    })

    $(this).addClass('active');
})

// Mobile banner and navigation
/*Copy top navigation HTML for mobile navigation and banner title for mobile logo*/ 
if($('.mobile-banner-title').length) {
    const mobileBannerContent = $('.banner-title').html();
    $('.mobile-banner-title').append(mobileBannerContent);    
}


if($('.mobile-menu .navigation').length) {
    const mobileNavContent = $('.nav-menu .navigation').html();
    $('.mobile-menu .navigation').append(mobileNavContent);    
}

/*Toggle button and navigation class toggling */
$('.navbar-toggle').on('click', function() {
    $('.navbar-toggle').toggleClass('open');
    $('.mobile-menu').toggleClass('open');
});


// Parallax-js

  const parallax = document.querySelector('.parallax-scene');
  const parralaxInstance = new Parallax(parallax);


// // Animations on scroll

// Change underline on scroll
const underlineWidth = (name) => {
    let scroll = 0;
    let precentage = 0;
    if($(window).scrollTop() + $(window).height() > $(name).offset().top) {
        scroll = $(window).scrollTop() + $(window).height()  - $(name).offset().top;
        precentage = scroll / $(name).height() * 100;
         $(name + ' .underline').css('width',  precentage + "%");
        }
}


// Event listeners for underline animations
$(window).on('scroll', function(){underlineWidth('.about')});
$(window).on('scroll', function(){underlineWidth('.skills')});
$(window).on('scroll', function(){underlineWidth('.portfolio')});

// Setting each skill own ID number
$($('.skill-container').get().reverse()).each(function(index) {
    $(this).attr('id', 'skill-'+(index));
});


// Fade in animations of sections content
$(window).on('scroll', function() {
    
    if($(window).scrollTop() + $(window).height() / 1.25 > $('.picture-container').offset().top) {
    $('.picture-container').css('transform', 'translate(0%, 0%)');
    $('.picture-container').css('opacity', 1);
    $('.picture-container .blob').css('transform', 'translate(0%, 0%)');
    }

    if($(window).scrollTop() + $(window).height()  < $('.picture-container').offset().top) {
        $('.picture-container').css('transform', 'translate(10%, 0%)');
        $('.picture-container').css('opacity', 0);
        $('.picture-container .blob').css('transform', 'translate(40%, 0%)');
        }

            
    if($(window).scrollTop() + $(window).height() / 2 > $('.skills-container').offset().top) {
        $('.skills-container').addClass('active')
        }
    
        if($(window).scrollTop() + $(window).height()  < $('.skills-container').offset().top) {
            $('.skills-container').removeClass('active')
            }
    

});


