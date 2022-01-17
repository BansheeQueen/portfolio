
//  navigation indicator movement
$($('.menu-item').get().reverse()).each(function(index) {
    $(this).attr('id', 'item-'+(index));
});

$('.menu-item').on('click', function() {
    $('.menu-item').each(function(index, item) {
        $(item).removeClass('active');
    })

    $(this).addClass('active');
})

// Mobile banner and nav
if($('.mobile-banner-title').length) {
    const mobileBannerContent = $('.banner-title').html();
    $('.mobile-banner-title').append(mobileBannerContent);    
}


if($('.mobile-menu .navigation').length) {
    const mobileNavContent = $('.nav-menu .navigation').html();
    $('.mobile-menu .navigation').append(mobileNavContent);    
}

$('.navbar-toggle').on('click', function() {
    $('.navbar-toggle').toggleClass('open');
    $('.mobile-menu').toggleClass('open');
});


// Parallax-js

  const parallax = document.querySelector('.parallax-scene');
  const parralaxInstance = new Parallax(parallax);

