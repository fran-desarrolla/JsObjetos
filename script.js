// defino el objeto que voy a utilizar mediante class
const precioPanComun = 90
const precioPanPapa = 100
const precioCarne = 150
const precioPollo = 200
const precioQueso = 40
const precioJamon = 70
const precioLechuga = 30
const precioTomate = 45
const precioPapasChicas = 120
const precioPapasMedianas = 150
const precioPapasGrandes = 180
const precioGaseosaChica = 200
const precioGaseosaMediana = 240
const precioGaseosaGrande = 260
const precioDescuento = 0.90
class Combo {
    constructor(pan, precioPan, medallon, cantidadMedallon, precioMedallon, queso, jamon, lechuga, tomate, precioQueso, precioJamon, precioLechuga, precioTomate, sizePapas, papas, gaseosa, sizeGaseosa, precioGaseosa, descuento, precioDescuento, totalCombo) {

        this.pan = pan;
        this.precioPan = precioPan;
        this.medallon = medallon;
        this.cantMedallon = cantidadMedallon;
        this.precioMedallon = precioMedallon;
        this.queso = queso;
        this.jamon = jamon;
        this.lechuga = lechuga;
        this.tomate = tomate;
        this.precioQueso = precioQueso;
        this.precioJamon = precioJamon;
        this.precioLechuga = precioLechuga;
        this.precioTomate = precioTomate;
        this.sizePapas = sizePapas;
        this.papas = papas;
        this.gaseosa = gaseosa;
        this.sizeGaseosa = sizeGaseosa;
        this.precioGaseosa = precioGaseosa;
        this.descuento= descuento;
        this.precioDescuento = precioDescuento;
        this.totalCombo = totalCombo;

    }
    seleccionaPan() {
        this.pan = prompt("seleccione el tipo de pan que desea (normal - de papa)")
        while (this.pan !== "normal" && this.pan !== "de papa" && this.pan !== "fin") {
            this.pan = prompt("seleccione el tipo de pan que desea (normal - de papa)")
        }
        if (this.precioPan == "normal") {
            this.pan = precioPanComun

        } else {

            this.precioPan = precioPanPapa
        }

        console.log("Pan " + this.pan + ": $" + this.precioPan)

    }
    seleccionaMedallon() {

        this.medallon = prompt("seleccione el tipo de medallon que desea (carne - pollo)")

        while (this.medallon !== "carne" && this.medallon !== "pollo") {
            medallon = prompt("seleccione el tipo de medallon que desea (carne - pollo)")
        }

        this.cantMedallon = prompt("seleccione la cantidad de medallones (1 - 2 - 3)")

        while (isNaN(this.cantMedallon) || this.cantMedallon < 1 || this.cantMedallon > 3) {
            this.cantMedallon = prompt("seleccione la cantidad de medallones (1 - 2 - 3)")
        }
        this.cantMedallon = parseInt(this.cantMedallon)

        if (this.medallon == "pollo") {
            this.precioMedallon = precioPollo * this.cantMedallon
        } else {
            this.precioMedallon = precioCarne * this.cantMedallon
        }


        if (this.cantMedallon == 1) {
            console.log(this.cantMedallon + " medallón de " + this.medallon + ":$" + this.precioMedallon)
        } else {
            console.log(this.cantMedallon + " medallones de " + this.medallon + ":$" + this.precioMedallon)
        }
    }


    seleccionaQueso() {
        this.queso = prompt("¿Desea su hamburguesa con queso? (sí - no)").toLowerCase()


        while (this.queso !== "si" && this.queso !== "no" && this.queso !== "sí") {
            this.queso = prompt("¿Desea su hamburguesa con queso? (sí - no)").toLowerCase()
        }

        if (this.queso == "no") {
            console.log("Sin queso")
            this.precioQueso = 0
        } else {
            this.precioQueso = precioQueso
            console.log("Con queso: $" + this.precioQueso)
        }
    }

    seleccionaJamon() {
        this.jamon = prompt("¿Desea su hamburguesa con jamón? (sí - no)").toLowerCase()


        while (this.jamon !== "si" && this.jamon !== "no" && this.jamon !== "sí") {
            this.jamon = prompt("¿Desea su hamburguesa con queso? (sí - no)").toLowerCase()
        }

        if (this.jamon == "no") {
            console.log("Sin jamón")
            this.precioJamon = 0
        } else {
            this.precioJamon = precioJamon
            console.log("Con jamón: $" + this.precioJamon)
        }
    }

    seleccionaLechuga() {
        this.lechuga = prompt("¿Desea su hamburguesa con lechuga? (sí - no)").toLowerCase()


        while (this.lechuga !== "si" && this.lechuga !== "no" && this.lechuga !== "sí") {
            this.lechuga = prompt("¿Desea su hamburguesa con lechuga? (sí - no)").toLowerCase()
        }

        if (this.lechuga == "no") {
            console.log("Sin lechuga")
            this.precioLechuga = 0
        } else {
            this.precioLechuga = precioLechuga
            console.log("Con lechuga: $" + this.precioLechuga)
        }
    }

    seleccionaTomate() {
        this.tomate = prompt("¿Desea su hamburguesa con tomate? (sí - no)").toLowerCase()


        while (this.tomate !== "si" && this.tomate !== "no" && this.tomate !== "sí") {
            this.tomate = prompt("¿Desea su hamburguesa con tomate? (sí - no)").toLowerCase()
        }

        if (this.tomate == "no") {
            console.log("Sin tomate")
            this.precioTomate = 0
        } else {
            this.precioTomate = precioLechuga
            console.log("Con tomate: $" + this.precioTomate)
        }
    }



    seleccionaPapas() {
        this.sizePapas = prompt("¿Qué tamaño de papas desea? (chicas - medianas - grandes)").toLowerCase()


        while (this.sizePapas !== "chicas" && this.sizePapas !== "medianas" && this.sizePapas !== "grandes") {
            this.sizePapas = prompt("¿Qué tamaño de papas desea? (chicas - medianas - grandes)").toLowerCase()
        }

        if (this.sizePapas == "chicas") {
            this.papas = precioPapasChicas
        } else if (this.sizePapas == "medianas"){
            this.papas = precioPapasMedianas
        } else {
            this.papas = precioPapasGrandes 
        }
        
        console.log("Papas " + combo1.sizePapas + ": $" + combo1.papas)
    }

    seleccionaGaseosa(){
        this.gaseosa = prompt("¿Qué gaseosa desea? (Coca - Fanta - Sprite)").toLowerCase()

        while (this.gaseosa !== "coca" && this.gaseosa !== "fanta" && this.gaseosa !== "sprite") {
            this.gaseosa = prompt("¿Qué gaseosa desea? (Coca - Fanta - Sprite)").toLowerCase()
        }
      
        
        this.sizeGaseosa = prompt("¿Qué tamaño de gaseosa desea? (chica - mediana - grande)").toLowerCase()

        while (this.sizeGaseosa !== "chica" && this.sizeGaseosa !== "mediana" && this.sizeGaseosa !== "grande") {
            this.sizeGaseosa = prompt("¿Qué tamaño de gaseosa desea? (chica - mediana - grande)").toLowerCase()
        }

        if(this.sizeGaseosa == "chica"){
            this.precioGaseosa = precioGaseosaChica
        }else if(this.sizeGaseosa == "mediana"){
            this.precioGaseosa = precioGaseosaMediana
        }else{
            this.precioGaseosa = precioGaseosaGrande
        }

   
    
    
    console.log(this.gaseosa + " " + this.sizeGaseosa + ": $" + this.precioGaseosa)
}

aplicaDescuento(){

    this.descuento = prompt ("Es jubilado o estudiante (si - no)").toLowerCase()

    while(this.descuento !=="si" && this.descuento !== "no" && this.descuento !=="sí"){
        this.descuento = prompt ("Es jubilado o estudiante (si - no)").toLowerCase()
    }

    if (this.descuento =="si"){
        this.totalCombo = this.totalCombo * precioDescuento
        console.log("Descuento por jubilado o estudiante")
        console.log("TOTAL= $" + this.totalCombo)
    }


}

calculaTotal(){
    this.totalCombo = this.precioPan + this.precioMedallon + this.precioJamon + this.precioQueso + this.precioLechuga + this.precioTomate + this.precioGaseosa + this.papas;
    console.log("TOTAL= $" + this.totalCombo)
}


}

 

const combo1 = new Combo()

combo1.seleccionaPan()
combo1.seleccionaMedallon()
combo1.seleccionaQueso()
combo1.seleccionaJamon()
combo1.seleccionaLechuga()
combo1.seleccionaTomate()
combo1.seleccionaPapas()
combo1.seleccionaGaseosa()
combo1.calculaTotal()
combo1.aplicaDescuento()


