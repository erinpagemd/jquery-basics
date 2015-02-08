$(document).ready(initialize);

function initialize(){
  $('#addText').click(addText);
  $('#change').click(otherStuff);
  $('#add').click(addStuff);
}

//add entered text to "a" div
function addText(event){
  event.preventDefault();
  var data = $('#data').val();
  $('#a').text(data);
}

function otherStuff(event){
  event.preventDefault();
  var color = $('#raw').val();
  $('#b').css('background-color', color);
}

function addStuff(event){
  event.preventDefault();
  var numbers = $('#numbers').val();
  numbers = numbers.split('+').map(Number);

  var x = numbers[0];
  var y = numbers[1];

  var answer = x + y;
  $('#c').text(answer);
}
