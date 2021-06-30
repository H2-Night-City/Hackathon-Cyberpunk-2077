
class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                &copy; Copyright 2021 Hackathon 01
            </footer>
        `
    }
}

customElements.define('my-footer', MyFooter)