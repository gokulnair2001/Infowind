let titleElement = document.getElementById('title');
let descriptionElement = document.getElementById('description');
let imageElement = document.getElementById('image');
let urlElement = document.getElementById('url');

let tabs = await browser.tabs.query({active: true, currentWindow: true});
let response = await browser.tabs.sendMessage(tabs[0].id, {update: "please"});

titleElement.textContent = response?.title;
descriptionElement.textContent = response?.description;
urlElement.textContent = response?.url;
if (response?.image !== undefined)
        imageElement.src = response?.image;
