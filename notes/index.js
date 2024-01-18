window.onload = async function() {
    function compare(a, b) {
        var routed = (c)=>{
            return c.getAttribute('route') ? c.getAttribute('route') : c.getAttribute('routes');
        }
        var aa = routed(a);
        var bb = routed(b);
        var x = rout.ed(aa);
        var y = rout.ed(bb);
        0 < 1 ? console.log(15, aa, bb, x.length, y.length) : null;
        var routes = (z)=>{
            return x.length < y.length ? x : y;
        }
        var alpha = routed(b).localeCompare(routed(a));
        var length = routes(b).length - routes(a).length;
        var paths = rout.ed(aa).length - rout.ed(bb).length;
        return alpha
    }
    Array.from(document.querySelectorAll('[route], [routes]')).sort(compare).reverse().forEach(function(component) {
        var route = {
            file: component.getAttribute('component') + ".html",
            url: component.getAttribute('route') || component.getAttribute('routes'),
        };
        window.rout.es.push(route);
    });
    0 < 1 ? window.rout.es.sort(function(a, b) {
        return rout.ed(a.url).length - rout.ed(b.url).length
    }).reverse() : null;
    0 > 1 ? console.log(2, "window.onload", {
        routes: window.routes
    }) : null;

    firebase.initializeApp({
        apiKey: "AIzaSyA2K41RYhtZm4nx2F1liIJ8ly4ejy6gqc8",
        authDomain: "pro-jyx.firebaseapp.com",
        projectId: "pro-jyx",
        appId: "1:492439614306:web:58cffeca539613b875b23b"
    });
    firebase.auth().onAuthStateChanged(async(user)=>{
        var pathname = window.location.href.split(document.head.querySelector("base").href)[1];
        console.log(41, {
            pathname
        });
        if (user) {
            window.user = user;
            0 < 1 ? console.log(42, 'index.user', {
                user
            }) : null;
            try {
                var uid = user.uid;
                var user = await github.user.self(user);
                console.log(52, user);
                var avatar_url = user.avatar_url;
                var token = '';

                const avi = document.body.querySelector('.box-avatar');
                var img = avi.querySelector('img');
                img.src = avatar_url;

                document.body.setAttribute('uid', uid)
                //localStorage.setItem('githubAccessToken', token);

                //localStorage.setItem("user", user.login);

                rout.er(pathname);
                authState(user)
            } catch (e) {
                console.log(56, 'onAuthStateChanged', {
                    e
                });
                rout.er(pathname);
                authState(user)
            }
        } else {
            window.user = null;
            localStorage.removeItem('githubAccessToken');
            Array.from(document.body.querySelectorAll(".avatar-image")).forEach(function(avatar) {
                avatar.innerHTML = "";
            });
            rout.er(pathname);
            authState(user)
        }
        //dom.body.dataset.load = "ed";
    }
    );

    async function authState() {
        const githubAccessToken = localStorage.githubAccessToken;
        if (githubAccessToken) {
            var repos = await github.user.repos();
            var card = document.querySelector(".nav-card");
            var template = card.querySelector("template");
            console.log(22, {
                repos,
                card,
                template
            });
            repos.forEach(function(repo) {
                var box = template.content.firstElementChild.cloneNode(true);
                box.querySelector("text").textContent = repo.name;
                template.previousElementSibling.insertAdjacentHTML('beforeend', box.outerHTML);
            });
        } else {
            const avi = document.body.querySelector('.box-avatar');
            var img = avi.querySelector('img');
            img.src = "raw/asset/svg/github.svg";
        }
    }

    document.getElementById('snippets').classList.add('active');
}
