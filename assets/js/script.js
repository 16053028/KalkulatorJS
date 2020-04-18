/* 
=========================
       PSEUDO-CODE 
=========================
Deklarasi :
stringCommand = "", hasil = "" as string ; //deklarasi variabel

Deskripsi :
// Fungsi tampilAngka(param a){ param adalah kepanjangan dari parameter.
    set.inputBox.value += param a;
    set.var.stringCommand += param a;
}

// Fungsi operator(param o){ param adalah kepanjangan dari parameter
    set.var.hasil = get.inputBox.value;
    set.var.stringCommand += param o;
    set.inputBox.value = "";
}

//Fungsi proses(){
    hasil = eval(stringCommand);
    set.inputBox.value = hasil;
    set.var.stringCommand = "" + hasil;
}

 =========================*/
// IMPLEMENTASI PSEUDO-CODE
/* ========================= */

// Deklarasi variabel lokal
var stringCommand = "", hasil = "";

// Fungsi menampilkan angka pada inputBox komponen
function tampilAngka(a) {
    document.querySelector('#inputBox').value += a;
    stringCommand = stringCommand + a;
    console.log(stringCommand);
}

// Fungsi menampilkan operator pada inputBox komponen
function operator(o){
    hasil = document.querySelector('#inputBox').value;
    stringCommand = stringCommand + o;
    document.querySelector('#inputBox').value = "";
}

// Fungsi melakukan perhitungan dan menampilkan hasilnya di inputBox komponen
function proses(){
    hasil = eval(stringCommand);
    document.querySelector('#inputBox').value = hasil;
    stringCommand = "" + hasil;
    console.log("Hasil = " + hasil);
}

//Fungsi fitur masih dalam pengembangan
function pengembangan(){
    alert("Fitur ini masih dalam tahap pengembangan.");
}