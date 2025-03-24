window.onload = function () {
    let urlParams = new URLSearchParams(window.location.search)
    let message = urlParams.get('message')
    if (message) {
        showError(message)
    }

    // Check if the user is connected to Facebook
    isFBConnected().then(access_token => {
        if (access_token) {
            window.location.href = "dashboard.html"
        }
    })
}

function showError(message) {
    let loginErrorText = document.getElementById("loginErrorText")
    loginErrorText.classList.remove('hidden')
    loginErrorText.innerHTML = message
}

function handlePostLogin() {
    isFBConnected().then(access_token => {
        if (access_token) {
            window.location.href = "index.html"
        } else {
            showError("Une erreur est survenue, veuillez autoriser l'application à travers Facebook.")
        }
    })
}
