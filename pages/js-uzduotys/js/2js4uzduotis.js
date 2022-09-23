// 1. Susiskurti objectu masyva
// 2. Issiaiskinti kaip veikia foreach 
// 3. Issiaiskinti kaip paskaiciuoti lygini.
// 4. Atvaizduoti herojus html'e;

herojai = [
    {
        name:"Hulk",
        skills:"Super jega",
    },
    {
        name:"Spiderman",
        skill:"Voro Savybes"
    },
    {
        name:"Gelezenis zmogus",
        skill:"Platus ginklu arsenalas"
    },
]

herojai.forEach(function(element,index){
    var arLyginis=index +1;
    if(arLyginis % 2 == 0){
    // console.log(element, index + "ar gaunasi")}
    var divas = document.createElement("div");
    divas.innerHTML = element.name + ": " + element.skill;
    divas.style.background="blue";
    divas.style.color="white";
    document.body.appendChild(divas);
    }else {
        var divas = document.createElement("div");
        divas.innerHTML = element.name + ": " + element.skill;
        document.body.appendChild(divas)
    }
})
