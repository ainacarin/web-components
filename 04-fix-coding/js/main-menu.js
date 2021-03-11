class MainMenu extends HTMLElement {

    constructor(){
        super();

    }

    connectedCallback(){
        // render component
        this._render();
    }

    _render() {
        // display elements
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', '#trending');
        linkElement.innerText = 'Popular';

        const listElem = document.createElement('li');
        listElem.classList.add('navbar-item');
        listElem.appendChild(linkElement);

        this.appendChild(listElem);
    }
}

if(!customElements.get('main-menu')) {
    customElements.define('main-menu', MainMenu);
}