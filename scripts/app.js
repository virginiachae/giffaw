$(document).on("ready", function(){
  $.ajax({
    method: 'GET',
    url: 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC',
    dataType: 'json',
    success: onSuccess
  });

  function onSuccess(json) {
      for (var i = 0; i < json.data.length; i++) {
        var imgs = json.data[i].images.fixed_height.url
        var $newDiv = $("<div class='gifs'><img src='" + imgs + "' /></div>");
        $('div.gif-gallery').append($newDiv);
        // console.log(imgs)
      }
  };
  var $data = $("form").serialize();

  $('form').on('submit', function(event){
    event.preventDefault();
    $.ajax({
      method: 'GET',
      url: 'http://api.giphy.com/v1/gifs/search',
      dataType: 'json',
      data: $("form").serialize(),
      success: onSuccessSearch

    });

  });

function onSuccessSearch(json) {
  $('div.gifs').remove();
  for (var i = 0; i < json.data.length; i++) {
    var searchGifs = json.data[i].images.fixed_height.url
    var $newDiv = $("<div class='gifs'><img src='" + searchGifs + "' /></div>");
    $('div.gif-gallery').append($newDiv);
  }

};


});
