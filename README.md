# Little-Javascript

A package of 15 small JS projects to create dynamic websites and webapps using APIs.

## Document Object Model

The DOM API allow to connect webpages with scripts and interact with each elements(nodes) of these pages(tree). It's possible to change elements props by adding events on them.

| Name | Link     | Description                |
| :-------- | :------- | :------------------------- |
| Random Bg | [Here](https://little-javascript.netlify.app/projects/randombg) | Read array values(color, rgb, hexa) with `Math.random()` |
| Manual Counter | [Here](https://little-javascript.netlify.app/projects/counter) | Create statements to inc, reset and dec number with `btn.className` |
| Cards Swapper | [Here](https://little-javascript.netlify.app/projects/swapper) | Read array values(img, description) with `array[index].key` |
| Header Scroll | [Here](https://little-javascript.netlify.app/projects/dispscroll) |  Add diff styles on vertical scroll value with `window.scrollY` |
| Burger Sidebar | [Here](https://little-javascript.netlify.app/projects/sidebar) | Display mobile menu sidebar with `elem.classList.toggle()` |
| Simple Modal | [Here](https://little-javascript.netlify.app/projects/modal) | Add diff styles by clicking on elem with `addEventListener("click", callback)` |
| FAQ Paragraph | [Here](https://little-javascript.netlify.app/projects/faq) | Add diff styles by clicking on elem with `e.currentTarget.parentElement` |
| Filter Menu | [Here](https://little-javascript.netlify.app/projects/filter) | Create cards template according to filter selection with `elem.content.cloneNode()` |

## Web Storage

With Web Storage it's possible to set simple key/value pairs in storage on the web client. The browser will keep them during a session(until user close exit the browser) or locally(no expiration time). With it we can rerun themes, stats from user account...

| Name | Link     | Description                |
| :-------- | :------- | :------------------------- |
| Dark Theme | [Here](https://little-javascript.netlify.app/projects/darktheme) | Add styles to change theme when page is loading with `localStorage.getItem()` |

## HTMLMediaElement

This is a subinterface from the DOM API, HTMLMediaElement was created to access to the props of audio and video elem. With it we can play, pause and more globally access to their html attributes(controls, loop...) in Javascript.

| Name | Link     | Description                |
| :-------- | :------- | :------------------------- |
| Video bg | [Here](https://little-javascript.netlify.app/projects/videobg) | Run the MediaElement when clicking on it with `elem.play()` and `elem.pause()` |
| Sound I/O | [Here](https://little-javascript.netlify.app/projects/soundbtn) | Same like video but check statement if media is paused with `elem.paused` |

## Fetch

This API provides an interface for fetching resources. It uses request/response objects with web concepts like CORS and HTTP Origin to make exchange data more robustness.

| Name | Link     | Description                |
| :-------- | :------- | :------------------------- |
| Local File | [Here](https://little-javascript.netlify.app/projects/localdata) | Display data from local server after call fetch on URL with `res.json()` |
| Real-Time Weather | [Here](https://little-javascript.netlify.app/projects/weather) | Abort incomplete data from external APIs after call it with `new AbortController()` |