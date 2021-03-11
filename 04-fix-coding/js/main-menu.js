class MainMenu extends HTMLElement {

    constructor(){
        super();

        // menu item content
        this._menuItems = [

            {
                link: '#trending',
                name: 'Popular'
            },
            {
                link: '#shows',
                name: 'Series'
            },
            {
                link: '#movies',
                name: 'Películas'
            },
            {
                link: '#',
                name: 'Mi perfil'
            },
            {
                link: 'index.html',
                name: 'Cerrar sesión'
            }
        ]
    }

    connectedCallback(){
        // render component
        this._render();
    }

    _render() {

        this._menuItems.forEach(element => {
            this._addMenuItem(element.link, element.name);
        });
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