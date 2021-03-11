class MainMenu extends HTMLElement {

    constructor(){
        super();

        // menu item content
        this._menuItems = [

            {
                link: '/home.html#trending',
                name: 'Popular'
            },
            {
                link: '/home.html#shows',
                name: 'Series'
            },
            {
                link: '/home.html#movies',
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
        // add template into custom element
        this.innerHTML = ` <template id="menu-item-tpl">
        <li class="navbar-item" >
        <a href="" class="item-link"></a
        ></li></template>`;
        
        // get itemn list template
        this.itemTemplate = this.querySelector('#menu-item-tpl');
        
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
        const node = document.importNode(this.itemTemplate.content, true);
        // config link data
        const linkElement = node.querySelector('.item-link');
        linkElement.setAttribute('href', textHref);
        linkElement.innerText = textMenu;
        // append into custom element
        this.appendChild(node);
    }
}

if(!customElements.get('main-menu')) {
    customElements.define('main-menu', MainMenu);
}