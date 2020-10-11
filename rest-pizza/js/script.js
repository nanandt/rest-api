function TampilSemuaMenu() {
  $.getJSON("data/pizza.json", function (data) {
    // mengambil data json fungsi getjson khusus untuk json
    let menu = data.menu;
    // mengeluarkan menu yg ada di data json
    $.each(menu, function (i, data) {
      // each adlh foreach di javascript
      // ambil semuan menu dan berikan fungsi ini
      // parameternya ada 2 yaitu index dan datanya
      $("#daftar-menu").append(
        // append menambahkan elemen baru didalamnya yg berisi string html
        '<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/' +
          data.gambar +
          '" class="card-img-top"><div class="card-body"><h5 class="card-title">' +
          data.nama +
          '</h5><p class="card-text">' +
          data.deskripsi +
          '</p><h5 class="card-text">Rp. ' +
          data.harga +
          '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>'
      );
    });
  });
}

TampilSemuaMenu();

$(".nav-link").on("click", function () {
  $(".nav-link").removeClass("active");
  $(this).addClass("active");

  let kategori = $(this).html();
  $("h1").html(kategori);

  if (kategori == "All Menu") {
    $("#daftar-menu").html("");
    TampilSemuaMenu();
    return;
  }

  $.getJSON("data/pizza.json", function (data) {
    let menu = data.menu;
    let content = "";

    $.each(menu, function (i, data) {
      if (data.kategori == kategori.toLowerCase()) {
        content +=
          '<div class="col-md-4"><div class="card mb-3"><img src="img/pizza/' +
          data.gambar +
          '" class="card-img-top"><div class="card-body"><h5 class="card-title">' +
          data.nama +
          '</h5><p class="card-text">' +
          data.deskripsi +
          '</p><h5 class="card-text">Rp. ' +
          data.harga +
          '</h5><a href="#" class="btn btn-primary">Pesan Sekarang</a></div></div></div>';
      }
    });

    $("#daftar-menu").html(content);
  });
});
