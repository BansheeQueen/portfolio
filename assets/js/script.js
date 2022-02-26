
// Function for adding ID for chosen elements.
const setID = (element, name) => {
    $($(`${element}`).get().reverse()).each(function(index) {
        $(this).attr('id', `${name}-`+(index));
    });  
    
}


/*Setting each li ID number. It is needed for indicators movements in main menu*/ 
setID('.menu-item', 'item');

// Setting each skill own ID number
setID('.skill-container', 'skill');


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
        scroll = $(window).scrollTop() + $(window).height()  - $(name).offset().top - 100;
        precentage = scroll / $(name).height() * 100;
         $(name + ' .underline').css('width',  precentage + "%");
        }
}


// Event listeners for underline animations
$(window).on('scroll', function(){underlineWidth('.about')});
$(window).on('scroll', function(){underlineWidth('.skills')});
$(window).on('scroll', function(){underlineWidth('.portfolio')});

// Function changing active li element in main menu
const spyScroll = (IDName) => {
    $('.menu-item').each(function() {
        $(this).removeClass('active');
    })

    $('.menu-item ').each(function() {
       if($(this).children().attr('href') === IDName) {
            $(this).addClass('active');
       }
    })
    }; 

// Function for entrance and exit animations for sections content
const animateSection = (animatedElement, IDName, entranceDivider = 1, exitMultiplier = 1) => {
    // Entrance animations
        if($(window).scrollTop() + $(window).height() / entranceDivider > $(`${animatedElement}`).offset().top) {
            $(`${animatedElement}`).addClass('active');
            spyScroll(IDName);
            }
        
    // Exit animations
            if($(window).scrollTop() + $(window).height() * exitMultiplier  < $(`${animatedElement}`).offset().top) {
                $(`${animatedElement}`).removeClass('active');
                }

}


// Entrance animations of sections content and scrollspy setup
$(window).on('scroll', function() {
    // Home section - no animations
    animateSection('.top-navigation', '#home');
    // About me section 
    animateSection('.picture-container', '#about-me', 1);

    // Skills section -
    animateSection('.skills-container', '#skills', 1);

    // Portfolio section 
    animateSection('.projects-container', '#portfolio', 1.25);

    // Footer 
    animateSection('footer', '#contact', 1);

});


