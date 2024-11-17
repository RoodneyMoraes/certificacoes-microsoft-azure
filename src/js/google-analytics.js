document.addEventListener('DOMContentLoaded', () => {
    const consentAccepted = localStorage.getItem('consentAccepted');

    if (!consentAccepted) {
        document.getElementById('cookieConsentBanner').style.display = 'block';
    }

    document.getElementById('acceptConsent').addEventListener('click', () => {
        localStorage.setItem('consentAccepted', 'true');
        loadGoogleAnalytics();
        document.getElementById('cookieConsentBanner').style.display = 'none';
        document.getElementById('cookieConsentBanner').setAttribute('style', 'display: none !important');
    });

    document.getElementById('declineConsent').addEventListener('click', () => {
        document.getElementById('cookieConsentBanner').style.display = 'none';
        document.getElementById('cookieConsentBanner').setAttribute('style', 'display: none !important');
    });

    function loadGoogleAnalytics() {
        const script = document.createElement('script');
        script.src = 'https://www.googletagmanager.com/gtag/js?id=G-CMLZKJVKKY';
        script.async = true;
        document.head.appendChild(script);

        script.onload = () => {
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-CMLZKJVKKY');
        };
    }

    if (consentAccepted) {
        loadGoogleAnalytics();
    }
});