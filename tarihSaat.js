let isim = prompt("Kullanıcı adınızı giriniz:")
let myName = document.querySelector("#myName")
myName.innerHTML = `${isim}`

function tarihSaat(){  
    let gunler=new Array("pazar","pazartesi","salı","çarşamba","perşembe","cuma","cumartesi");
    let tarih = new Date()
    let date = new Date().toLocaleTimeString('tr-TR')
    let myClock = document.querySelector("#myClock")
    myClock.innerHTML = `${date + " " + gunler[tarih.getDay()]}`
}
setInterval(tarihSaat, 1000)