(function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () {
        (c[a].q = c[a].q || []).push(arguments)
    };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0];
    y.parentNode.insertBefore(t, y);
})(window, document, "clarity", "script", "bdqnkn0he9");

function isLogin() {
    if (window.localStorage.getItem("username")&&window.localStorage.getItem("password")&&hex_sha1(window.localStorage.getItem("username"))==='a40eb3af3502a5be5c9e788b9ae7727ba221dbaf' && hex_sha1(window.localStorage.getItem("password")) == 'a40eb3af3502a5be5c9e788b9ae7727ba221dbaf') {
        return true;
    } else {
        return  false;
    }
}

function logout() {
    window.localStorage.removeItem("username");
    window.localStorage.removeItem("password");
    window.location.href='/login?next='+window.location.pathname+window.location.hash;
}

MirrorProtection('https://2129.yt-blog.top');
TombSweepingDay();
Memorial();
lantern();