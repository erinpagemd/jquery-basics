$(document).ready(initialize);

function initialize(){
  $('#addText').click(addText);
  $('#changeColor').click(changeColor);
  $('#addSum').click(addSum);
}

//add entered text to "a" div
function addText(event){
  event.preventDefault();
  $('#a').text(getValue(event));
  $('#word').val(" ");
}

//use entered text to change css color property of "b" div
function changeColor(event){
  event.preventDefault();
  $('#b').css('background-color', getValue(event));
  $('#rawColor').val(" ");
}

//convert 2 entered number separated by a + into a sum and append to "c" div
function addSum(event){
  event.preventDefault();
  //get the value of the input with id numbers
  var numbers = getValue(event);
  //turn numbers into an array
  numbers = numbers.split('+').map(Number);

  var x = numbers[0];
  var y = numbers[1];

  var answer = x + y;
  $('#c').text(answer);

  $('#numbers').val(" ");
}

function getValue(event){
  //get the id of the input that is the sibling of the event target
  var inputID = $(event.target).siblings('input').attr('id');
  //use the id to get the value of input field
  var $inputContent = $('#' + inputID).val();
  //return the id of the input field
  return ($inputContent);
}
