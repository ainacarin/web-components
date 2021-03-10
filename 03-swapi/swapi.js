class Swapi extends HTMLElement {
  constructor() {
    super();

    // get template
    this._template = document.getElementById("starwars-films");
    // asoociate shadow dom 
    this.shadowDom = this.attachShadow({ mode: "open" });
  }

  get films() {
    return this._films;
  }

  connectedCallback() {
    const url = "https://swapi.dev/api/films";
    const request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.addEventListener("load", (event) => {
      const response = JSON.parse(event.target.response);
      const results = response.results;
      this._films = results
        .map((film) => {
          return {
            title: film.title,
            director: film.director,
            episode: film.episode_id,
            release: film.release_date,
          };
        })
        .sort((a, b) => a.episode - b.episode);
        // render films
      this._displayFilms();
    });
    request.send();
  }

  _displayFilms() {
    for (let film of this._films) {
      // duplicate node
      const node = document.importNode(this._template.content, true);
      //   add data swapi
      node.getElementById("episode").innerText = film.episode;
      node.getElementById("title").innerText = film.title;
      node.getElementById("release").innerText = film.director;
      node.getElementById("director").innerText = film.release;
      // add template to shadow dom
      this.shadowDom.appendChild(node);
    }
  }
}
if (!customElements.get("swapi-element")) {
  customElements.define("swapi-element", Swapi);
}
