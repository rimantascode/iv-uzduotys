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




