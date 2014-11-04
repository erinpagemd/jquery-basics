$(document).ready(initialize);

function initialize(){
  $('#action').click(doStuff);
  $('#change').click(otherStuff);
  $('#add').click(addStuff);
}

function doStuff(){
  var data = $('#data').val();
  $('#a').text(data);
}

function otherStuff(){
  var color = $('#raw').val();
  $('#b').css('background-color', color);

}

function addStuff(){
  var numbers = $('#numbers').val();
  numbers = numbers.split('+').map(Number);

  var x = numbers[0];
  var y = numbers[1];

  var answer = x + y;
  $('#c').text(answer);



}
