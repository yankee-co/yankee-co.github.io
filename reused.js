class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class = "bg-light border-bottom" style="border-color: #cbcbcb;">
                <ul class="nav justify-content-center">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="index.html">Головна</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="surveys.html">Опитування</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="register.html">Реєстрація</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="login.html">Вхід</a>
                    </li>
                </ul>
            </div>
            <!-- Bootstrap JS file Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
        `
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback () {
        this.innerHTML = `
        <footer class="w-100
        bg-light
        border-1
        border-opacity-0
        border-top
        text-center
        fw-lighter"
        style="line-height: 20%; border-color: #cbcbcb;">
            <div class="container pt-3">
                <span style = "opacity:75%;">
                <p class="fs-4">Землянський Едуард</p>
                <p class="fs-5">КВ-22</p>
                <p class="fs-6" style = "margin-bottom:0; padding-bottom:1rem">2025</p>
                </span>
            </div>
        </footer>`
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)

$(function() {
    $('#datetimepicker1').datetimepicker();
  });
