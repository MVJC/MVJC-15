// Set the time for the countdown (5 minutes from now)
var countDownDate = new Date().getTime() + 5 * 60 * 1000; // 5 minutes from now

// Update the countdown every 1 second
var x = setInterval(function() {

  // Get the current time
  var now = new Date().getTime();

  // Calculate the remaining time
  var distance = countDownDate - now;

  // Time calculations for minutes and seconds
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the elements
  document.getElementById("minutes").innerHTML = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerHTML = seconds < 10 ? "0" + seconds : seconds;

  // When the countdown is over, enable the button and set Razorpay link
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
    var registerButton = document.getElementById("razorpayLink");
    registerButton.disabled = false;
    registerButton.href = "https://pages.razorpay.com/pl_PNklbeSooTW89E/view"; // Add your Razorpay link here
    registerButton.innerHTML = "Proceed to Payment"; // You can change button text if needed
  }
}, 1000);
