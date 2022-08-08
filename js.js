// se van a definir todas las variables.
//defino con let las que se van a modificar y con const las que representan valores fijos, o sea los precios


//definimos el array combo que nos va a guardar todas las variables del combo
const combo = []
let pan 
let medallon
let cantMedallon
let queso
let jamon
let lechuga
let tomate
let papas
let gaseosa
let tamanoGaseosa
let descuento


//Acá comienzan las funciones
//esta función sirve para seleccionar el tipo 
//En todas estas funciones utilizo un while para validad el ingreso de los datos
function seleccionaPan(){

pan = prompt("seleccione el tipo de pan que desea (normal - de papa)")

while (pan !== "normal" && pan !=="de papa"){
    pan = prompt("seleccione el tipo de pan que desea (normal - de papa)")    
}
    combo.push(pan)
if (pan == "normal"){
        combo.push(90)
    
}else{
    
    combo.push(100)
}

console.log ("Pan " + combo[0] + ": $" + combo[1])
}//siempre cierro con un comentario vacio la última llave para evitar borrarla y romper el código


//selecciona el tipo de medallon y la cantidad
function seleccionaMedallon(){
    medallon = prompt("seleccione el tipo de medallon que desea (carne - pollo)")
    
while (medallon !== "carne" && medallon !=="pollo"){
    medallon = prompt("seleccione el tipo de medallon que desea (carne - pollo)")}
    combo.push (medallon)

    cantMedallon = prompt("seleccione la cantidad de medallones (1 - 2 - 3)")

while (isNaN(cantMedallon) || cantMedallon <1 || cantMedallon >3){
    cantMedallon = prompt("seleccione la cantidad de medallones (1 - 2 - 3)") }
    cantMedallon = parseInt(cantMedallon)
    combo.push (cantMedallon)
if( medallon == "pollo"){
    combo.push(150)
    }else{
    combo.push(200)
    }

combo.push(combo[3]*combo[4])

if(cantMedallon == 1){
 console.log(combo[3] + " medallón de " + combo[2] + ":$" + combo[5])   
}else{
    console.log(combo[3] + " medallones de " + combo[2] + ":$" + combo[5]) 
}
}//


//selecciona el queso
function seleccionaQueso(){
    queso = prompt("¿Desea su hamburguesa con queso? (sí - no)").toLowerCase()
    
    
    while(queso !== "si" && queso !== "no" && queso !== "sí"){
        queso = prompt("¿Desea su hamburguesa con queso? (sí - no)").toLowerCase()
    }
combo.push(queso)
if (combo[6] == "no"){
    combo.push(0)
    console.log("Sin queso")
}else{
    combo.push(50)
    console.log("Con queso: $"+ combo[7])
}
}//

//Selecciona el jamon  
function seleccionaJamon(){
    jamon = prompt("¿Desea su hamburguesa con jamón? (sí - no)").toLowerCase()
    
    
    while(jamon !== "si" && jamon !== "no" && jamon !== "sí"){
        jamon = prompt("¿Desea su hamburguesa con jamón? (sí - no)").toLowerCase()
    }
combo.push(jamon)
if (combo[8] == "no"){
    combo.push(0)
    console.log("Sin jamon")
}else{
    combo.push(80)
    console.log("Con jamon: $"+ combo[9])
}
}//

//selecciona la lechuga
function seleccionaLechuga(){
    lechuga = prompt("¿Desea su hamburguesa con lechuga? (sí - no)").toLowerCase()
    
    
    while(lechuga !== "si" && lechuga !== "no" && lechuga !== "sí"){
        lechuga = prompt("¿Desea su hamburguesa con lechuga? (sí - no)").toLowerCase()
    }
combo.push(lechuga)
if (combo[10] == "no"){
    combo.push(0)
    console.log("Sin lechuga")
}else{
    combo.push(15)
    console.log("Con lechuga: $"+ combo[11])
}
}//

//selecciona el tomate
function seleccionaTomate(){
    tomate = prompt("¿Desea su hamburguesa con tomate? (sí - no)").toLowerCase()
    
    
    while(tomate !== "si" && tomate !== "no" && tomate !== "sí"){
        tomate = prompt("¿Desea su hamburguesa con queso? (sí - no)").toLowerCase()
    }
combo.push(tomate)
if (combo[12] == "no"){
    combo.push(0)
    console.log("Sin tomate")
}else{
    combo.push(30)
    console.log("Con tomate: $"+ combo[13])
}
}//


//selecciona las papas y el tamaño
function seleccionaPapas(){
    papas = prompt("¿Qué tamaño de papas desea? (chico - mediano - grande)")
    while(papas !=="chico" && papas !== "mediano" && papas !== "grande"){
        papas = prompt("¿Qué tamaño de papas desea? (chico - mediano - grande)") 
    }
    combo.push(papas)

    if (combo[14] == "chico"){
        combo.push(150)
        console.log("Papas chicas: $"+ combo[15])
    }else if (combo[14] == "mediano"){
        combo.push(180)
        console.log("Papas medianas: $"+combo[15])
    }else{
        combo.push(200)
        console.log("Papas grandes: $"+combo[15])
    }
}

//selecciona la gaseosa y el tamaño
function seleccionGaseosa(){
    gaseosa = prompt("¿Qué gaseosa desea? (coca - fanta - sprite)").toLocaleLowerCase()

    while(gaseosa !=="coca" && gaseosa !== "fanta" && gaseosa !== "sprite"){
        gaseosa = prompt("¿Qué gaseosa desea? (coca - fanta - sprite)").toLocaleLowerCase()
    }
combo.push(gaseosa)
    tamanoGaseosa = prompt("¿Qué tamaño de gaseosa desea? (chico - mediano - grande)")

    while(tamanoGaseosa !=="chico" && tamanoGaseosa !== "mediano" && tamanoGaseosa !== "grande"){
        tamanoGaseosa = prompt("¿Qué tamaño de gaseosa desea? (chico - mediano - grande)") 
    }

if (tamanoGaseosa == "chico"){
    combo.push(120)
    console.log(gaseosa + " chica: $" + combo[17])
}else if(tamanoGaseosa == "mediano"){
    combo.push(150)
    console.log(gaseosa + " mediana: $" + combo[17])
}else{
    combo.push(180)
    console.log(gaseosa + " grande: $" + combo[17])
}


}//

//aplica el descuento
function obtieneDescuento(){

    descuento = prompt("¿Es usted estudiante o jubilado? (sí - no)").toLowerCase()
    
    
    while(descuento !== "si" && descuento !== "no" && descuento !== "sí"){
        descuento = prompt("¿Es usted estudiante o jubilado? (sí - no)").toLowerCase()
    }
combo.push(descuento)
if (descuento == "si" || descuento == "sí"){

    console.log("Descuento por jubilado o estudiante -15%")
    combo.push(combo[18]*0.85)
    console.log("TOTAL: $"+combo[20])


}
}//



//Estas son las líneas propiamente dichas del programa donde se van llamando a las funciones una a una en la medida que las necesitamos
console.log("SU COMBO:")
seleccionaPan()
seleccionaMedallon()
seleccionaQueso()
seleccionaJamon()
seleccionaLechuga()
seleccionaTomate()
seleccionaPapas()
seleccionGaseosa()

combo.push ( parseInt(combo[1]+combo[5]+combo[7]+combo[9]+combo[11]+combo[13]+combo[15]+combo[17]))

console.log("TOTAL: $"+ combo[18])
obtieneDescuento()
