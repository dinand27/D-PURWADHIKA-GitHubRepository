       var nama='Ferdinand'
       var nilmtk=85
       var nilbi=80
       var nilbing=80
       var nilipa=90
       var nilrata2=(nilmtk+nilbi+nilbing+nilipa)/5
       console.log('\n Nama Siswa : '+nama);
       console.log('Nilai Matematika : '+nilmtk);
       console.log('Nilai Bahasa Indonesia :'+nilbi);
       console.log('Nilai Bahasa Inggris : '+nilbing);
       console.log('Nilai Ilmu Pengetahuan Alam : '+nilipa);
       console.log('Nilai Rata = '+nilrata2);

      if (nilrata2 >= 85) {
        console.log('Index Nilai : A');
       }else if(nilrata2 >=76 ) {
        console.log('Index Nilai : B');
       }else if(nilrata2 >= 66 ){
        console.log('Index Nili : C');
       }else if(nilrata2 >= 55 ){
        console.log('Index Nilai : D');
       }else { 
        console.log('Index Nilai : E');
        }
    if (nilrata2 >=66){
        console.log('SELAMAT!! Anda dinyatakan Lulus!');
    }else {console.log('Maaf anda berakhir sampai disni');}
      
