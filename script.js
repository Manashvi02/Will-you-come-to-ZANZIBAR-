// script.js

// Function to handle button click events
function selectOption(option) {
    // Check which option was clicked
    if (option === 'yes') {
        // Flash rainbow colors
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none'; // Hide the question
            displayCatHeart(); // Display the cat-heart.gif
        });
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['rgba(255, 0, 0, 1)', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback();
        }
    }, 2000); // Flash colors for 2 seconds
}

// Function to display the happytears.gif initially
function displayhappytears() {
    // Get the container where the image will be displayed
    var imageContainer = document.getElementById('image-container');
    // Create a new Image element for the cat
    var happytearsImage = new Image();
    // Set the source (file path) for the cat image
    happytearsImage.src = 'happytears.gif'; // Assuming the cat image is named "cat.gif"
    // Set alternative text for the image (for accessibility)
    happytearsImage.alt = 'happytears';
    // When the cat image is fully loaded, add it to the image container
    happytearsImage.onload = function() {
        imageContainer.appendChild(happytearsImage);
    };
}

function displayHappyDancing() {
    // Get the container where the image will be displayed
    const imageContainer = document.getElementById('image-container');

    // Clear previous content
    imageContainer.innerHTML = '';

    // Create a new image element
    const dancingImg = new Image();
    dancingImg.src = './happydancing.gif'; // Adjust path if needed
    dancingImg.alt = 'Happy Dancing';

    // Append image when loaded
    dancingImg.onload = function () {
        imageContainer.appendChild(dancingImg);

        // Hide the options container if it exists
        const options = document.getElementById('options');
        if (options) {
            options.style.display = 'none';
        }
    };

    // Handle error if image fails to load
    dancingImg.onerror = function () {
        console.error("Could not load 'happydancing.gif'");
        imageContainer.textContent = "Failed to load the dancing image.";
    };
}

// Display the happytears.gif initially
displayhappytears();