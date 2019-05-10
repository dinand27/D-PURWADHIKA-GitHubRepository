/*var mobil=['toyota', 'Daihatsu', 'Mitsubhisi'];
console.log(mobil[0])
console.log(mobil[1])
console.log(mobil[2])*/
//array element

/*var buah, bpjg, i
buah=['Jeruk','Nanas','Pepaya'];
bpjg=buah.length;
for(i=0; i<bpjg; i++){
    console.log(buah[i]);

var mobil=['Arius', 'Calya','BmW', 'Mitsubhisi','Daihatsu'];
console.log(mobil);
console.log(mobil.toString());
console.log(mobil.join(' & '));//ini function array dan join
console.log(mobil.sort());
console.log(mobil.reverse());//membalik posisi akhir ke posisi awal
console.log(mobil.indexOf('Daihatsu')); */
//pop n push
var buah =['Jeruk', 'Nanas', 'Mangga', 'RAMBUTAN', 'dURIAN'];
// buah.pop();//fungsi pop menghilangkan variabel mangga yg paling akhir
// console.log(buah);
// buah.push('Kiwi');// fungsi push menambahkan kiwi
// console.log(buah);
// buah.shift();//shift mengeluarkan variabel awal
// console.log(buah)
// buah.unshift('Minggu')
//console.log(buah);
// buah.splice(1,4,'Gersen','Menganga','melintang');//1 artinya 'Gersen akan ditambahkan pada index ke-1, dan 2 artinya  ada data yang akan dihapus dan akan digantikan oleh
//  console.log(buah);
// delete buah[0];
// console.log(buah);
// console.log(buah)
// var buah2=buah.slice(1);//dimulai dr index ke
// console.log(buah)
//  var buah4=buah.slice(0,4)// 0 artinya dimulai dari index ke 0 sampai batas index 4 nda dipake
// console.log(buah4)
//di array, kita bisa menambah data baru ke dalam index
// buah[5]='Belimbing'//jika kita menulis [6] maka akan di Alert 1 empty item
// console.log(buah)
var nama1=['ANdy','Rudy']
var nama2=['Cyndi', 'Rini']
var hasil=nama1.concat(nama2) //concat untuk menambahkan array
console.log(hasil)