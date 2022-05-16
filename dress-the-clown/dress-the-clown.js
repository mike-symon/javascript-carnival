  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")


document.onkeydown = checkKey;

function checkKey(e) {

    if (e.keyCode == '38') {
      console.log("I pushed up")
    //UP ARROW   
    }
    if (e.keyCode == '40') {
      console.log("I pushed down")
      //DOWN ARROW   
    } 
    if (e.keyCode == '37') {
      console.log("I pushed left")
        //LEFT ARROW   
    }   
    if (e.keyCode == '39') {
      console.log("I pushed right")
      //RIGHT ARROW   
      } 
}
