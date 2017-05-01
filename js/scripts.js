$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var input = [meat, dairy, fats, carb, legumes, veggies];
    var meat = $("input#meat").val();
    var dairy = $("input#dairy").val();
    var fats = $("input#fats").val();
    var carb = $("input#carbs").val();
    var legumes = $("input#legumes").val();
    var veggies = $("input#veggies").val();
    // console.log(input)
    var groceryList = [];
    input.forEach(function(grocery) {
      // console.log(["input#" + blank, "." + blank]);
    var userInput = $("input#" + blank).val();
    $("." + blank).text(userInput);
    });
    $("#story").show();
  var favorites = [meat, dairy, fats, carb, legumes, veggies];
  groceryList.push(favorites[5], favorites[4], favorites[3], favorites[2], favorites[1], favorites[0])
  $("ul").prepend("<li>" + favorites[0] + "</li>");
  $("ul").prepend("<li>" + favorites[1] + "</li>");
  $("ul").prepend("<li>" + favorites[2] + "</li>");
  $("ul").prepend("<li>" + favorites[3] + "</li>");
  $("ul").prepend("<li>" + favorites[4] + "</li>");
  $("ul").prepend("<li>" + favorites[5] + "</li>");
    event.preventDefault();
  });
});
