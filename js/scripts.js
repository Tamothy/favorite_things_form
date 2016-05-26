$(document).ready(function () {
  $("#blanks form").submit(function (event) {
    var nameInput = $("input#name").val();
    var foodInput = $("select#foods").val();
    var musicInput = $("input:radio[name=music]:checked").val();
    var colorInput = $("input#color").val();

    $(".name").text(nameInput);
    $(".food").text(foodInput);
    $(".music").text(musicInput);
    $(".color").text(colorInput);

    $("#colorLink").attr("href", "http://www.color-hex.com/color/" + colorInput.slice(1));

    $("#results").show();

    event.preventDefault();
  });

});
