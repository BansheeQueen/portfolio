
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

// Parrot animation on click
$('.parrot-container').on('click', function() {
    $('.parrot-container').addClass('active');
    $('.monitor-container').addClass('active');
  })

  const parallax = document.querySelector('.monitor-container');
  const parralaxInstance = new Parallax(parallax);