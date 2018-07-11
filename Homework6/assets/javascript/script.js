// Initial array of movies
var foodie = ["Donuts", "Pie", "Fried eggs", "Pasta", "Pizza", "Taco", "Stir-fry", "Ice cream", "Sandwhich", "Pho", "Clam chowder", "Burger","Grilled cheese", "Wonton", "Sushi", "Chicken wing", "Banana split", "Casserole", "Salmon", "Cookie", "Chips", "Muffin", "Candy", "Chocolate", "Soup", "Salad", "Steak"];

function displayFood() {
    $("#gifs").empty();

    var food = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + food + "&api_key=dc6zaTOxFJmzC&limit=10";

    // Creating an AJAX call
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var results = response.data;
        

        for (var i = 0; i < results.length; i++) {

            var foodDiv = $("<div>");
            foodDiv.addClass("divStyle");

            var p = $("<p>");
            p.html("Rating: " + results[i].rating);

            var foodImg = $("<img>");
            foodImg.attr("src", results[i].images.fixed_height_still.url);
            foodImg.attr("data-state", "still");
            // foodImg.addClass("gifMoving");

            foodDiv.append(foodImg);
            foodDiv.append(p);

            $("#gifs").append(foodDiv);
        }
    });
}

// Function for displaying food data
function renderButtons() {

    $("#buttons").empty();

    // Looping through the array of food
    for (var i = 0; i < foodie.length; i++) {

        // Then dynamicaly generating buttons for each food in the array
        var btn = $("<button>");
      
        btn.addClass("food-btn btnDesign");
        // Adding a data-attribute
        btn.attr("data-name", foodie[i]);
        // Providing the initial button text
        btn.text(foodie[i]);
        // Adding the button to the buttons-view div
        $("#buttons").append(btn);
    }

}

$("#addFood").on("click", function (event) {
    event.preventDefault();
    // This line grabs the input from the textbox
    var foodInput = $("#foodText").val().trim();
    console.log(foodInput)

    // Adding movie from the textbox to our array
    foodie.push(foodInput);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
    displayFood()
});

$(document).on("click", ".food-btn", displayFood);

// Calling the renderButtons function to display the intial buttons
renderButtons();

$(".divStyle").on("click", function() {
        
    var state = $(this).attr("data-state");

    if (state === "still") {
      $(this).attr("src", $(this).images.fixed_height.url);
      console.log($(this).images.fixed_height.url)
      $(this).attr("data-state", "animate");
    } else {
      $(this).attr("src", $(this).images.fixed_height_still.url);
      $(this).attr("data-state", "still");
    }
  });



