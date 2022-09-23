
// susiskurti objekta
// pasiekti savybes metodu
// sukirti funkcija kuri atrastu pati greiciausia is futbolinku
// atvaizduoti per forEach futbolinkus 
// implementuoti atvaizduoti pati greiciausia futbolinka
futbolistai = [
    {
        name:"Jonas",
        surname:"Samarietis",
        ugis:190,
        amzius:25,
        begimo_greitis:30
    },
    {
        name:"Antanas",
        surname:"Barkauskas",
        ugis:195,
        amzius:30,
        begimo_greitis:42
    },
    {
        name:"Romas",
        surname:"Atenientis",
        ugis:179,
        amzius:22,
        begimo_greitis:28
    },
    
]


var greiciausias = []
var greiciausias_1;
function geriausias_begikas(futbolistai){
    futbolistai.forEach(element => {
        greiciausias.push(element.begimo_greitis);
         greiciausias_1=greiciausias.sort(function(a, b){return a - b});
        greiciausias_1=greiciausias[greiciausias.length-1]
      
    });
    return greiciausias_1   
}

    var uls=document.createElement("ul");
    uls.innerHTML="<strong>Kandidatai:<strong>";
    document.body.appendChild(uls)
    var divuks = document.createElement("div");


    futbolistai.forEach(element => {
       var lis=document.createElement("li");
       lis.innerHTML =element.name+ " " + element.surname;
       uls.appendChild(lis)
        if (element.begimo_greitis === geriausias_begikas(futbolistai)){
            divuks.innerHTML = " <br>Pats greicias :" + element.name + " " + element.surname  + ", kuris bega  " + element.begimo_greitis + " km/h greiciu"
        }
        uls.appendChild(divuks)
    });
       

    


