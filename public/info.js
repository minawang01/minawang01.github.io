import publications from "./projects/publications.js";
import programming from "./projects/programming.js";
function addPublications() {
  for (let i = 0; i < publications.length; i += 2) {
    let wrap = document.createElement("div");
    wrap.classList.add("card", "d-flex", "article_item");
    let link = document.createElement("a");
    link.target = "_blank";
    link.href = publications[i].link;
    let pic = document.createElement("img");
    pic.classList.add("card-img-top");
    pic.src = publications[i].thumbnail;
    pic.alt = "Card image cap";
    let body = document.createElement("div");
    body.classList.add("card-body");
    let title = document.createElement("p");
    title.classList.add("card-text");
    title.innerHTML = publications[i].title;
    body.appendChild(title);
    link.appendChild(pic);
    wrap.appendChild(link);
    wrap.appendChild(body);
    document.getElementById("pub_even").appendChild(wrap);
  }
  for (let i = 1; i < publications.length; i += 2) {
    let wrap = document.createElement("div");
    wrap.classList.add("card", "d-flex", "article_item");
    let link = document.createElement("a");
    link.target = "_blank";
    link.href = publications[i].link;
    let pic = document.createElement("img");
    pic.classList.add("card-img-top");
    pic.src = publications[i].thumbnail;
    pic.alt = "Card image cap";
    let body = document.createElement("div");
    body.classList.add("card-body");
    let title = document.createElement("p");
    title.classList.add("card-text");
    title.innerHTML = publications[i].title;
    body.appendChild(title);
    link.appendChild(pic);
    wrap.appendChild(link);
    wrap.appendChild(body);
    document.getElementById("pub_odd").appendChild(wrap);
  }
}

function addProjects() {
  for (let i = 0; i < programming.length; i++) {
    let wrap = document.createElement("div");
    wrap.classList.add("card", "d-flex", "project_item", "col-12");
    let link = document.createElement("a");
    link.target = "_blank";
    link.href = programming[i].link;
    let pic = document.createElement("img");
    pic.classList.add("card-img-top");
    pic.src = programming[i].image;
    pic.alt = "Project thumbnail";
    let body = document.createElement("div");
    body.classList.add("card-body");
    let desc = document.createElement("p");
    desc.classList.add("card-text");
    desc.innerHTML = programming[i].description;
    body.appendChild(desc);
    link.appendChild(pic);
    wrap.appendChild(link);
    wrap.appendChild(body);
    document.getElementById("projects").appendChild(wrap);
  }
}

addPublications();
addProjects();
