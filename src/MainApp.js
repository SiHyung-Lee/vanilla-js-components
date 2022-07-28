import HeadIntro from "./components/HeadIntro.js";
import AppStatus from "./components/AppStatus.js";

class MainApp extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        this.innerHTML = this.getTemplate();
    }

    getTemplate() {
        return `
        <head-intro class="intro"></head-intro>
            <div>Main</div>
            <app-status></app-status>
        `;
    }
}

customElements.get("main-app") ?? customElements.define("main-app", MainApp);
