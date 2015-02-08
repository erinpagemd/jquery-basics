$(document).ready(initialize);

function initialize(){
  $('#addText').click(addText);
  $('#changeColor').click(changeColor);
  $('#addSum').click(addSum);
}

//add entered text to "a" div
function addText(event){
  event.preventDefault();
  var word = $('#word').val();
  $('#a').text(word);
}

//use entered text to change css color property of "b" div
function changeColor(event){
  event.preventDefault();
  var color = $('#rawColor').val();
  $('#b').css('background-color', color);
}

function addSum(event){
  event.preventDefault();
  var numbers = $('#numbers').val();
  numbers = numbers.split('+').map(Number);

  var x = numbers[0];
  var y = numbers[1];

  var answer = x + y;
  $('#c').text(answer);
}
