
// susiskurti objekta
// pasiekti savybes metodu
// sukirti funkcija kuri atrastu pati greiciausia is futbolinku
// atvaizduoti per forEach futbolinkus 
// implementuoti atvaizduoti pati greiciausia futbolinka
// futbolistai = [
//     {
//         name:"Jonas",
//         surname:"Samarietis",
//         ugis:190,
//         amzius:25,
//         begimo_greitis:30
//     },
//     {
//         name:"Antanas",
//         surname:"Barkauskas",
//         ugis:195,
//         amzius:30,
//         begimo_greitis:42
//     },
//     {
//         name:"Romas",
//         surname:"Atenientis",
//         ugis:179,
//         amzius:22,
//         begimo_greitis:28
//     },
    
// ]


// var greiciausias = []
// var greiciausias_1;
// function geriausias_begikas(futbolistai){
//     futbolistai.forEach(element => {
//         greiciausias.push(element.begimo_greitis);
//          greiciausias_1=greiciausias.sort(function(a, b){return a - b});
//         greiciausias_1=greiciausias[greiciausias.length-1]
      
//     });
//     return greiciausias_1   
// }

//     var uls=document.createElement("ul");
//     uls.innerHTML="<strong>Kandidatai:<strong>";
//     document.body.appendChild(uls)
//     var divuks = document.createElement("div");


//     futbolistai.forEach(element => {
//        var lis=document.createElement("li");
//        lis.innerHTML =element.name+ " " + element.surname;
//        uls.appendChild(lis)
//         if (element.begimo_greitis === geriausias_begikas(futbolistai)){
//             divuks.innerHTML = " <br>Pats greicias :" +"<strong style='font-style:italic'>"+ element.name + " " + element.surname+ "</strong>"  + ", kuris bega  " + element.begimo_greitis + " km/h greiciu."
//         }
//         uls.appendChild(divuks)
//     });



       
/// uzduotis nr 2
    


// Constructor function for Person objects
// function Cars(Brand, speed , distance) {
//   this.Brand= Brand,
//   this.speed = speed,
//   this.distance = distance,
//     this.travled =function (){

//         // return this.distance / this.speed;
//         console.log("ffff")
//     }
// }

// Create a Person object
// const mycar = new Cars("BMW", 220, 50,);
//     console.log(mycar)


// const Brands = ["BMW", "Ferrary", "Vauxall", "Mercedes"];
// const Speed = [220, 300,220, 180, 450, 200, 200];
// const distance = [3000, 200000, 100000, 100000, 50000, 150000];





// var button=document.createElement("button");
//     button.innerHTML="Konstruoti";
//     document.body.appendChild(button)

//     button.addEventListener("click", function(){
//         // const rand_brand = Math.floor(Math.random() * Brands.length);
//         // const rand_speed = Math.floor(Math.random() * Speed.length);
//         // const rand_distance = Math.floor(Math.random() * distance.length);
//         // var mycar1= new Cars(Brands[rand_brand],Speed[rand_speed],distance[rand_distance]);
//         //  var mycar2= new Cars(Brands[rand_brand],Speed[rand_speed],distance[rand_distance]);
//         //  var mycar3= new Cars(Brands[rand_brand],Speed[rand_speed],distance[rand_distance]);
//         //  var mycar4 = new Cars(Brands[rand_brand],Speed[rand_speed],distance[rand_distance]);
//         //  var mycar5 = new Cars(Brands[rand_brand],Speed[rand_speed],distance[rand_distance]);
//         var mycar1= new Cars("BMW",220,3500);
//         var mycar2= new Cars("Vaxaull",180, 1001);
//         var mycar3= new Cars("Mercedes",350,180);
//         var mycar4= new Cars("Walksvagen",320,210);
//         var mycar5= new Cars("Mazda",350,310);
//         console.log(mycar1, mycar2,)
//     })


    
// console.log(Cars.travled)

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
const futbolistas_3 = new futbolistas("Gregoras", "Baltazaras", 175, 28, 20);

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
   
 

