



album1Str= "";
  img.forEach(function(el) {
  album1Str += "<div><a rel='" + el.albumTitle +"' href='#'><img src='" + el.albumCover + "' /></a></div>";
});
  $('.photoalbums ').append(album1Str)



  $('img').css('width', '100%')
  $('ul').css('width','100%')



$('.photoalbums').on('click', 'a', function(event) {
  event.preventDefault();

  var selectedPage = $(this).attr('rel');
  var correctAlbum = img.filter(function (el) {
    return el.albumTitle === selectedPage;
  }).pop()

  var htmlStr = "";
  correctAlbum.photos.forEach(function(el) {
    htmlStr += "<div><a rel='" + el.photoName + "' href='#'><img src='" + el.photoFull + "' /></a></div>";
  })
  $('.photoalbums').html(htmlStr);
  console.log(correctAlbum);
});
