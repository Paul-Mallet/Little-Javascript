const section = document.querySelector("section");

async function getMovies()
{
    try
    {
        const response = await fetch("./14-localmovies/data.json", {
            method: "GET",
            mode: "same-origin",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            }
        });
        if (response.ok)
        {
            const data = await response.json();
            return data;
        }
        else
        {
            throw new Error(`Error ${response.status}`);
        }
    }
    catch (e)
    {
        console.error(e);
    }
}

function setMovies(data)
{
    let i = 0;
    let j = 0;
    if ("content" in document.createElement("template"))
    {
        while (i < data.length)
        {
            const template = document.querySelector("#container__card");
            const section = document.querySelector("section");
            const clone = document.importNode(template.content, true);

            const bgImg = clone.querySelector(".img__bg");
            bgImg.setAttribute("src", `./14-localmovies/img/${data[i].img}`);

            const logo = clone.querySelector(".img__logo");
            logo.setAttribute("src", `./14-localmovies/${data[i].logo}`);

            const title = clone.querySelector(".inner__titles h2");
            title.textContent = data[i].title;

            const resume = clone.querySelector(".p__resume");
            resume.textContent = data[i].resume;

            while (j < data[i].categories.length)
            {
                const list = clone.querySelector(".container__inner--secondary ul");
                const li = document.createElement("li");
                list.append(li);
                const link = document.createElement("a");
                li.append(link);
                link.textContent = data[i].categories[j];
                j++;
                if (j < data[i].categories.length)
                {
                    link.append("-");
                }
            }

            const date = clone.querySelector(".inner__about .p__date");
            date.textContent = data[i].release_date;

            const person = clone.querySelector(".p__person");
            const span = document.createElement("span");
            span.innerText = data[i].person[0];
            person.append(span);

            j = 0;
            section.appendChild(clone);
            i++;
        }
    }
}

getMovies()
    .then(data => setMovies(data));