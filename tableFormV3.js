var arrManusia = [], arrHewan = []

var fnManusia = () => {
    var namaMan = document.getElementById('name').value
    var umurMan = document.getElementById('age').value
    var pekerjaan = document.getElementById('job').value
    var gender = document.getElementsByName('gender')

    for(var i = 0; i < gender.length; i++){
        if(gender[i].checked === true){
            gender = gender[i].value
        }
    }

    arrManusia.push({
        name: namaMan,
        age: umurMan,
        job: pekerjaan,
        gender: gender
    })

    show(arrManusia, 'mans')

}

var fnHewan = () => {
    var name = document.getElementById('nameH').value
    var age = document.getElementById('ageH').value
    var gender = document.getElementsByName('sex')
    var job = document.getElementsByName('stat')

    for(var i = 0; i < gender.length; i++){
        if(gender[i].checked === true){
            gender = gender[i].value
        }
    }

    for(var i = 0; i < job.length; i++){
        if(job[i].checked === true){
            job = job[i].value
        }
    }

    arrHewan.push({
        name, age, gender, job
    })

    show(arrHewan, 'hews')
}




var show = (arrei, target) =>{
    var list = ''
    
    for(var i = 0; i < arrei.length; i++){
        list += `
        <tr>
            <td>${arrei[i].name}</td>
            <td>${arrei[i].age}</td>
            <td>${arrei[i].gender}</td>
            <td>${arrei[i].job}</td>
        </tr>
        `
    }

    document.getElementById(`${target}`).innerHTML = list;
}