let arrManusia = [
    {nama: 'Alex', umur: 22, job: 'DEV'},
    {nama: 'Alicia', umur: 32, job: 'DEV'},
    {nama: 'Alona', umur: 26, job: 'DEV'},
    {nama: 'Batios', umur: 33, job: 'CEO'},
    {nama: 'Bakhti', umur: 38, job: 'PM'},
    {nama: 'Charlee', umur: 27, job: 'CTO'}
];

let arrJob = ['All' ,'DEV', 'CEO', 'PM', 'CTO'];
//fungsi mapping
var funShow=()=>{
    var listManusia= arrManusia.map((val) =>{
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr> `
      })
    var listJob= arrJob.map((val) => {
        return `<option> ${val}</option>`
    })
    document.getElementById('here').innerHTML=listManusia.join(' ')
    document.getElementById('job').innerHTML=listJob.join(' ')
}
funShow()


var funInput = () => {
    var Nama = document.getElementById('nama').value
    var Umur = document.getElementById('umur').value
    var Job = document.getElementById('jobInput').value
    var converseJob= Job.toUpperCase()

        arrManusia.push ({
        nama: Nama,
        umur: Umur,
        job: converseJob
    }) 
    if (arrJob.includes(converseJob)== false){
        arrJob.push(converseJob)
    }

     funShow()
}
//fungsi filter Nama
var funFilterName = () => {
    var filter = document.getElementById('search').value
    var test= []
    var list= []
    for(var i= 0; i< arrManusia.length; i++){
        var name= arrManusia[i].nama.toLowerCase()
        var input = filter.toLowerCase()
        if(name.includes(input)){
            test.push(arrManusia[i])
        }
    }
    list= test.map(val=> {
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr> `
    })
    document.getElementById('here').innerHTML=list.join('')
 }
 
//funfilter umur
funFilterUmur= () =>{
var num1= document.getElementById('num1').value
var num2= document.getElementById('num2').value
if(!(num1== '' || num2== '')){
var list= arrManusia.filter(val => {
    return (val.umur >= num1 && val.umur <= num2)
}) 
list=list.map(val =>{
    return `<tr>
    <td>${val.nama}</td>
    <td>${val.umur}</td>
    <td>${val.job}</td>
    </tr> `
})
document.getElementById('here').innerHTML=list.join('')

}
}
 
//filter job
var funFilterJob= () => {
    var selectedJob= document.getElementById('job').value
    if(!(selectedJob == 'All')){
        var list = arrManusia.filter ( val => {
            return (val.job.includes(selectedJob))
        })
    } else {
        var list = arrManusia
    }
    list=list.map(val =>{
        return `<tr>
        <td>${val.nama}</td>
        <td>${val.umur}</td>
        <td>${val.job}</td>
        </tr> `
    })
    document.getElementById('here').innerHTML=list.join('')
}

//coba tambah programmnya :
//tombol search job diganti jadi tombol Search Data
//jika data sudah ada , jangan sampai ada nama yang sama
