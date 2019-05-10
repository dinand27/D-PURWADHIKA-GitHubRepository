// function satu(x, fn) {
//     console.log("Nilai X : " + x)

//     fn()
// }

// function dua() {
//     console.log("Dari function kedua")
// }

// // satu(5, dua)

// function tiga(q, fn) {
//     console.log("Nilai Q : " + q);

//     empat(q)
//     fn()
// }

// function empat(w) {
//     console.log(w + " kali 2 adalah : " + (w * 2))
// }

// // tiga(3, empat)

// // Nilai Q : 3
// // 3 kali 2 adalah 6
// // undefined kali 2 adalah undefined

// function lima(x, fn) {
//     console.log("X kuadrat adalah " + (x * x))

//     fn()
// }

// // lima(5, function() {console.log(x)})

// function enam(x, fn) {
//     var num1 = 25
//     var num2 = 35

//     console.log("Nilai x adalah " + x);

//     fn(num1, num2)
// }

// function tujuh (x, y) {
//     console.log(x + " ditambah " + y + " sama dengan " + (x +y));

// }

// // enam(9, tujuh)

// function delapan () {

//     return function() {
//         console.log("Function hasil return dari function delapan");

//     }

// }

// var hasil = delapan()

// hasil()

// function last () {}
// function terakhir () {}
// function please () {}

// please(last) //nilainya function

// please(terakhir()) //nilainya hasil
 function last () {
     console.log('Dari Function Last');
     return 4
 }
 function terakhir () {
     console.log('Dari function terakhir');
     return 5
 }
 function please (unknown) {
     console.log('Isi dari unknown adalah'+unknown);
 }