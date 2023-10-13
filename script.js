var angkaSekarang = "";
var teknik = "";
var layar = document.getElementById("layar");

function inputAngka(angka) {
  angkaSekarang += angka;
  layar.value = angkaSekarang;
}

function doTeknik(operator) {
  if (angkaSekarang !== "") {
    teknik = operator;
    angkaSekarang += operator;
    layar.value = angkaSekarang;
  }
}

function hitungHasil() {
    if (angkaSekarang !== "") {
      var bagian = angkaSekarang.split(teknik);
      if (bagian.length === 2) {
        var angka1 = parseFloat(bagian[0]);
        var angka2 = parseFloat(bagian[1]);
        
        if (teknik === '+') {
          angkaSekarang = (angka1 + angka2).toString();
        } else if (teknik === '-') {
          angkaSekarang = (angka1 - angka2).toString();
        } else if (teknik === '*') {
          angkaSekarang = (angka1 * angka2).toString();
        } else if (teknik === '/') {
          angkaSekarang = (angka1 / angka2).toString();
        }
      layar.value = angkaSekarang;
      teknik = "";
    }
  }
}

function hapus() {
    angkaSekarang = ""; 
    teknik = ""; 
    layar.value = ""; 
  }