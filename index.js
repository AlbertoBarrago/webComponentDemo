class MyCustomElement extends HTMLElement {
    static get observedAttributes() {
        return ["data-element"];
    }

    constructor() {
        super();
    }

    connectedCallback() {
        //console.log("Custom element added to page.");
        this.render();
    }

    attributeChangedCallback(name, oldValue, newValue) {
        //console.log(`Attribute ${name} has changed.`);
        if (name === "data-element") {
            this.render(JSON.parse(newValue));
        }
    }

    //render with initial value
    render(dataElement = { key1: "value1", key2: "value2" }) {
        let data = JSON.stringify(dataElement);
        this.innerHTML = `<div>${data}</div>`;
    }
}

customElements.define("my-custom-element", MyCustomElement);

setTimeout(() => {
    const element = document.querySelector("my-custom-element");
    // Update the dataElement attribute
    let jsonElement = JSON.stringify({ key1: "value5", key2: "value6", key3: "value7", key4: "value8" });
    element.setAttribute("data-element", jsonElement);

}, 2000);
