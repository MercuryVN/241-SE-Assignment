const pageKey = "page";

var page = sessionStorage.getItem(pageKey);
if (page == null) page = "50";
sessionStorage.setItem(pageKey, page);
document.getElementById("remainingPages").innerHTML = page;

function toPrint()
{
    window.location.href = "../print/index.html";
}

function toBuy()
{
    window.location.href = "../buy_page/index.html";
}

function toLog()
{

}