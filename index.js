// saldo yang kita punya
let saldo = 200000


let pin = prompt("silakan masukan PIN anda");
// pin nya adalah 9655. Jika kita memasukan selain 9655 maka yang akan terjadi adalah "PIN yang anda masukkan salah. Silakan refresh page ini"
if (pin == "9655"){
    let operator = prompt("Pilih transaksi yang anda inginkan 1 : mengisi saldo, 2 : Penarikan saldo, 3 : informasi saldo");
    let hasil;
    if (operator == "1"){
    // Bagian 1 (pengisi saldo)
        let isiSaldo = prompt("Masukkan jumlah dana yang ingin di isi ");
        hasil = saldo + parseInt(isiSaldo);
        alert(hasil);
    }else if(operator == "2"){
    // Bagian 2 (penarikan saldo)
        // let tarikSaldo = prompt("Pilih jumlah yang ingin di tarik A : RP 100000 B : RP 300000 C : 500000 D : 1000000 E : Memilih yang lain");
        // if(operator == "A"){
        //     hasil = saldo - ;
        //     alert(hasil)
        // } (GAGAl)
        let tarikSaldo = prompt("Masukan jumlah dana yang ingin di tarik");
        hasil = saldo - parseFloat(tarikSaldo)
        if(hasil < 0){
            alert('Maaf, saldo anda tidak mencukupi untuk menarik dana. Silakan mengisi saldo anda')
        }else{
            alert(hasil);
        }
    }else if(operator == "3"){
    // Bagian 3 (informasi saldo)
        let cekSaldo = saldo;
        alert(cekSaldo)
    }else{
        console.log("error");
    }
} 
else{
    alert ("PIN yang anda masukkan salah. Silakan refresh page ini")
};