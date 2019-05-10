var hari= {
    pertama: "senin",
    kedua: "selasa",
    ketiga: "Rabu"
}
var namaProp
for(namaProp in hari) {
    console.log(namaProp+ ": "+ hari[namaProp]);
}