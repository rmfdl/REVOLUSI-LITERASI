function ubahJumlah(angka) {
  const input = document.getElementById(`jumlahPesanan`);
  let value = parseInt(input.value);

  value += angka;

  if (value < 1) {
    value = 1;
  }

  return (input.value = value);
}

const myModal = document.getElementById("modalPesan");

myModal.addEventListener("hidden.bs.modal", function () {
  document.getElementById("jumlahPesanan").value = 1;
});
