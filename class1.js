// var orang= function(satu, dua, tiga){
//     this.name=satu;
//     this.age=dua;
//     this.job=tiga;
// }

// var siapa= new orang('Andi', 32,'Karyawan');
// siapa.state="Indonesia"
// delete siapa.age;
// console.log(siapa)

// function orang(satu, dua, tiga){
//     this.nama=satu;
//     this.umur=dua;
//     this.pekerjaan=tiga
// }
// var dia= new orang('Harun', 45,'Fulltime');
// console.log(dia.nama)
// console.log(dia.umur)
// console.log(dia.pekerjaan)

// //property array>>
// var ialah= {
//     nama:['Andi', 'Ramlah', 'Hamdani'],
//     usia:50,
//     pekerjaan:'Guru PNS'
// };
// console.log(ialah)
// console.log(ialah.nama[0])
// console.log(ialah.nama[1])
// console.log(ialah.nama[2])

//property array 2>>
// function orang(namaawal, namaakhir, usia) {
//     this.nama=[namaawal, namaakhir];
//     this.usia= usia;
// }
// var Ika = new orang ('Ika', 'Winda sari', 27);
// console.log(Ika)
// console.log(Ika.nama[0])
// console.log(Ika.nama[1])

//accessing object method
var orang = {
    namaDepan: "Frangky",
    namaBelakang: "Raintama",
    usia: 45,
    namaLengkap: function(){
        return this.namaDepan+" "+this.namaBelakang;
    }
}
console.log(orang.namaLengkap)
console.log(orang.namaLengkap())

// acessing object properties
// var orang = {
//     namaDepan:"Andi", usia: 50, job: "politisi"
// };
// console.log(orang.namaDepan+' Usianya '+ orang.usia+' Tahun') //bisa pake ini atau
// console.log(orang["namaDepan"]+ ' Seorang '+ orang["job"]+'.')//yg ini. hasilnya sama




// //adding new method
// function person(x,y,z) {
//     this.namadepan=x,
//     this.namabelakang=y,
//     this.usia=z,
//     this.gantinama= function(a) {
//         this.namabelakang = a
//     }
// }
// var Andi= new person('ANdi','SUsilo', 29)
// console.log('Nama saya '+Andi.namadepan+' '+ Andi.namabelakang)

// Andi.gantinama('Gajeles')
// console.log('pas Ke papua, saya diganti jadi '+Andi.namadepan+' '+Andi.namabelakang)

//cek properties
// var manusia= {
//     kepala:1,
//     mata:2,
//     telinga:2,
//     tangan:2,
//     kaki:2
// };
// var namaProperties;
// for (namaProperties in manusia) {
//     console.log(namaProperties + " : " + manusia[namaProperties]);
// }

//Inheritance
// function orang (nama, usia, pekerjaan) { //parameter
//     this.name=nama;
//     this.age=usia;
//     this.job=pekerjaan;
// } function atlit(nama, usia, pekerjaan, cab, pres) { //parameter
//     orang.call(this, nama, usia, pekerjaan)
//     this.cabangOlahraga=cab;
//     this.prestasi=pres;
//     }
// var Andi= new atlit('Andi',25, 'GUru Olahraga', 'Catur', 'Juara 1');
// console.log(Andi)

//inheritance wihthout parameter
// function pizza () {
//     this.diameter=30;   
// }
// function pizzaKeju() {
//     pizza.call(this)
//     this.toping='Keju';
//     this.harga='50k';
// }
// var satu=new pizzaKeju();
// console.log(satu)
