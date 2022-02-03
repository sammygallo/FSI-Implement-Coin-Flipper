// TODO: Declare any global variables we need

var totalHeadFlips = 0;
var totalTailFlips = 0;
var totalFlips = 0;

var headsPercentage = 0;
var tailsPercentage = 0;

var coinImage = document.getElementById("coin-image");
var flipButton = document.getElementById("flip");
var clearButton = document.getElementById("clear");

var statusMessage = document.getElementById("status-message");
var numberOfHeadsText = document.getElementById("heads");
var percentageOfHeadsText = document.getElementById("heads-percent");
var numberOfTailsText = document.getElementById("tails");
var percentageOfTailsText = document.getElementById("tails-percent");

    // TODO: Add event listener and handler for flip and clear buttons
flipButton.addEventListener('click', function() {
    if (Math.round(Math.random()) == 1) {
        totalHeadFlips ++
        numberOfHeadsText.textContent = totalHeadFlips
        statusMessage.textContent = "You rolled heads"
        coinImage.setAttribute("src","assets/images/penny-heads.jpg")

    }
    else {
        totalTailFlips ++
        numberOfTailsText.textContent = totalTailFlips
        statusMessage.textContent = "You rolled tails"
        coinImage.setAttribute("src","assets/images/penny-tails.jpg")
    }
    totalFlips = totalHeadFlips + totalTailFlips
    headsPercentage = Math.round((totalHeadFlips / totalFlips) * 100)
    percentageOfHeadsText.textContent = headsPercentage + "%"
    tailsPercentage = Math.round((totalTailFlips / totalFlips) * 100)
    percentageOfTailsText.textContent = tailsPercentage + "%"
})

clearButton.addEventListener('click', function() {
    totalHeadFlips = 0
    totalTailFlips = 0
    totalFlips = 0
    numberOfHeadsText.textContent = totalHeadFlips
    percentageOfHeadsText.textContent = "0%"
    numberOfTailsText.textContent = totalTailFlips
    percentageOfTailsText.textContent = "0%"
    statusMessage.textContent = "Let's Get Rolling!"
})

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)