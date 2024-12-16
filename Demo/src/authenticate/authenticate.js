let roleKey = "role";
let studentRole = "student";
let spsoRole = "spso"

function login()
{
    const role = sessionStorage.getItem(roleKey);
    if (role == spsoRole)
    {
        window.location.href = "../dashboard/spso.html";
    }
    else 
    {
        window.location.href = "../dashboard/student.html";
    }
}

function customSubmit()
{
    elementSwitch(true);
    var validCredential = validate(document.getElementById("credential").value, 1);
    var validPassword = validate(document.getElementById("password").value, 1)
    if (!validCredential) document.getElementById("invalidCredential").style.visibility = "visible";
    else document.getElementById("invalidCredential").style.visibility = "hidden";
    if (!validPassword) document.getElementById("invalidPassword").style.visibility = "visible";
    else document.getElementById("invalidPassword").style.visibility = "hidden";
    if (!validCredential || !validPassword)
    {
        elementSwitch(false);
        return;
    }
    login();
}

function validate(value, minLength)
{
    if (value.length < minLength) return false;
    else return true;
}

function elementSwitch(state)
{
    if (state == true)
    {
        document.getElementById("credential").disabled = true;
        document.getElementById("password").disabled = true;
        document.getElementById("submitButton").disabled = true;
        document.getElementById("spinner").style.visibility = "visible";
    }
    else
    {
        document.getElementById("credential").disabled = false
        document.getElementById("password").disabled = false
        document.getElementById("submitButton").disabled = false
        document.getElementById("spinner").style.visibility = "hidden";
    }
}