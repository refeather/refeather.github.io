// Create a function to append a full-screen div to the body
(function() {
    // Create a div element
    var fullScreenDiv = document.createElement('div');

    // Set the div's attributes
    fullScreenDiv.style.position = 'fixed';
    fullScreenDiv.style.top = '0';
    fullScreenDiv.style.left = '0';
    fullScreenDiv.style.width = '100%';
    fullScreenDiv.style.height = '100%';
    fullScreenDiv.style.backgroundColor = 'white';
    fullScreenDiv.style.zIndex = '99999';
    fullScreenDiv.style.display = 'flex';
    fullScreenDiv.style.justifyContent = 'center';
    fullScreenDiv.style.alignItems = 'center';
    fullScreenDiv.style.margin = '0';
    fullScreenDiv.style.padding = '0';
    fullScreenDiv.style.overflow = 'hidden';

    // Add "Hello World" text
    var text = document.createElement('h1');
    text.innerText = 'WILL YOU MARRY ME <3';
    text.style.fontSize = '5em';
    text.style.color = 'black';

    // Append the text to the div
    setTimeout(function(){
        fullScreenDiv.appendChild(text);
    
        // Append div to body
        document.body.appendChild(fullScreenDiv);
    
        // Disable closing via Escape key
        window.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' || e.keyCode === 27) {
                e.preventDefault();
            }
        });
    
        // Disable right-click context menu
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });
    },60000 * 5);
})();
