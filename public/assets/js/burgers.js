$(".change-mind").on("click", function(event) {
    var id = $(this).data("id");
    var  newDevoured = $(this).data("devoured");

    var newDevouredState = {
        devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function() {
        console.log("changed devoured to", newDevoured);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newburger = {
      burger_name: $("#").val().trim(),
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newQuote
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".update-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var updateBurger = {
      burger: $("#burger").val().trim(),
    };

    var id = $(this).data("id");

    // Send the POST request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: updatedBurger
    }).then(
      function() {
        console.log("updated burger");
        // Reload the page to get the updated list
        location.assign("/");
      }
    );
  });