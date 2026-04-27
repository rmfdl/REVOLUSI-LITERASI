let nav = `<nav class="navbar">
      <div class="navbar-left">
        <a href="#" class="logo1">
          <span class="text-black">Revolusi</span
          ><span class="text-yellow">Literasi</span>
        </a>
        <ul class="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">Catalog</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>

      <div class="navbar-right">
        <div class="search-box">
          <input type="text" placeholder="Cari disini..." />
          <button type="submit">Search</button>
        </div>
        <div class="action-links">
          <a href="#" class="btn-login">Login</a>
          <a href="#" class="btn-order"
            ><i class="fa-solid fa-cart-arrow-down"></i
          ></a>
        </div>
      </div>
    </nav>`;

document.querySelector("body").insertAdjacentHTML("afterbegin", nav);
