let ad = prompt("Lütfen adınızı giriniz.");
    document.querySelector("#myName").innerHTML = ad;

function showTime(){
    
    let d = new Date();
    let saat = d.getHours();
    let dakika = d.getMinutes();
    let saniye = d.getSeconds();
    let gun = d.getDay();
    let tarih = document.querySelector("#myClock");
    let days = ['Pazar','Pazartesi','Salı','Çarşamba','Perşembe','Cuma','Cumartesi']
    tarih.innerHTML = `${saat}:${dakika}:${saniye}:${days[gun]}`;
}

showTime();