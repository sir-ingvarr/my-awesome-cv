(function () {
    function getLanguage() {
        var params = new URLSearchParams(window.location.search);
        var lang = params.get('lang');
        return lang === 'ua' ? 'ua' : 'en';
    }

    function translate() {
        var lang = getLanguage();
        var map = window.CV_TRANSLATIONS && window.CV_TRANSLATIONS[lang];
        if (!map) return;

        document.documentElement.setAttribute('lang', lang === 'ua' ? 'uk' : 'en');
        document.title = map.page_title || document.title;

        document.body.innerHTML = document.body.innerHTML.replace(
            /\{\{\s*([\w]+)\s*\}\}/g,
            function (match, key) {
                return map[key] !== undefined ? map[key] : match;
            }
        );
    }

    document.addEventListener('DOMContentLoaded', translate);
})();
