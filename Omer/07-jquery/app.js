$("#todo").on("keyup", function (e) {
  var code = e.keyCode ? e.keyCode : e.which;
  if (code == 13) {
    let i = document.querySelectorAll("number").length;
    i = i + 1;

    ulDiv.append(
      `<li> <span><i class="fa fa-trash"></i></span><number>${i} - </number>${$(
        this
      ).val()} </li>`
    );
    $(this).val("");
  }
});

$("ul").on("click", ".fa-trash", function () {
  $(this).parent().parent().remove();
});

$(".removeall").on("click", function () {
  $("ul").empty();
});