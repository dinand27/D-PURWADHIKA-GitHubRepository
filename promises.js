// //promise
// var library= new Promise(( berhasil, gagal) => { //promise adalah sebuah objek yg memiliki 2 fungsi
//     var buku= ['Matematika','Fisika']
//     if(buku.length == 0){
//         gagal('Buku Tidak tersedia')
//     } else { berhasil('Buku tersedia')}
// }
// )
// library.then((respon)=> {console.log(respon)} ).catch( (eror)=>{console.log(eror)})

//destructuring Object
let andi = {
    nama: 'Andi',
    usia: 24,
    job: 'PNS'
 }
 var { nama, usia, job } = andi;
 console.log(nama);
 console.log(usia);
 console.log(job);
 