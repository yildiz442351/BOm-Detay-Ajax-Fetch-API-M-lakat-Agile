//Navigator   - tarayicida cesitli bilgilere ulasmayi saglar

console.log(navigator.cookieEnabled) //cerezlerin aktif mi?

//Cookies - Cerezler
document.cookie = "kadi = yıldız, sifre = onaran"

let alinanBilgiler = document.cookie.split(",")
console.log(alinanBilgiler[0])
console.log(alinanBilgiler[1])


//WEP BROWSER API
function konumAl() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(goster)
        // navigator.geolocation.watchPosition(goster)
    } else {
        console.log('lokasyon desteklenmiyor')
    }
}

konumAl()

function goster(pozisyon) {
    console.log(pozisyon.coords.latitude)
    console.log(pozisyon.coords.longitude)
}

//sayfalar arasi gecis window.history.go(-2)

//Storage
localStorage.setItem('isim', "yıldız")
localStorage.setItem('sifre', "onaran")

const adi = localStorage.getItem('isim')
const sifremiz = localStorage.getItem('sifre')
console.log(adi)
console.log(sifremiz)


//Worker
function uyar() {
    const worker = new Worker("second.js")
    worker.postMessage("uyari sistemleri aktiflessin")
    setTimeout(() => {
        worker.terminate()
    }, 3000);
}

//Fetch https://api.publicapis.org/entries

async function verileriAl() {
    const donut = await fetch('https://api.publicapis.org/entries')
    console.log(donut)

    const hayvanlar = await donut.json()
    console.log(hayvanlar)
}


/* 
Kullanici ilgili buttona tikladiginda fetch async await
gidip url den json verileri alip getirip ekrandan yazan bir
uygulama yapiniz

*/

//AJAX 

function yeniVeriAl1() {
    const xhttp = new XMLHttpRequest()
    xhttp.onload = function () {
        console.log(this.responseText)
        console.log(this.status)
        console.log(this.getAllResponseHeaders())


    }
    xhttp.open('GET', "veriler.json", true)
    xhttp.send()

}

const yKisi = {
    ad: "yıldız",
    dTahih: 1997,
    ulke: "türkiye"
}

//Parse -> string json i js objesine cevirir
const kisi = '{"name":"John", "birth":"1986-12-14", "city":"New York"}'
const kisiJson = JSON.parse(kisi)
console.log(kisiJson.name)
console.log(kisiJson.city)
console.log(yKisi)

//Stringfy -> js objesini string json a cevirir
const yKisiJson = JSON.stringify(yKisi)
console.log(yKisiJson)
