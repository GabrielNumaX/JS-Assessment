$(document).ready(function() {



    $.get('http://5d76bf96515d1a0014085cf9.mockapi.io/quiz', function(data, status) {

      localStorage.setItem('quiz-ans', JSON.stringify(data));


    });

    var answers = JSON.parse(localStorage.getItem('quiz-ans'));

    $('#btn-submit').on('click', function() {

      if(!($('input').val(['1', '2', '3', '4']))){
        alert('missing')
      }

      var query = window.location.search;

      //?q1=1&q2=1&q3=1&q4=1&q5=1

      // query = query.split('=')
      //?q1 ,1&q2, 1&q3, 1&q4, 1&q5, 1
      // query = query.split('&')
      //?q1=1, q2=1, q3=1, q4=1, q5=1

      query = query.split('&')

      var subQuery = [];

      for(var i = 0; i < query.length; i++){

        subQuery.push(query[i].split('='));

      }

      var result = false;
      var correctCount = 0;
      var cI = 0;
      var cJ = 0;
      var question = '1';

        //es un array con OBJ index 0.id = '1', 0.answer = 3;
        //[['?q1', '1'], ['q2', '1'] ...]

      for(var i = 0; i < answers.length; i++){

        var q = subQuery[cI][cJ].includes(question);

        if(q == answers[i].id && subQuery[cI][cJ+1] == answers[i].answer){
          alert('result' + result);
          result = true;
          if(result){
            correctCount++;
          }
        }
        question = question.parseInt();
        question++;
        question = question.toString()
        cI++;
      }

      alert(correctCount);

      setTimeout(function(){
        $('#modal-wrapper').css('display', 'block');
        $('#result').html(correctCount+'/5');

      }, 7000);

    }); //submit btn

}); //end JQUERY
