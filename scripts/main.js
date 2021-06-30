class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <a href="index.html">
                    <img src="../images/pagehaut.png" alt="">
                </a>

                <div class"container">
                    <nav class="nav-bar">
                        <ul>
                            <li><a href="../index.html">Home</a></li>
                            <li><a href="pages/about.html">About</a></li>
                            <li><a href="pages/legale-notice.html">Legal Notice</a></li>
                            <li><a href="#">E-commerce</a></li>
                            <li><a href="#">Idea</a></li>
                        </ul>
                    </nav>
                <div>
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