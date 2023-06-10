// ross off off specific item by clicking
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

// click on span to delete item
$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

// Add new item to list
$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $("ul").append(
      "<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>"
    );
  }
});

// toggle the input
$(".fa-plus").click(function () {
  $("input[type='text']").fadeToggle();
});
