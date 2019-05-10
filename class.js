//membuat class template
// class manusia{
//     constructor(nama,usia,pekerjaan) {
//         this.name=nama
//         this.age=usia
//         this.job=pekerjaan
//     }
//  sayhello(){
//     console.log("Hello, I'm " +this.name);
// }
// }
// var manusia1= new manusia("Maikel", 28, "Pegawai NEgri")
// console.log(manusia1);
// manusia1.sayhello()

//Manusia, hewan, dan tumbuhan memiliki kesamaan:
//bernyawa
//ber tempat tinggal
//Sama2 Makan
//sama2 bernafas
//buat masing2 3 class
// Class
class MakhlukHidup {
    constructor(Rumah, hidup, kembangbiak){ // tempat membuat property
        this.tempatTinggal = Rumah
        this.nyawa = hidup
        this.brkmbg= kembangbiak
    }

    // tempat membuat method
    makan() {
        console.log("Sedang makan");
    }

    bernafas() {
        console.log("Sedang bernafas");
        
    }
}

class manusia extends MakhlukHidup {
    constructor (Rumah, hidup, akal){
        super(Rumah, hidup) // Menjalankan constructor milik Makhluk Hidup
        this.mind = akal
    }

    bekerja() {
        console.log("Sedang bekerja");
    }

}

var manusia2 = new manusia("Bumi", true, "Punya")
var hewan2= new hewan2("Bumi", true, "Tidak Punya")

console.log(manusia2.tempatTinggal);
console.log(manusia2.nyawa);
console.log(manusia2.mind);
manusia2.makan()
manusia2.bernafas()
manusia2.bekerja()

console.log(hewan2.tempatTinggal);
console.log(hewan2.nyawa);
console.log(hewan2.mind);
manusia2.makan()
manusia2.bernafas()
manusia2.bekerja()

// class hewan extends MakhlukHidup {
//     constructor (place, hidup, bertelur){
//         super(place, hidup) // Menjalankan constructor milik Makhluk Hidup
//         this.telur = bertelur
//    } berburu() { 
//        console.log('Sedang memburu mangsa'); }
// }
//     var hewan2= new hewan("hutan",false,"Bertelur")
//     console.log(hewan2.tempatTinggal);
//     console.log(hewan2.bernyawa);
//     console.log(hewan2.telur);
//     hewan2.berburu()


// Buat class Hewan
    // properties : bertelur, beranak
    // method: berburu

// Buat class Tumbuhan
    // properties: berbunga, berbuah
    // method : fotosintesis

// Manusia , hewan, dan tumbuhan
// Tempat tinggal -> property
// Bernyawa -> property
// Makan -> method
// Bernafas -> method
