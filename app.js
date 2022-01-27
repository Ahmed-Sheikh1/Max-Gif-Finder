$(document).ready(function(){

const app ={}

app.key= 's0lT4sqfAj8ceSLOZyUNewY2KHul45G1';


app.getimages =  function(images){

  $.ajax({
    url: `http://api.giphy.com/v1/gifs/search`,
    method: 'GET',
    dataType: 'json',
    data: {
      api_key: app.key,
      q: images,
      format: 'json',
    },

  }).then(function(results){
    $('.results').empty();
    app.showimages(results.data);
  })

}



app.showimages = function (gifs){
  gifs.forEach(function(gif){
  const gifHtml = `<div class="gif-box">
  <div class="img-box">
    <img src="${gif.images.original_still.url}" alt="${gif.title}"
  </div>
  <p class="gif-title">${gif.title}</p>
</div>`;

$('.results').append(gifHtml)
  }

  )}



app.init = function() {
  $('form').on('submit', function (event) {
   event.preventDefault();
    const selection = $('input').val();
    app.getimages(selection);
  });
};

$(function () {
  app.init();
});






})