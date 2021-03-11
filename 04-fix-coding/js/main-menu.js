class MainMenu extends HTMLElement {

    constructor(){
        super();

    }

    connectedCallback(){
        // render component
        this._render();
    }

    _render() {
        this._addMenuItem('#trending', 'Popular');
    }

    _addMenuItem(textHref, textMenu) {
        // display elements
        // link
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', textHref);
        linkElement.innerText = textMenu;
        // item list
        const listElem = document.createElement('li');
        listElem.classList.add('navbar-item');
        listElem.appendChild(linkElement);
        // append into custom element
        this.appendChild(listElem);
    }
}

if(!customElements.get('main-menu')) {
    customElements.define('main-menu', MainMenu);
}