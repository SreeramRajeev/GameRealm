function showTransition(event) {
    event.preventDefault(); // Prevent the default anchor behavior
  
    // Show the transition overlay
    document.getElementById("transition-overlay").style.display = "block";
  
    // Delay navigating to the destination page
    setTimeout(function() {
      window.location.href = event.target.href;
    }, 1000); // Adjust the delay as needed
  
    return false;
  }
  
  var links = document.getElementsByClassName("transition-link");
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", showTransition);
  }