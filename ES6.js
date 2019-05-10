// var nilai =5
// var nilai = 10
// console.log(nilai)

// let angka=15
// angka=25
// console.log(angka) //hasil keduanya sama. kecuali jika kita pakai 'let' maka variabel tdk bisa krn sdh pernah dipakai

// variabel const untuk sebuah nilai yang baku.
// const baku=3.14
// console.log(baku)

//perbedaan ES6 dan yang sebelumnya
// var nama='Dinand', umur= 32, pekerjaan='Student'

// var textlama='Namaku '+nama+', Umurku adalah '+umur+', Pekerjaanku adalah '+pekerjaan
// var textEs6=`Namaku ${nama} 
// Umurku adalah ${umur} Tahun, dan 
// Pekerjaanku ${pekerjaan}` //ditutup dengan tanda thick ` selama didalam, bisa dienter
// console.log(textlama)
// console.log(textEs6)

// var buah=['Apel','Belimbing']
// var nama=['Andi', 'BRandon']
// var hari=[...buah,'Senin', 'Selasa'] //menambahkan ISI dari array buah ke dalam index ke n di array hari
// console.log(hari)

// let number=[1,2,3]
// function jumlah(x,y,z) {
//     console.log(x + y + z);
// }
// jumlah(number[0],number[1],number[2]) //cara lama atau
// jumlah(...number) //cara ES6

// //default parameter
// function jumlah(a, b=2, c=3){
// return (a+b)*c }
// console.log(jumlah(2)) //dimana jumlah yang diinput disini akan jadi variabel 'a'

//arrow FUnction, beda cara penulisan
// var hitung=(a, b=2, c=3) => { //arrow function
//     return (a+b) * c
// } 
//contoh lagi
// let hai=() =>{console.log("HAI")}

// let halo= () => console.log('HALO') //klau hanya 1 baris tidak perlu pakai start {} end

// let hei=(nama) => {console.log(`Hei anu ${nama}`)}
// let heh= nama =>console.log(`Heh ${nama}`)
// const pai= () => {return 3.14}
// hai(); halo(); hei("sapanama kita"); heh('SIapalagi'); pai();

// var hitung= (x, y, fn) => {
// fn(x,y) //disni harus ada return
// }
// var kali=(a,b) =>{return a*b}
// var bagi= (a,b) => {return a/b }

// var hasilkali= hitung (4,5, kali)
// var hasilbagi= hitung(50,10, bagi)
// console.log(hasilkali);
// console.log(hasilbagi)

//fungsi me-return fungsi
// var retFunction = (teks) => {
//     return (text) => {
//         console.log(`Teks adalah ${teks} dan Text ialah ${text}`)
//     }
// }
// var hasil = retFunction('SPIDOL') //dimana SPIDOL akan dimasukkan ke dalam fungsi retFunction ke dalam teks
// hasil('PAPAN TULIS') //maka PAPAN TULIS akan menjadi variabel di dalam return text

//array filtering
//.filter() adalah sebuah fungsi yang menerima satu argument
//argument tersebut adalah function yang me-return antara TRUE / FALSE
//return new Array
//DAta pada array akan menghasilkan TRUE akan di PUSH ke new Array
// var arr=[0,1,2,3,4,5]
// var hasilFilter= arr.filter( (interval) => interval > 3);
// var hasilgenap= arr.filter( (interval) => interval % 2 == 0);
// console.log(hasilFilter)
// console.log(hasilgenap)

// array mapping
//function yg masuk ke MAP tidak harus bernilai TRUE/FalsE
//MAPPING merubah nilai/bentuk array dan menghasilkan new Array
// var arrNum=[1,4,9,16,25]
// var hasilMapping= arrNum.map( (val) => val*2)
// var hasilMapping2= arrNum.map( (val) => val>2)
// console.log(hasilMapping)
// console.log(hasilMapping2)

//tugas
// buatlah sebuah function tiruan seperti .filtering dan .mapping dan bisa memangil Array
//ini fungsi filtering, dimana akan mem-filter angka yang hanya habis dibagi 2
// let arr=[0,1,2,3,4,5]
// let funMap= (array) => {//membuat fungsi 'array'
// var hasil= [] //membuat array kosong
// for(var i=0;i < array.length; i++) {
//     if(arr[i] % 2 == 0) {
//         hasil.push(arr[i])
//     }
// }return hasil
// } 
// console.log(funMap(arr));

// //ini fungsi Mapping
// let arr=[1,4,9,16,25]
// let funMap= (array) => {//membuat fungsi 'array'
// var hasil= [] //membuat string kosong
// for(var i=0;i < array.length; i++) {
//     if(arr[i]) {
//         hasil.push(arr[i]*2)
//     }
// }return hasil
// } 
// console.log(funMap(arr));
//atau bisa juga
var funMap=(arr,fun)=> {
    var newArr=[]
    for(var i=0; i< arr.length; i++){
    newArr.push(fun(arr[i]))
} return newArr
}
var angka=[1,4,9,16,25]
var hasilMap=angka.map(val => val*2)

var hasilMapjs=funMap(angka, val=>val*2)
console.log(hasilMap)
console.log(hasilMapjs)