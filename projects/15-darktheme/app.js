const body = document.querySelector("body");
const main = document.querySelector("main");
const btn = document.querySelector("button");

if (sessionStorage.getItem("theme"))
{
    body.className = sessionStorage.getItem("theme");
    btn.className = sessionStorage.getItem("btn");
}

main.addEventListener("click", toggle);

function toggle()
{
    if (sessionStorage.getItem("theme"))
    {
        sessionStorage.clear();
        body.className = "";
        btn.className = "";
    }
    else
    {
        sessionStorage.setItem("theme", "dark");
        sessionStorage.setItem("btn", "move");
        body.className = sessionStorage.getItem("theme");
        btn.className = sessionStorage.getItem("btn");
    }
}