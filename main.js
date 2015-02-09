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
}

//use entered text to change css color property of "b" div
function changeColor(event){
  event.preventDefault();
  $('#b').css('background-color', getValue(event));
}

//convert 2 entered number separated by a + into a sum and append to "c" div
function addSum(event){
  event.preventDefault();
  $('#c').text(addNumbers(getValue(event)));
}

//take a string, turn it into an array of 2 numbers, add the 2 numbers together
function addNumbers(string){
  var numbers = string.split('+').map(Number);
  var x = numbers[0];
  var y = numbers[1];
  var answer = x + y;
  return answer;
}

//gets the value of the input field that is the only input sibling of the event target
function getValue(event){
  //get the id of the input that is the sibling of the event target
  var $inputID = $(event.target).siblings('input').attr('id');
  //use the id to get the value of input field
  var $inputContent = $('#' + $inputID).val();
  //clear the input field
  $('#' + $inputID).val(" ");
  //return the id of the input field
  return $inputContent;
}
