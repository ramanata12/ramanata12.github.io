var dt = new Date();
document.getElementById("jam").innerHTML = dt.toLocaleTimeString();

function validasi() {
    var nama = document.getElementById("nama").value;
    var pesan = document.getElementById("pesan").value;
    if (nama != "" && pesan !="") {
        return true;
    }else{
        alert('Ayo isi pesannya !');
    }
}