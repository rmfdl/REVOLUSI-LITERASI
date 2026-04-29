function getListProduct() {
  return JSON.parse(localStorage.getItem("orders")) || null;
}
const containerCart = document.getElementById("cart-list");
const totalCart = document.getElementById("total");
// ini render Modal
let allProduk = getListProduct();

let grandTotal = 0;

function renderCart(product) {
  console.log(product);
  //   let product = getListProduct();
  containerCart.innerHTML = "";

  product?.forEach((item) => {
    const cart = document.createElement("div");
    const subtotal = item.harga * item.qty;
    grandTotal += subtotal;
    cart.innerHTML = `<div class="list-group-item d-flex align-items-center p-3">
                <img src="./assets/${item.image}" alt="${item.name}"
                     class="img-thumbnail me-3" style="width: 60px; height: 60px; object-fit: cover;">
                <div class="flex-grow-1">
                    <h6 class="mb-0 fw-bold">${item.name}</h6>
                    <small class="text-muted d-block">${item.deskripsi}</small>
                    <small class="fw-semibold mt-1 d-inline-block">
                        ${item.qty} x Rp ${item.harga.toLocaleString()}
                    </small>
                </div>
                <div class="text-end">
                    <span class="fw-bold">Rp ${subtotal.toLocaleString()}</span>
                </div>
            </div>`;
    containerCart.appendChild(cart);
  });
  totalCart.innerText = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(grandTotal);
}

function checkout() {
  Swal.fire({
    title: "Apakah Anda Mau Checkout?",
    // text: "",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed)
      Swal.fire({
        title: "Terimakasih sudah order!",
        text: "Silahkan cek email anda.",
        icon: "success",
      }).then(() => {
        localStorage.removeItem("orders");
        renderCart(allProduk);
        setTimeout(() => {
          location.href = "/";
        }, 1000);
      });
  });
}

renderCart(allProduk);
