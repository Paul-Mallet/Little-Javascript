import API_KEY from "./apikey.js";

const search_form = document.querySelector("form");
const search_bar = document.querySelector("input");

search_form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(search_bar.value);
    ft_get_realtime(search_bar.value);
});

async function ft_get_realtime(search_bar)
{
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${search_bar}`;
    const options = {
        method: "GET",
        credentials: "same-origin",
        headers: {
            "X-RapidAPI-Key": API_KEY,
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
            "Content-Type": "application/json"
        }
    };

    try
    {
        const response = await fetch(url, options);
        const data = await response.json();
        console.log("Load success !");
        ft_put_on_dom(data);
    } catch (e)
    {
        console.error(e);
    }
}

ft_get_realtime("Paris");

function ft_put_on_dom(data)
{
    const icon = document.querySelector(".card img");
    const tempC = document.querySelector(".card .temp_c");
    const country = document.querySelector(".card .country");
    const city = document.querySelector(".card .city");
    const windS = document.querySelector(".card .wind_kph");
    const cloudC = document.querySelector(".card .cloud_per");

    icon.setAttribute("src", data.current.condition.icon);
    tempC.innerText = data.current.temp_c + "°C";
    country.innerText = data.location.country + ", ";
    city.innerText = data.location.name;
    windS.innerText = data.current.wind_kph + " km/h";
    cloudC.innerText = data.current.cloud + " %";
}