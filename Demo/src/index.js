let roleKey = "role";

function studentLogin()
{
    sessionStorage.setItem(roleKey, "student");
    toLogin();
}

function spsoLogin()
{
    sessionStorage.setItem(roleKey, "spso");
    toLogin();
}

function toLogin()
{
    window.location.href = "authenticate/authenticate.html";
}