// Google Analytics Integration Script
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

// Replace with your Google Analytics Tracking ID
ga('create', '{{YOUR_ANALYTICS_TRACKING_ID}}', 'auto');

// Send pageview data
ga('send', 'pageview');

// Function to track events
function trackEvent(category, action, label, value) {
  ga('send', 'event', category, action, label, value);
}

// Example Usage:
// trackEvent('button', 'click', 'signup_button', 1);
