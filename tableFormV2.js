
var fun1=() => {
    var Nama= document.getElementById("name").value
    var Umur= document.getElementById("age").value
    var sex=''
    var radio= document.getElementsByName('sex')
    for(var i = 0; i < radio.length; i++){ 
            if(radio[i].checked == true){
                sex = radio[i].value
            }
        }
    var Pekerjaan= document.getElementById('job').value

    var Tampil= document.getElementById("mans");
    var row=Tampil.insertRow(0).innerHTML=`<table>
    <tr>
     <td><center>${Nama} </center></td>
     <td><center>${Umur}</center></td>
     <td><center>${sex}</center></td>
     <td><center>${Pekerjaan}</center></td>
     </tr>
     </table> `
    }

    var fun2    =() => {
        var Nama= document.getElementById("nameH").value
        var Umur= document.getElementById("ageH").value
        var sexH=''
        var radio= document.getElementsByName('sexH')
        for(var i = 0; i < radio.length; i++){ 
                if(radio[i].checked == true){
                    sexH = radio[i].value
                }
            }
        var Status= ''
        var radio2=document.getElementsByName('Status')
        for(var i = 0; i < radio2.length; i++){ 
            if(radio2[i].checked == true){
                Status = radio2[i].value
            }
        }
        var Tampil2= document.getElementById("hews");
        var row=Tampil2.insertRow(0).innerHTML=`<table>
        <tr>
         <td><center>${Nama} </center></td>
         <td><center>${Umur}</center></td>
         <td><center>${sexH}</center></td>
         <td><center>${Status}</center></td>
         </tr>
         </table> `
        }