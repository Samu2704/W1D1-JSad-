function checkNumber(a,b){
    if((a===50 || b===50) || a+b===50){
        return true
    }else{
        return false
    }
}
console.log(checkNumber(70, 40))

/*esercixio 1 */


function remove(samuele, y){
    let newWord= samuele.split("")
    newWord.splice(y,1)
    return newWord.join("")
}
console.log(remove("samuele", 3))
/* esercizio 2*/



function check(a,b){
    if((a > 40 && a < 60) || (b > 70 && b < 100)){
        return true
    } else{
        return false
    }
}
console.log(check(85,85))
/*esercizio 3*/


function start(city){
    if (city.startsWith("Los") || city.startsWith("New")){
        return city
    }
    else
        return false
}
console.log(start("Los Angeles"))
console.log(start("catania"))
console.log(start("New orleans"))
/*esercizio 4*/





function addiziona(array){
    let somma=0
    for(let i=0; i<array.length; i++){
        somma+=array[i]
    }
    return somma
}   
console.log(addiziona([1,2,3,4,5]))
/*esercizio 5*/


function checkArray(array){
   return !array.includes(1) && !array.includes(3)
    
}
console.log(checkArray([2,4,5]))
/*esercizio 6*/

let tipoDiAngolo
function TipoAngolo(a){
    if (a < 90){
        tipoDiAngolo="acuto"
    } 
    else if (a===90) {
        tipoDiAngolo= "retto"
    }
    else if(a >90 && a <180){
        tipoDiAngolo= "ottuso"
    }
    else if (a===180){
        tipoDiAngolo= "piatto"
    }
    return tipoDiAngolo        
}
console.log(TipoAngolo(180))
/*esercizio 7*/


function acronimo(a){
let FIAT = a.toUpperCase()
let array = FIAT.split(" ")
let mettiAcronimo=""
for(index of array){
    mettiAcronimo += index.charAt(0)
}
return mettiAcronimo
}
console.log(acronimo("fab ita auto tor"))
/* esercizio8*/



function extra1(stringa){
    let letteraPiùUsata=""
    let count=0
    let arrayLettere=stringa.split("")
    for(let i=0; i < arrayLettere.length; i++){
        let calcoloSingolaLettera = stringa.split(stringa.charAt(i)).length-1
        if(calcoloSingolaLettera>count){
            count=calcoloSingolaLettera
            letteraPiùUsata=stringa.charAt(i)
        }
    }
    return letteraPiùUsata
}
console.log(extra1("gabriela"))
