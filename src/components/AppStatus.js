export default class AppStatus extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = this.getTemplate();
    }

    getTemplate() {
        return `
            <div>AppStatus</div>
        `;
    }
}

customElements.get("app-status") ??
    customElements.define("app-status", AppStatus);
