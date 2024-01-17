window.onload = async function() {
    const avi = document.body.querySelector('.box-avatar');
    const githubAccessToken = localStorage.githubAccessToken;
    if (githubAccessToken) {
        var img = avi.querySelector('img');
        img.src = "raw/asset/svg/github.svg";
        img.onerror = function() {
            this.innerHTML = "";
        }
    } else {
        var img = avi.querySelector('img');
        img.src = "raw/asset/svg/github.svg";
    }
    document.getElementById('snippets').classList.add('active');
}
