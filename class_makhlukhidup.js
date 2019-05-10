// 1.Bernafas
// 2. Bernyawa
// 3. Berkembangbiak
// 4. Berakal
// 5. Harus Kerja/berburu
// 6. Harus Makan
class makhlukHidup {
    constructor(nfs,nyw,kmb,akl) {
        this.bernafas= nfs;
        this.bernyawa= nyw;
        this.berkembangbiak= kmb;
        this.berakal= akl;
    } bekerja(){
        console.log('Memang Harus BEkerja')
    } makan() {
        console.log('Butuh Makanan, klo ndak sakit \n')
    }
}
var manusia= new makhlukHidup('Iya Bernafas','Pasti Bernyawa', 'Sudah seharusnya dari Jaman Adam', 'Punya lah akal');
console.log(manusia.bernafas)
console.log(manusia.bernyawa)
console.log(manusia.berkembangbiak)
console.log(manusia.berakal)
manusia.bekerja()
manusia.makan()

class hewan extends makhlukHidup {
    constructor (nfs, nyw, telur, anak) {
        super(nfs, nyw) // Menjalankan constructor milik Makhluk Hidup
        this.bertelur = telur
        this.beranak= anak
    } buru(){
        console.log('Makan tapi harus berburu');
    }
}
var harimau= new hewan('Hewan ya Iya BErnafas', 'punya Nyawa juga',' Berkembang dengan cara berAnakcucu');
console.log(harimau.bernafas)
console.log(harimau.bernyawa)
console.log(harimau.beranak)
harimau.buru()


