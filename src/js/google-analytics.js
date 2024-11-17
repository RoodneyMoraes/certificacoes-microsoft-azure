document.addEventListener('DOMContentLoaded', () => {
    const consentAccepted = localStorage.getItem('consentAccepted');
    console.log('Consent accepted:', consentAccepted);

    if (!consentAccepted) {
        console.log('Displaying cookie consent banner');
        document.getElementById('cookieConsentBanner').style.display = 'block';
    }

    document.getElementById('acceptConsent').addEventListener('click', () => {
        console.log('Accept button clicked');
        localStorage.setItem('consentAccepted', 'true');
        loadGoogleAnalytics();
        document.getElementById('cookieConsentBanner').style.display = 'none';
        document.getElementById('cookieConsentBanner').setAttribute('style', 'display: none !important');
        console.log('Banner hidden after accept');
    });

    document.getElementById('declineConsent').addEventListener('click', () => {
        console.log('Decline button clicked');
        document.getElementById('cookieConsentBanner').style.display = 'none';
        document.getElementById('cookieConsentBanner').setAttribute('style', 'display: none !important');
        console.log('Banner hidden after decline');
    });

    function loadGoogleAnalytics() {
        console.log('Loading Google Analytics');
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-CMLZKJVKKY';
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-CMLZKJVKKY');
            console.log('Google Analytics loaded');
        };
    }

    if (consentAccepted) {
        loadGoogleAnalytics();
    }
});