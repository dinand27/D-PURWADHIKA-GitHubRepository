var arrNumb=[10,12,2,20,23,50,5]
console.log(arrNumb.sort());
console.log(arrNumb.sort(function (a,b){ /*artinya, dalam array Number diconsole mnggunakan funtion (a,b) 
    dimana angka didalam array akan direturn hasil yang a-b akan menghasilkan bilangan 1 < 0 
    maka bil a lebih dulu. jika bilangan 2 < 0, maka bilangan b lbh dluan */
    return a-b
}))

console.log(arrNumb.sort(function (a,b){ //descending
    return b-a
}))