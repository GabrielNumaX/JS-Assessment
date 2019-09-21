// <img id="yellow-skin" src="./assets/skin/yellow.png" />
// <img id="green-skin" src="./assets/skin/green.png" />
// <img id="red-skin" src="./assets/skin/red.png" />
//PARA CARGAR LA CARA DE LO DE ARRIBA PARA ABAJO
// <div class="card right-card">
//     <div id="emoji">
//         <img id="skin" src="" />
//         <img id="eyes" src="" />
//         <img id="mouth" src="" />
//     </div>
// </div>
//CARD ARROW
// <i id="arrow-next" class="fas fa-chevron-right next-step show-eyes-card"></i>

$(document).ready(function() {

  $('#yellow-skin').on('click', function() {

    var skin = $(this).attr('src');

    $('#skin').attr('src', skin);

  }); //yellow skin

  $('#green-skin').on('click', function() {

    var skin = $(this).attr('src');

    $('#skin').attr('src', skin);

  }); //green skin

  $('#red-skin').on('click', function() {

    var skin = $(this).attr('src');

    $('#skin').attr('src', skin);

  }); //red skin

  //CAMBIAR ESTO
  // #select-skin-card {
  //     display: block;
  // }
  //
  // #select-eyes-card {
  //     display: none;
  // }

  $('#arrow-next').on('click', function() {

    $('#select-skin-card').css('display', 'none');

    $('#select-eyes-card').css('display', 'block');

  }); //face to eyes arrow


  // <i id="show-skin-card" class="fas fa-chevron-left previous-step"></i>
  // <i id="show-mouth-card" class="fas fa-chevron-right next-step"></i>

  $('#show-skin-card').on('click', function() {

    $('#select-eyes-card').css('display', 'none');

      $('#select-skin-card').css('display', 'block');

  }); //eyes BACK to face

  $('#show-mouth-card').on('click', function() {

    $('#select-eyes-card').css('display', 'none');

    $('#select-mouth-card').css('display', 'block');

  }); //eyes TO-> mouth

  //this is for the EYES
  // <div>
  //     <img id="eye-normal" src="./assets/eyes/normal.png" />
  //     <img id="eye-closed" src="./assets/eyes/closed.png" />
  //     <img id="eye-long" src="./assets/eyes/long.png" />
  // </div>
  // <div>
  //     <img id="eye-laughing" src="./assets/eyes/laughing.png" />
  //     <img id="eye-rolling" src="./assets/eyes/rolling.png" />
  //     <img id="eye-winking" src="./assets/eyes/winking.png" />
  // </div>

  $('#eye-normal').on('click', function() {

    var eyes = $(this).attr('src');

    $('#eyes').attr('src', eyes);

  }); //normal eyes

  $('#eye-closed').on('click', function() {

    var eyes = $(this).attr('src');

    $('#eyes').attr('src', eyes);

  }); //closed eyes

  $('#eye-long').on('click', function() {

    var eyes = $(this).attr('src');

    $('#eyes').attr('src', eyes);

  }); //long eyes

  $('#eye-laughing').on('click', function() {

    var eyes = $(this).attr('src');

    $('#eyes').attr('src', eyes);

  }); //laughing eyes

  $('#eye-rolling').on('click', function() {

    var eyes = $(this).attr('src');

    $('#eyes').attr('src', eyes);

  }); //rolling eyes

  $('#eye-winking').on('click', function() {

    var eyes = $(this).attr('src');

    $('#eyes').attr('src', eyes);

  }); //winking eyes


  $('#arrow-back').on('click', function() {

    $('#select-mouth-card').css('display', 'none');

    $('#select-eyes-card').css('display', 'block');

  }); //mouth BACK to eyes

  //this is for the MOUTH

  // <div>
  //     <img id="mouth-open" src="./assets/mouth/open.png" />
  //     <img id="mouth-smiling" src="./assets/mouth/smiling.png" />
  //     <img id="mouth-straight" src="./assets/mouth/straight.png" />
  // </div>
  // <div>
  //     <img id="mouth-sad" src="./assets/mouth/sad.png" />
  //     <img id="mouth-teeth" src="./assets/mouth/teeth.png" />
  // </div>

  $('#mouth-open').on('click', function() {

    var mouth = $(this).attr('src');

    $('#mouth').attr('src', mouth);

  }); //mouth open

  $('#mouth-smiling').on('click', function() {

    var mouth = $(this).attr('src');

    $('#mouth').attr('src', mouth);

  }); //mouth smiling

  $('#mouth-straight').on('click', function() {

    var mouth = $(this).attr('src');

    $('#mouth').attr('src', mouth);

  }); //mouth straight

  $('#mouth-sad').on('click', function() {

    var mouth = $(this).attr('src');

    $('#mouth').attr('src', mouth);

  }); //mouth sad

  $('#mouth-teeth').on('click', function() {

    var mouth = $(this).attr('src');

    $('#mouth').attr('src', mouth);

  }); //mouth teeth



}); //end JQUERY
