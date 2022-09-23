


//---- nr1

class futbolistas {
    constructor(vardas, pavarde, ugis, amzius, begimo_greitis){
        this.vardas =vardas;
        this.pavarde = pavarde;
        this.ugis = ugis;
        this.amzius = amzius;
        this.begimo_greitis=begimo_greitis
    }
    get asmuo () {
        return this.duomenys();
    }

    duomenys(){
        return this.vardas+ " "+this.pavarde +" ugis mm: " + this.ugis + " amzius: " + this.amzius + " begimo_greitis: " + this.begimo_greitis + " km/h"
    }

}
const futbolistas_1 = new futbolistas("Kestas", "Atenietis", 185, 30, 42);
const futbolistas_2 = new futbolistas("Robertas", "Bardauskas", 195, 25, 28);
const futbolistas_3 = new futbolistas("Gregoras", "Baltazaras", 175, 28, 52);

var visi_futbolistai = [futbolistas_1, futbolistas_2, futbolistas_3]

var del_begimo=[futbolistas_1.begimo_greitis,futbolistas_2.begimo_greitis,futbolistas_3.begimo_greitis].sort(function(a, b){return b-a})



function greiciausias(){
    for(i=0; i < visi_futbolistai.length; i++){
        if(visi_futbolistai[i].begimo_greitis === del_begimo[0]){
           return visi_futbolistai[i].vardas
        }
    }
}



var uls=document.createElement("ul");
    uls.innerHTML="<strong>Kandidatai:<strong>";
    document.body.appendChild(uls)
    li = document.createElement("li");
    li.innerHTML = futbolistas_1.asmuo
    uls.appendChild(li)
    li = document.createElement("li");
    li.innerHTML = futbolistas_2.asmuo;
    uls.appendChild(li)
    li = document.createElement("li");
    li.innerHTML = futbolistas_3.asmuo;
    uls.appendChild(li)
    li=document.createElement("li")
    li.innerHTML= "Pats greiciausias yra " + greiciausias();
    uls.appendChild(li)
   
 
///--------- nr2

// class Automobilis {
//     constructor(brand, speed, distance ){
//         this.brand =brand;
//         this.speed = speed;
//         this.distance = distance;
//     }
//     get detales () {
//         return this.duomenys();
//     }

//     duomenys(){
//         return "Pavadinimas:  " + this.brand+ "  ,Greitis:  "+this.speed + " ,Nuvaziuotas kelias:  " + this.distance;
//     }

//     nuvaziuotas(){
//         return this.distance;
//     }

// }

// const Automobilis_1 = new Automobilis("BMW", 150, 300);
// const Automobilis_2 = new Automobilis("Mercedes", 250, 1000);
// const Automobilis_3 = new Automobilis("Walkswagen", 180,800 );
// const Automobilis_4 = new Automobilis("Land Rover", 150, 400);
// const Automobilis_5 = new Automobilis("Audi", 190, 600);

// array =[Automobilis_1, Automobilis_2, Automobilis_3, Automobilis_4, Automobilis_5]

// toliausiai = [Automobilis_1.nuvaziuotas(), Automobilis_2.nuvaziuotas(), Automobilis_3.nuvaziuotas(),Automobilis_4.nuvaziuotas(),Automobilis_5.nuvaziuotas()];
// var pats_daugiausiai=toliausiai.sort(function(a, b){return b-a})
//     pats_daugiausiai=pats_daugiausiai[0]
// console.log(array[0].distance, pats_daugiausiai)

// function nuvaziuota_toliausiai(){
//     for (let i = 0; i< array.length; i++){
//         if (array[i].distance === pats_daugiausiai){
//            return array[i].brand
//         }
//     }
// }

// var uls=document.createElement("ul");
//     document.body.appendChild(uls)
// var button = document.createElement("button")
// button.innerHTML = "Kurti Automobilius"
// document.body.appendChild(button)
//     button.addEventListener("click", function(){
//         for(i=0; i < array.length; i++){
//         var li = document.createElement("li");
//         li.innerHTML = array[i].detales
//         uls.appendChild(li)
//         }
//         li=document.createElement("li");
//         li.innerHTML ="Daugiausiai nuvazeves yra "+ "<strong>" +nuvaziuota_toliausiai();+"</strong> "
//         uls.appendChild(li)
//     })












    