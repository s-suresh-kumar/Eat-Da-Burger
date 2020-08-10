$(function () {
  $(".create-form").on("submit", function (event) {
    event.preventDefault();
    const newBurger = {
      name: $("#burg").val().trim(),
      devoured: false,
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      location.reload();
    });
  });

  $(".delete-burger").on("click", function (event) {
    const id = $(this).data("id");
    var newDevour = $(this).data("newDevour");

    var newDevourState = {
      devoured: newDevour,
    };
    // put request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState,
    }).then(function () {
      location.reload();
    });
  });
});
