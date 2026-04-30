let nav = `<nav class="navbar navbar-expand-lg d-flex justify-content-between">
      <!-- Kelas Kiri -->
      <div class="container d-flex justify-content-start">
        <a
          href="/index.html"
          class="border border-dark border-4 fs-4 text-decoration-none me-4"
        >
          <span class="text-black">Revolusi</span
          ><span class="text-yellow">Literasi</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="list-inline gap-3 d-flex text-decoration-none mt-3">
            <li>
              <a
                href="/index.html"
                class="list-group-item"
                style="font-weight: bold"
                >Home</a
              >
            </li>
            <li>
              <a
                href="/catalog.html"
                class="list-group-item"
                style="font-weight: bold"
                >Catalog</a
              >
            </li>
            <li>
              <a
                href="/about.html"
                class="list-group-item"
                style="font-weight: bold"
                >About</a
              >
            </li>
          </ul>

          <div class="container d-flex justify-content-end gap-3">
            <div class="search-box d-flex">
              <input type="text" placeholder="Cari disini..." />
              <button type="submit">Search</button>
            </div>
            <div class="action-links ">
             
              <a href="/cart.html" class="btn-order"
                ><i class="fa-solid fa-cart-arrow-down"></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </nav>`;

document.querySelector("body").insertAdjacentHTML("afterbegin", nav);
