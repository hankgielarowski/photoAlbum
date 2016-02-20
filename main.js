album1Str= "";
  img.forEach(function(el) {
  album1Str += "<div><a rel='cover' href=><img src='" + el.albumCover + "' /></a></div>";
});
  $('.photoalbums ').append(album1Str)



  $('img').css('width', '100%')
  $('ul').css('width','100%')



$('.photoalbums').on('click', 'a', function(event) {
  event.preventDefault();
  var selectedPage = $(this).attr('rel');
  var selectedPageClass = "." + selectedPage
  $(selectedPageClass).siblings().hide();
  $(selectedPageClass).show();
});
