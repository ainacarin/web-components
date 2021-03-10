// custom HTML element
class ExampleElement extends HTMLElement {
  constructor() {
    super();
    // get template
    const template = document.getElementById("example-template");
    // clone node
    const node = document.importNode(template.content, true);
    // manage shadow = custom element content
    const shadowRoot = this.attachShadow({ mode: "open" });
    // add template into shadow dom of custom element
    shadowRoot.appendChild(node);
  }

  connectedCallback() {}
}
if (!customElements.get("example-element")) {
  customElements.define("example-element", ExampleElement);
}
