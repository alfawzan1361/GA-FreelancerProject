
function onSuccess(googleUser) {
    var profile = googleUser.getBasicProfile();
    $(".beforeSignInProfile").css("display", "none")
    $(".afterSignInProfile").css("display", "block")
    $("#profileImage").attr('src', profile.getImageUrl())
    $("#firstName").text(profile.getGivenName())
    $("#profileName").text(profile.getName())
    $("#profileEmail").text(profile.getEmail())
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}
function onFailure(error) {
    console.log(error);
}
function renderButton() {
    gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'longtitle': true,
        'theme': 'dark',
        'onsuccess': onSuccess,
        'onfailure': onFailure
    });
}
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        $(".beforeSignInProfile").css("display", "block")
        $(".afterSignInProfile").css("display", "none")
        console.log('User signed out.');
    });
}

