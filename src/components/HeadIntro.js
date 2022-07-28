export default class HeadIntro extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = this.getTemplate();
    }

    getTemplate() {
        return `<div>Head</div>`;
    }
}

customElements.get("head-intro") ??
    customElements.define("head-intro", HeadIntro);
