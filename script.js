$(document).ready(function(){

  var play = "X";

//this shows whose turn it is
  $("#players").html(play);

//this sets the next player
  $(".box").click(function(){
    $(this).html(play);
    if(play == "X"){
      play = "O"
    }else {
      play = "X"
    }
  $("#players").html(play);
  checkWinner();
  });

//first we assign a variable to the index in the table and then grab its inner text
function checkWinner (){
  var square1 = $(".box").eq(0).html();
  var square2 = $(".box").eq(1).html();
  var square3 = $(".box").eq(2).html();
  var square4 = $(".box").eq(3).html();
  var square5 = $(".box").eq(4).html();
  var square6 = $(".box").eq(5).html();
  var square7 = $(".box").eq(6).html();
  var square8 = $(".box").eq(7).html();
  var square9 = $(".box").eq(8).html();

  if (
    (square1 === square2 && square2 === square3 && square1 != "") ||
 		(square4 === square5 && square5 === square6 && square4 != "") ||
 		(square7 === square8 && square8 === square9 && square7 != "") ||
 		(square1 === square4 && square4 === square7 && square1 != "") ||
 		(square2 === square5 && square5 === square8 && square2 != "") ||
 		(square3 === square6 && square6 === square9 && square3 != "") ||
 		(square1 === square5 && square5 === square9 && square1 != "") ||
 		(square3 === square5 && square5 === square7 && square3 != "")
  ){
    $("#players").append("<p>You Win!</p>");
    console.log("You Win!");
  }
}

//this allows for a player to reset the game
  $("#newGame").click(function(){
    $(".box").html("");
    $("p").remove();
  });
});






//   var player = 1;
//   var xTurn = "X";
//   var oTurn = "O";
//
//   // function clickButton(){
//       $("#btn").click(function(){
//         if(player == 1){
//         console.log("clicked")
//           $(this).html(xTurn);
//           player -= 1;
//         }
//         else {
//           $("#btn").click(function(){
//             $(this).html(oTurn)
//             player += 1;
//           })
//         }
//       })
//   // }
//
// });

//   var xTurn = "X";
//   var oTurn = "O";
//   var firstPlayer = xTurn;
//   var secondPlayer = oTurn;
//
//   var winningCombs = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8] [0,4,8], [2,4,6]];
//
//   function playGame(){
//
//   }
//   playGame()
//
//   $("#bx-1").click(function(){
//     $(this).html(xTurn || oTurn);
//     if ($("#bx-1").html == ""){
//
//     }
//
//   });
//
//   $("#bx-2").click(function(){
//     $(this).html(xTurn || oTurn);
//   });
//
//   $("#bx-3").click(function(){
//     $(this).html(xTurn || oTurn);
//   });
//
// });
// window.onload = start;
// var player = 1;
//
// function clickBtn(btn){
//   if (player == 1){
//     document.getElementById(btn).value = "X";
//     document.getElementById(btn).disabled = "disabled";
//     player -= 1;
//   } else {
//     document.getElementById(btn).value = "O";
//     document.getElementById(btn).disabled = "disabled";
//     player += 1;
//   }
// }
