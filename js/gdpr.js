// GDPR Banner functionality
document.addEventListener('DOMContentLoaded', function() {
    const gdprBanner = document.getElementById('gdpr-banner');
    const acceptButton = document.getElementById('accept-cookies');
    const rejectButton = document.getElementById('reject-cookies');

    // Check if user has already made a choice
    if (!localStorage.getItem('gdprChoice')) {
        gdprBanner.classList.add('show');
    }

    // Handle accept button click
    acceptButton.addEventListener('click', function() {
        localStorage.setItem('gdprChoice', 'accepted');
        gdprBanner.classList.remove('show');
        // Initialize Google Analytics
        initGoogleAnalytics();
    });

    // Handle reject button click
    rejectButton.addEventListener('click', function() {
        localStorage.setItem('gdprChoice', 'rejected');
        gdprBanner.classList.remove('show');
    });
});

// Initialize Google Analytics
function initGoogleAnalytics() {
    // Create Google Analytics script
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=G-DD306JM647`;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-DD306JM647');
} 