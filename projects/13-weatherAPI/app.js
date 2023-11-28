async function ft_get_realtime()
{
    const url = "https://weatherapi-com.p.rapidapi.com/current.json?q=Paris";
    const options = {
        method: "GET",
        credentials: "same-origin",
        headers: {
            "X-RapidAPI-Key": "",
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

function ft_put_on_dom(data)
{
    const icon = document.querySelector(".card img");
    const tempC = document.querySelector(".card .temp_c");
    const country = document.querySelector(".card .country");
    const city = document.querySelector(".card .city");
    const windS = document.querySelector(".card .wind_kph");
    const cloudC = document.querySelector(".card .cloud_per");

    icon.setAttribute("src", data.current.condition.icon);
    tempC.innerText = data.current.temp_c;
    country.innerText = data.location.country;
    city.innerText = ", " + data.location.name;
    windS.innerText = data.current.wind_kph + " km/h";
    cloudC.innerText = data.current.cloud + " %";
}

function ft_wait()
{
    setTimeout(ft_get_realtime, 0);
}

ft_wait();