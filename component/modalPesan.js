let selectedBook = null;

function getListProduct() {
  return JSON.parse(localStorage.getItem("orders")) || null;
}

function ubahJumlah(angka) {
  const input = document.getElementById(`jumlahPesanan`);
  let value = parseInt(input.value);

  value += angka;

  if (value < 1) {
    value = 1;
  }

  return (input.value = value);
}

const listOfBooks = [
  {
    id: 1,
    name: "Jalaluddin Rumi",
    harga: 20_000,
    deskripsi: "Tentang Das Kapital Marx",
    image: "jalaludinRumi.png",
  },
  {
    id: 2,
    name: "Tan Malaka",
    harga: 20_000,
    deskripsi: "Tentang Das Kapital Marx",
    image: "tanmalaka.png",
  },
  {
    id: 3,
    name: "Che Guevara",
    harga: 20_000,
    deskripsi: "Tentang Das Kapital Marx",
    image: "cheGuevara.png",
  },
  {
    id: 4,
    name: "Buya Hamka",
    harga: 20_000,
    deskripsi: "Tentang Das Kapital Marx",
    image: "buyaHamka.png",
  },
  {
    id: 5,
    name: "Toraja City",
    harga: 20_000,
    deskripsi: "Tentang Das Kapital Marx",
    image: "Poster Toraja City.jpg",
  },
  {
    id: 6,
    name: "Fedrick Engels",
    harga: 20_000,
    deskripsi: "Tentang Das Kapital Marx",
    image: "tanmalaka.png",
  },
];

const containerCard = document.getElementById("container-card");

// ini render Card
function renderCard(books) {
  containerCard.innerHTML = "";

  books.forEach((book, index) => {
    const card = document.createElement("div");
    card.className = "card-item";

    card.innerHTML = `
    <img src="assets/${book.image}" alt="${book.name}" width="200" height="300"/>
    <h5>${book.name}</h5>
    <p class="price">Rp. ${book.harga}</p>
    <p>${book.deskripsi}</p>
    <button
    type="button"
    class="btn btn-warning"
    data-bs-toggle="modal"
    data-bs-target="#modalPesan"
    style="margin: 10px"
    onclick="createModal(${book.id})"
    >
    Pesan
    </button>`;

    containerCard.appendChild(card);

    // card.querySelector(".btn-open-modal").addEventListener("click", () => {
    //   selectedBook = book;
    //   document.getElementById("jumlahPesanan").value = 1;
    // });
  });
  // const myModal = document.getElementById("modalPesan");

  // myModal.addEventListener("hidden.bs.modal", function () {
  //   document.getElementById("jumlahPesanan").value = 1;
  // });
}

const containerModal = document.getElementById("modalBeli");
// ini render Modal
function renderModal(data) {
  // console.log(data);
  // containerModal.innerHTML = "";
  // const card = document.createElement("div");
  // card.className = "card-item";

  // card.innerHTML = `
  //         <div class="modal-header">
  //           <h2 class="modal-title fs-5" id="exampleModalLabel">Pesanan</h2>

  //           <button
  //             type="button"
  //             class="btn-close"
  //             data-bs-dismiss="modal"
  //             aria-label="Close"
  //           ></button>
  //         </div>

  //         <div class="modal-body">
  //           <p>Tentukan Jumlah Pesanan</p>
  //           <div
  //             style="
  //               display: flex;
  //               justify-content: center;
  //               padding: 10px;
  //               gap: 10px;
  //             "
  //           >
  //             <input
  //             disabled
  //               type="number"
  //               id="jumlahPesanan"
  //               class="form-control text-center"
  //               value="1"
  //               min="1"
  //             />

  //           </div>
  //         </div>
  //         <div class="modal-footer">
  //           <button
  //             type="button"
  //             class="btn btn-secondary"
  //             data-bs-dismiss="modal"
  //           >
  //             Close
  //           </button>
  //           <button type="button" onclick="" class="btn btn-warning">
  //             Pesan
  //           </button>
  //         </div>`;

  // containerModal.appendChild(card);
  addToCart(data.id, data.qty);
}

function addToCart(data, qty) {
  const product = getListProduct();

  const getBook = listOfBooks.find((el) => el.id === data);
  const getproduct = product?.find((el) => el.id === data);

  Swal.fire({
    title: "Apakah Anda Yakin ingin membeli",
    // text: "",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes",
    cancelButtonText: "No",
  })
    .then((result) => {
      if (result.isConfirmed)
        Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 1000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          },
        }).fire({
          icon: "success",
          title: "Produk berhasil ditambahkan",
        });
    })
    .then(() => {
      if (!product) {
        localStorage.setItem(
          "orders",
          JSON.stringify([{ ...getBook, qty: qty }]),
        );
      } else {
        if (getproduct) {
          console.log(qty);
          let newProduct = product.map((el) => {
            if (el.id === data) {
              el = {
                ...el,
                qty: qty,
              };
            }

            return el;
          });
          localStorage.setItem("orders", JSON.stringify(newProduct));
        } else {
          let objek = {
            ...getBook,
            qty: qty,
          };
          let newProduct = product;
          newProduct.push(objek);
          localStorage.setItem("orders", JSON.stringify(newProduct));
        }
      }

      setTimeout(() => {
        location.reload();
      }, 500);
    });
}

function createModal(data) {
  let objek = {};
  let product = getListProduct();
  const getBook = listOfBooks.find((el) => el.id === data);
  const getproduct = product?.find((el) => el.id === data);
  //

  if (!product || !getproduct) {
    objek = {
      ...getBook,
      qty: 1,
    };
  } else {
    objek = {
      ...getproduct,
      qty: getproduct.qty + 1,
    };
    // localStorage.setItem("orders", JSON.stringify([objek]));
  }

  renderModal(objek);

  // console.log(objek);
}

renderCard(listOfBooks);
