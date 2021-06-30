class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <a href="index.html">
                    <img src="#" alt="">
                </a>
        
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Legal Notice</a></li>
                        <li><a href="#">E-commerce</a></li>
                        <li><a href="#">Idea</a></li>
                    </ul>
                </nav>
            </header>
        `
    }
}

customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer>
                &copy; Copyright 2021 Team Name
            </footer>
        `
    }
}

customElements.define('my-footer', MyFooter)