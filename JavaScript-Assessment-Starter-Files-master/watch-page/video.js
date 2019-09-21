//MAIN VID

// <iframe id="video-player" src="https://player.vimeo.com/video/190062231" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
//
// <div>
//     <div id="video-actions">
//         <p><span id="views-count">98.4k</span> views</p>
// <h3 id="video-title">Croissants | Flour and Stone</h3>
// <p id="video-description">There is no other way but to commit wholeheartedly to a relationship with a croissant. We have all found ourselves at the mercy of its allure. Here, in another epic film by the uber talented Nathan Rodger, our Erin divulges her personal romance with The Croissant.</p>

//CARD 1 to 6 VIDS
// <div id="playlist-wrapper">
//     <div id="card1" class="playlist-card active-card">
//         <img class="thumbnail" src="https://i.vimeocdn.com/video/600595198_390x220.webp" />
//         <h3 class="video-card-title">Croissants | Flour and Stone</h3>
//     </div>

$(document).ready(function() {

  $.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist', function(data, response) {

    console.log(data);
    //this is default for main video
    $('#video-player').attr('src', data[0].thumbnail);
    $('#video-title').html(data[0].title);
    loadCard(data);

  });


//dynamic load cards
  function loadCard(obj){

    var count = 0;
//this for loop gives me this error I can't understand why
// video.js:49 Uncaught TypeError: Cannot read property 'thumbnail' of undefined
//     at loadCard (video.js:49)
//     at Object.success (video.js:26)
//     at c (jquery-3.4.1.min.js:2)
//     at Object.fireWith [as resolveWith] (jquery-3.4.1.min.js:2)
//     at l (jquery-3.4.1.min.js:2)
//     at XMLHttpRequest.<anonymous> (jquery-3.4.1.min.js:2)
    for(var i = 0; obj.length; i++){
      count++;
      // console.log(obj[i].thumbnail); //returns undefined
      var cardImg = $('#card'+count).find('img');
      var cardH3 = $('#card'+count).find('h3');
      //error in obj[i].thumbnail
      $(cardImg).attr('src', obj[i].thumbnail)
      $(cardH3).html(obj[i].title)
    }
  }




}); //end JQUERY
