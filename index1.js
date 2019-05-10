//object mampu menyimpan data seperti array
//jika pada array menggunakan index, object menggunakan Property
//mampu menyimpan data apapun (string, number, bollean, undifined)
//jika ARRAY dimulai dengan [], maka OBJECT dimulai dengan {}
var objek1= {namaDpn: "Andi", namaBlk: "Susilo", usia: 50}
var objek2={
    namaDpn: "Baron", 
    namaBlk: "infused",
    usia:25,
    namaFull : function(){
        return this.namaDpn +" "+ this.namaBlk //didalam object juga bisa dimasukkan function
    },
    sayhello: function(nama){
        console.log("Hai "+nama);
    }
}
//CARA PANGGIL:
// console.log(objek1);
// console.log(objek1.namaDpn);
// console.log(objek1.usia);
// console.log(objek2.namaDpn);
// console.log(objek2.namaBlk);
// var namalengkap = objek2.namaFull();
// console.log(namalengkap);

// objek2.sayhello(objek2(namaFull()));

//object constractor
// var manusia= function(nama, umur, job){ //FUNCTION EKSPRESI
//     this.namadepan=nama
//     this.usia=umur
//     this.pekerjaan=job
// } //artinya sebuah function 'Manusia' menyimpan 3 variabel
// var satu=new manusia("Andi", 30, "PNS")
// console.log(satu);

// function manusia2(nama,umur,job) { //FUNCTION DEKLARASI
//     this.namadepan=nama
//     this.usia=umur
//     this.pekerjaan=job
//     }
// var data= new manusia2("Aldi", 45, "Guru")
// console.log(data)
// satu.usia=function()

var objOne= {
    PropOne:"String biasa",
    PropTwo: {
        subPropOne:23,
        subPropTwo: function(){ console.log("sub Property Two");}
    }
}
//kalau panggil 23 :
console.log(objOne.PropTwo.subPropOne);
//kalau digabung

console.log(objOne.PropTwo.subPropOne+objOne.PropTwo.subPropTwo());
