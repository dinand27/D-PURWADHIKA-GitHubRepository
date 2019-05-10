var menu,
    produk = ["Ayam", "Ikan", "Sapi"],
    harga = [25000, 50000, 75000],
    jumlah = [0, 0, 0], // [0, 4, 3]
    total = [0, 0, 0], // [0, 200000, 225000]
    totalBelanja, uang

do {
    do{ var cek2=false
    menu = parseInt(prompt( // 1 - 3 menu = 2 (sapi)
        "Selamat Datang di PasarOnline\n" + 
        "Daftar Menu : \n" +
        "1. Ayam @ Rp.25.000\n2. Ikan @ Rp. 50.000\n3. Sapi @ 75.000"
    )) - 1

    if(!Number.isInteger(menu)) { //menu bukan sebuah angka/integer
        alert('Mohon isikan hanya Angka');
    }else  if (menu < 0 || menu > 2){
        cek2=true
        alert('Mohon isikan hanya Angka 1 s/d 3')
    }
    }while (cek2);
    jumlah[menu] = jumlah[menu] + parseInt(prompt("Masukan jumlah Menu " + produk[menu]))
    var check = confirm("Ingin menambah belanjaan ?") // true or false


} while (check);

total[0] = harga[0] * jumlah[0] // Total bayar Ayam
total[1] = harga[1] * jumlah[1] // Total bayar Ikan
total[2] = harga[2] * jumlah[2] // Total bayar Sapi

totalBelanja = total[0] + total[1] + total[2]

do {
    var check = false
    uang = parseInt(prompt(
        "Total Belanja\n" +
        "Ayam\n" +
        harga[0] + " x " + jumlah[0] + " = Rp." + total[0] +
        "\nIkan\n" +
        harga[1] + " x " + jumlah[1] + " = Rp." + total[1] +
        "\nSapi\n" +
        harga[2] + " x " + jumlah[2] + " = Rp." + total[2] +
        "\n\nTotal yang harus dibayar adalah: " + totalBelanja +
        "\n\nMasukkan jumlah uang Anda: "
    ))

    if(uang < totalBelanja) {
        // Berapa kurangnya
        var kurang = totalBelanja - uang
        check = true
        alert(
            "Jumlah yang Anda masukkan kurang Rp. " + kurang +
            "\nTotal Belanja Anda : Rp. " + totalBelanja +
            "\nUang yang Anda bayar : Rp. " + uang
        )
    } else {
        var kembali = uang - totalBelanja
    }
} while (check);

console.log(
    "Data Belanja" +
    "\n  " + produk[0] + " x " + jumlah[0] + " = Rp." + total[0] +
    "\n  " + produk[1] + " x " + jumlah[1] + " = Rp." + total[1] +
    "\n  " + produk[2] + " x " + jumlah[2] + " = Rp." + total[2] +
    "\n\n  Total belanja  Rp." + totalBelanja +
    "\n  Jumlah uang Rp." + uang +
    "\n  Kembali Rp. " + kembali +
    "\n  Terimakasih"

);

