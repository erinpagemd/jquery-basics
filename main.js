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
  $('#word').val(" ");
}

//use entered text to change css color property of "b" div
function changeColor(event){
  event.preventDefault();
  var color = $('#rawColor').val();
  $('#b').css('background-color', color);
  $('#rawColor').val(" ");
}

//convert 2 entered number separated by a + into a sum and append to "c" div
function addSum(event){
  event.preventDefault();
  var numbers = $('#numbers').val();
  numbers = numbers.split('+').map(Number);

  var x = numbers[0];
  var y = numbers[1];

  var answer = x + y;
  $('#c').text(answer);

  $('#numbers').val(" ");
}
