// -    -   -   -   -  //
// JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log('Dress The Clown!')

document.onkeydown = checkKey

function checkKey(e) {
  if (e.keyCode == '38') {
    changeVertical(-1)
    //UP ARROW
  } else if (e.keyCode == '40') {
    changeVertical(1)
    //DOWN ARROW
  } else if (e.keyCode == '37') {
    changeHorizontal(-1)
    //LEFT ARROW
  } else if (e.keyCode == '39') {
    changeHorizontal(1)
    //RIGHT ARROW
  }
}

var mainIndex = 0

var headIndex = 0
var bodyIndex = 0
var feetIndex = 0

var head = document.getElementById('head')
var body = document.getElementById('body')
var feet = document.getElementById('feet')

function changeHorizontal(shift) {
  headIndex += shift

  if (headIndex < 0) headIndex = 5
  if (headIndex > 5) headIndex = 0

  head.src = './images/head' + headIndex + '.png'
}

function changeVertical(shift) {
  mainIndex += shift

  if (mainIndex < 0)
  mainIndex = 2
  if (mainIndex > 2)
  mainIndex = 0

  console.log(mainIndex)
}
