$(document).ready(function () {
  var Targetnumber = 0 // random play number
  var userTotal = 0; //user current count
  var wins = 0; // player wins
  var losses = 0; // player losses

  var bluegem = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  console.log("okb", bluegem);
  var greengem = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  console.log("okg", greengem);
  var pinkgem = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  console.log("okp", pinkgem);
  var purplegem = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
  console.log("okpr", purplegem);




  function setup() {

      //assign value to target number

      Targetnumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
      console.log("ok", Targetnumber);

      userTotal = 0;

      display()
  }

  function reset() {

      bluegem = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      console.log("okb", bluegem);
      greengem = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      console.log("okg", greengem);
      pinkgem = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      console.log("okp", pinkgem);
      purplegem = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
      console.log("okpr", purplegem);
  }

  function display() {
      $("#wins").html(wins);
      $("#losses").html(losses);
      $("#mainNumber").html(Targetnumber);
      $("#userTotal").html(userTotal);

  }

  function play() {

      $("#blue-gem").on("click", function () {
          userTotal = userTotal + bluegem
          $("#userTotal").html(userTotal);
          if (userTotal == Targetnumber) {
              Wongame();
          }
          else if (userTotal > Targetnumber) {
              Lostgame();
          }
      });

      $("#green-gem").on("click", function () {
          userTotal = userTotal + greengem
          $("#userTotal").html(userTotal);
          if (userTotal == Targetnumber) {
              Wongame();
          }
          else if (userTotal > Targetnumber) {
              Lostgame();
          }
      });

      $("#pink-gem").on("click", function () {
          userTotal = userTotal + pinkgem
          $("#userTotal").html(userTotal);
          if (userTotal == Targetnumber) {
              Wongame();
          }
          else if (userTotal > Targetnumber) {
              Lostgame();
          }
      });

      $("#purple-gem").on("click", function () {
          userTotal = userTotal + purplegem
          $("#userTotal").html(userTotal);
          if (userTotal == Targetnumber) {
              Wongame();
          }
          else if (userTotal > Targetnumber) {
              Lostgame();
          }
      });

  }

  function Wongame() {
      if (userTotal === Targetnumber) {
          alert("WINNER! WINNER! CHICKEN DINNER!");
          wins++;
          setup();
           reset();
      }
  }

  function Lostgame() {

      if (userTotal > Targetnumber) {
          alert("OOPS! MAYBE NEXT TIME")
          losses++;
          setup()
          reset();
      }


  }

  play()
  display()
  setup()
 
})