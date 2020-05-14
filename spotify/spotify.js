let playing = true;
function playPause(button){

    var x = $('#playPause');
    $(button).find('i').remove();
    if ($(button).text().trim() == 'Play') {
      $(button).html($('<i/>',{class:'fa fa-pause'})).append(' Pause');
      thumbnail.style.transform = "scale(1.15)"
      let songdetails = document.querySelectorAll('.songdetails')
      songdetails.style.color="black";
      x.fadeIn();
     }
     else {
       $(button).html($('<i/>',{class:'fa fa-play-circle fa-lg'})).append(' Play');
       thumbnail.style.transform = "scale(1)"
       x.fadeOut();
     }
}
