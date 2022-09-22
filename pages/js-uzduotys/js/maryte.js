var marytes_obuoliai = 10;
var jonuko_obuoliai = 9;

 var bendri_obuoliai = marytes_obuoliai + jonuko_obuoliai;
 console.log(bendri_obuoliai)
//--
 var number = 8;
 var snumber = 2;

 number += snumber;
 console.log(number)
//--
if (marytes_obuoliai > jonuko_obuoliai){
console.log("Marytė turi daugiau obuolių nei Jonukas.")
} else if (marytes_obuoliai < jonuko_obuoliai) {
console.log("Jonukas turi daugiau obuoliu nei Maryte.")
}else{
    console.log("Atiduokime obuolius Editai.") 
}
// arba galima prašyti salygą else if (marytes_obuoliai == jonuko_obuoliai){
//     console.log("Atiduokime obuolius Editai.")
// }


//---
var mano_obuoliai=3;

switch (mano_obuoliai) {
    case 1:
        console.log('Jūs turite ' + mano_obuoliai + ' obuolį' );
        break;
    case 2:
        console.log('Jūs turite ' + mano_obuoliai + ' obuolius' );
        break;
    case 3:
        console.log('Jūs turite ' + mano_obuoliai + ' obuolius' );
        break;
    default:
        console.log("Obuolių kiekis nežinomas, nes reikšmė nepatenka į sarašą");
    }

//---
vaisiai =["Obuoliai" , "Kriaušės", "Bananai", "Apelsinai", "Mandarinai", "Vynuogės", "Ananasai"]

console.log(vaisiai[2], vaisiai[4]);

for( i=0; i < vaisiai.length; i++){
console.log(vaisiai[i]);
}

console.log("----------------------")
console.log("Antrojo video uzduotis")
console.log("----------------------")

function product(name, price){
    console.log("Product "+ name + " $" + price)
}

product("Skietis", 2.50);

// console.log("----------------------")
// console.log("po 5-ojo viedo  1 js izduociu 1 -oji uzduotis")
// console.log("----------------------")

// var div_text = document.getElementById("moku");
// console.log(div_text);
// div_text.innerText="Valio Pavyko";
// div_text.style.background="green";
// div_text.style.width="300px";
// div_text.style.height = "300px";
// div_text.style.margin="0 auto";

// console.log("----------------------")
// console.log("po 5-ojo viedo 1 js izduociu 2 -oji uzduotis")
// console.log("----------------------")

// var divas = document.createElement("div");
// divas.setAttribute("id","moku.");
// divas.innerHTML="Valio pavyko"
// divas.style.background="green";
// divas.style.width="300px";
// divas.style.height = "300px";
// divas.style.margin="0 auto";
// document.body.appendChild(divas);
// button = document.createElement("button");
// button.setAttribute("id","spauduliukas");
// button.innerHTML="Spauduliukas";
// document.body.appendChild(button);
// button.addEventListener("click", function(e){
//     divas.style.display="none";
//     this.style.display="none";
// })

// console.log("----------------------")
// console.log("po 5-ojo viedo  1 js izduociu  3 -oji uzduotis")
// console.log("----------------------")
// var btn = document.createElement("button");
// btn.innerHTML="KARAMBA";
// document.body.appendChild(btn);
// btn.addEventListener("click",function(){
//     var frame=document.createElement("iframe");
//     frame.setAttribute("src","https://www.youtube.com/embed/pRpeEdMmmQ0");
//     frame.width = "560px";
//     frame.height = "315px";
//     frame.setAttribute("frameborder","0");
//     frame.style.display="block";
//     document.body.appendChild(frame);
//     frame.style.margin="0 auto";
// })



// console.log("----------------------")
// console.log("2 js uzduociu  1 -oji uzduotis")
// console.log("----------------------")

// function megstu(){
//     document.body.innerHTML="Mėgstu programuoti.Yey ☺";
// }
// megstu();

// console.log("----------------------")
// console.log("2 js uzduociu  2 -oji uzduotis")
// console.log("----------------------")

// function kainos_skaiciavimas(kaina, pavadinimas){
//     var kaina = kaina*5;
//    return "Penki " + pavadinimas + " kaina " + kaina; 
// }

// // document.body.innerHTML= kainos_skaiciavimas(2, "kriausiu");
// var atsakymas = kainos_skaiciavimas(5, "Apelsinai");
// var divas = document.createElement("div");
// divas.innerHTML=atsakymas;
// document.body.appendChild(divas);

console.log("----------------------")
console.log("2 js uzduociu  3-oji uzduotis")
console.log("----------------------")

// 1. pasidaryti HTML.
// 2. Paiimti reiksmes.
// 2.1 issiaiskiniti kaip paiimti reiksmes
// 3.suskaiciuoti.
// 4. Atvaizsuoti ekrane.
function kainos_skaiciavimas(kaina, pavadinimas, kiekis){
    var suma = kaina*kiekis;
       return  pavadinimas + " :" + kiekis + " X " + "$" + kaina + " viso moketi " + suma; 
    }
   
var btn=document.getElementById("prideti");
    btn.addEventListener("click", function(){
        var pavadinimas = document.querySelector('input[placeholder=Pavadinimas]').value;
        var kaina = document.querySelector('input[placeholder=Kaina]').value;
        var kiekis = document.getElementById("kiekis").value;
        ats=kainos_skaiciavimas(kaina, pavadinimas, kiekis);
        var divuks=document.createElement("div");
        divuks.innerHTML=ats;
        document.body.appendChild(divuks);
    })
























